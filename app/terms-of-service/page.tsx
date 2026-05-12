import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Promodrive",
  description:
    "Read the terms and conditions governing the use of Promodrive's digital marketing services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36">
        <h1 className="heading-serif text-4xl leading-tight lg:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: May 2025
        </p>

        <div className="prose prose-neutral dark:prose-invert mt-12 max-w-none">
          <Section title="1. Agreement to Terms">
            <p>
              By engaging Promodrive (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) for digital
              marketing, branding, or web development services, or by accessing
              our website (promodrive.in), you agree to be bound by these Terms
              of Service. If you do not agree, please do not use our services.
            </p>
            <p>
              These Terms apply to all clients, visitors, and users of our
              website and services.
            </p>
          </Section>

          <Section title="2. Services">
            <p>
              Promodrive provides digital marketing and brand growth services
              including, but not limited to:
            </p>
            <ul>
              <li>Website design and development</li>
              <li>Social media marketing and management</li>
              <li>Performance marketing (Google Ads, Meta Ads)</li>
              <li>Search engine optimisation (SEO)</li>
              <li>Content creation and copywriting</li>
              <li>Brand strategy and identity</li>
              <li>Growth analysis and reporting</li>
            </ul>
            <p>
              The specific scope, deliverables, and timelines for each
              engagement are defined in a separate Service Agreement or
              Statement of Work (&quot;SOW&quot;) agreed upon between Promodrive and the
              client prior to commencement.
            </p>
          </Section>

          <Section title="3. Client Responsibilities">
            <p>The client agrees to:</p>
            <ul>
              <li>
                Provide accurate, complete, and timely information, assets, and
                approvals required for us to deliver services
              </li>
              <li>
                Designate a point of contact authorised to make decisions on
                behalf of the business
              </li>
              <li>
                Review and provide feedback on deliverables within agreed
                timelines (delays on the client side may affect project
                timelines)
              </li>
              <li>
                Ensure all content, materials, and information provided to
                Promodrive are lawful and do not infringe third-party rights
              </li>
              <li>Make timely payments as per the agreed schedule</li>
            </ul>
          </Section>

          <Section title="4. Fees and Payment">
            <p>
              Fees for services are outlined in the client&apos;s Service Agreement
              or SOW. General payment terms:
            </p>
            <ul>
              <li>
                A non-refundable advance (typically 50%) is required before
                project commencement
              </li>
              <li>
                Remaining balance is due upon project completion or as per the
                agreed milestone schedule
              </li>
              <li>
                Retainer clients are billed monthly in advance; payment is due
                within 7 days of invoice date
              </li>
              <li>
                Late payments may result in a pause of services until the
                outstanding balance is cleared
              </li>
              <li>All prices are in Indian Rupees (INR) unless stated otherwise</li>
            </ul>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              <strong>Client-owned assets:</strong> All content, logos, brand
              materials, and information provided by the client remain the
              intellectual property of the client.
            </p>
            <p>
              <strong>Promodrive deliverables:</strong> Upon receipt of full
              payment, ownership of final deliverables (websites, creative
              assets, content) transfers to the client. Work-in-progress
              remains the property of Promodrive until payment is received.
            </p>
            <p>
              <strong>Portfolio rights:</strong> Unless explicitly restricted in
              writing, Promodrive reserves the right to showcase completed work
              in our portfolio, case studies, and marketing materials.
            </p>
            <p>
              <strong>Promodrive tools and processes:</strong> Our proprietary
              frameworks, methodologies, templates, and internal tools remain
              the intellectual property of Promodrive at all times.
            </p>
          </Section>

          <Section title="6. Confidentiality">
            <p>
              Both parties agree to keep confidential any proprietary or
              sensitive information shared during the engagement. This includes
              business strategies, financials, client data, and any information
              explicitly marked as confidential. This obligation survives
              termination of the service agreement.
            </p>
          </Section>

          <Section title="7. Results and Performance">
            <p>
              Digital marketing results depend on numerous factors including
              market conditions, competition, platform algorithm changes, and
              client-side variables. Promodrive does not guarantee specific
              results such as rankings, follower counts, revenue figures, or
              advertising performance metrics unless explicitly stated in a
              signed agreement.
            </p>
            <p>
              We commit to applying best practices, transparent reporting, and
              continuous optimisation to maximise performance within the agreed
              scope.
            </p>
          </Section>

          <Section title="8. Termination">
            <p>
              Either party may terminate a service engagement by providing 30
              days&apos; written notice. Upon termination:
            </p>
            <ul>
              <li>
                The client is liable for payment of all work completed up to the
                termination date
              </li>
              <li>
                Advances paid are non-refundable unless Promodrive has failed to
                commence agreed work
              </li>
              <li>
                Promodrive will provide all completed deliverables upon receipt
                of outstanding payment
              </li>
            </ul>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, Promodrive
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including loss of revenue,
              loss of data, or loss of business opportunity, arising from the
              use of our services or website.
            </p>
            <p>
              Our total liability to you for any claim arising from our services
              shall not exceed the total fees paid by you to Promodrive in the
              three months preceding the claim.
            </p>
          </Section>

          <Section title="10. Third-Party Platforms">
            <p>
              Our services may involve work on third-party platforms (Google,
              Meta, Instagram, LinkedIn, etc.). We are not responsible for
              changes in platform policies, algorithm updates, account
              suspensions imposed by these platforms, or any resulting impact on
              campaign performance.
            </p>
            <p>
              Client ad accounts and platform accounts remain the property of
              the client at all times. Access granted to Promodrive for service
              delivery should be revoked by the client upon termination.
            </p>
          </Section>

          <Section title="11. Governing Law">
            <p>
              These Terms of Service are governed by and construed in accordance
              with the laws of India. Any disputes arising from or in connection
              with these terms shall be subject to the exclusive jurisdiction of
              the courts of New Delhi, India.
            </p>
          </Section>

          <Section title="12. Changes to Terms">
            <p>
              We reserve the right to update these Terms of Service at any time.
              Changes will be posted on this page with an updated &quot;Last
              updated&quot; date. Continued use of our services after any changes
              constitutes acceptance of the revised terms.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>
              For questions about these Terms of Service:
            </p>
            <address className="not-italic">
              <strong>Promodrive</strong>
              <br />
              Noida- Uttar Pradesh, India
              <br />
              <a href="mailto:hello@promodrive.in" className="text-primary hover:underline">
                Info@promodrive.in
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
