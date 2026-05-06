import { createSign } from "node:crypto";
import { readFileSync } from "node:fs";

const [, , uid, value = "true"] = process.argv;
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT;

if (!uid) {
  console.error("Usage: node scripts/set-admin-claim.mjs <firebase-auth-uid> [true|false]");
  process.exit(1);
}

if (!serviceAccountPath) {
  console.error("Set FIREBASE_SERVICE_ACCOUNT to a service account JSON file path.");
  process.exit(1);
}

const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf8"));
const admin = value.toLowerCase() !== "false";

function base64Url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}

function signJwt(payload) {
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const body = base64Url(JSON.stringify(payload));
  const signature = createSign("RSA-SHA256")
    .update(`${header}.${body}`)
    .sign(serviceAccount.private_key, "base64")
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");

  return `${header}.${body}.${signature}`;
}

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const assertion = signJwt({
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/identitytoolkit",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  });

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Token request failed: ${JSON.stringify(data)}`);
  }

  return data.access_token;
}

const accessToken = await getAccessToken();
const response = await fetch(
  `https://identitytoolkit.googleapis.com/v1/projects/${serviceAccount.project_id}/accounts:update`,
  {
    method: "POST",
    headers: {
      authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      localId: uid,
      customAttributes: JSON.stringify({ admin }),
    }),
  }
);

const data = await response.json();
if (!response.ok) {
  throw new Error(`Custom claim update failed: ${JSON.stringify(data)}`);
}

console.log(`${admin ? "Granted" : "Removed"} admin custom claim for ${uid}.`);
console.log("Ask the user to sign out and sign back in, or refresh their ID token.");
