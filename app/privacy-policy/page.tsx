import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Promodrive",
  description:
    "Learn how Promodrive collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36">
        <h1 className="heading-serif text-4xl leading-tight lg:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: May 2025
        </p>

        <div className="prose prose-neutral dark:prose-invert mt-12 max-w-none">
          <Section title="1. Introduction">
            <p>
              Promodrive (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a digital marketing and
              branding agency based in Noida- Uttar Pradesh, India. This Privacy Policy
              explains how we collect, use, disclose, and protect information
              when you visit our website (promodrive.in) or engage our services.
            </p>
            <p>
              By using our website or contacting us, you agree to the collection
              and use of information in accordance with this policy.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect the following types of information:</p>
            <ul>
              <li>
                <strong>Contact information</strong> — name, email address,
                phone number, and project details you submit via our contact
                form or when scheduling a call.
              </li>
              <li>
                <strong>Usage data</strong> — pages visited, time spent on
                pages, browser type, device type, and IP address collected
                automatically via analytics tools.
              </li>
              <li>
                <strong>Communication data</strong> — emails, messages, or
                other correspondence you send us.
              </li>
              <li>
                <strong>Client project data</strong> — business information,
                brand assets, and materials you share with us in the course of
                our engagement.
              </li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use collected information to:</p>
            <ul>
              <li>Respond to enquiries and schedule consultations</li>
              <li>Deliver the services you have engaged us for</li>
              <li>Send service-related communications and project updates</li>
              <li>
                Improve our website experience and understand visitor behaviour
              </li>
              <li>
                Send marketing communications (only with your consent; you may
                opt out at any time)
              </li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="4. Third-Party Services">
            <p>
              We use trusted third-party tools that may process your data on our
              behalf:
            </p>
            <ul>
              <li>
                <strong>Google Analytics</strong> — website traffic and
                behaviour analysis
              </li>
              <li>
                <strong>Calendly</strong> — call scheduling; governed by
                Calendly&apos;s own Privacy Policy
              </li>
              <li>
                <strong>Google Ads / Meta Ads</strong> — advertising platforms
                used for client campaigns (not for collecting your personal data
                without consent)
              </li>
              <li>
                <strong>Firebase (Google)</strong> — backend infrastructure for
                our internal tools
              </li>
            </ul>
            <p>
              Each third-party service has its own privacy policy. We encourage
              you to review them independently.
            </p>
          </Section>

          <Section title="5. Cookies">
            <p>
              Our website uses cookies to enhance browsing experience and
              analyse traffic. These include:
            </p>
            <ul>
              <li>
                <strong>Essential cookies</strong> — required for the website to
                function
              </li>
              <li>
                <strong>Analytics cookies</strong> — help us understand how
                visitors use the site (Google Analytics)
              </li>
              <li>
                <strong>Marketing cookies</strong> — used for retargeting
                through ad platforms
              </li>
            </ul>
            <p>
              You can disable cookies via your browser settings. Some features
              may not function correctly if cookies are disabled.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain personal data only for as long as necessary to fulfil
              the purpose for which it was collected, or as required by
              applicable law. Contact form submissions are retained for up to 2
              years. Client project data is retained for the duration of the
              engagement and up to 3 years thereafter for legal and business
              purposes.
            </p>
          </Section>

          <Section title="7. Data Security">
            <p>
              We implement appropriate technical and organisational measures to
              protect your personal data against unauthorised access, loss, or
              disclosure. However, no method of transmission over the internet
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Withdraw consent for marketing communications at any time</li>
              <li>Lodge a complaint with the relevant data protection authority</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:hello@promodrive.in" className="text-primary hover:underline">
                hello@promodrive.in
              </a>
              .
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              Our website and services are not directed to individuals under the
              age of 18. We do not knowingly collect personal data from minors.
              If you believe a minor has provided us with personal data, contact
              us immediately.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated &quot;Last updated&quot; date. We
              encourage you to review this policy periodically.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have questions about this Privacy Policy or how we handle
              your data:
            </p>
            <address className="not-italic">
              <strong>Promodrive</strong>
              <br />
              Noida- Uttar Pradesh, India
              <br />
              <a href="mailto:hello@promodrive.in" className="text-primary hover:underline">
                info@promodrive.in
              </a>
            </address>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="heading-serif text-xl font-normal lg:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed text-sm lg:text-base">
        {children}
      </div>
    </section>
  );
}
