/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      // Force Firebase to use browser builds in Turbopack (avoids gRPC/node dependencies)
      "@firebase/firestore/dist/index.node.mjs": "@firebase/firestore/dist/index.esm.js",
      "@firebase/firestore/dist/common-abbd8850.node.mjs": "@firebase/firestore/dist/common-edb5d170.esm.js",
    },
  },
}

export default nextConfig
