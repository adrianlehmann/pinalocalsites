import { Link } from "wouter";
import logoPath from "@/assets/images/logo.avif";

export default function TermsOfService() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      <header className="border-b py-4 px-6 flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          data-testid="link-home-logo"
        >
          <img
            src={logoPath}
            alt="Piña Local Sites logo"
            className="h-9 w-9 object-contain"
          />
          <span className="font-bold text-lg tracking-tight">
            piña local sites
          </span>
        </Link>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-16 max-w-3xl">
        <h1 className="text-4xl font-serif font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-6">
          <strong>Effective Date:</strong> May 1, 2026
        </p>

        <p className="text-muted-foreground leading-relaxed mb-4">
          Welcome to Piña Local Sites, operated by HealthyDigital LLC ("Piña
          Local Sites", "HealthyDigital LLC", "we", "our", or "us"). By
          accessing or using{" "}
          <a
            href="https://pinalocalsites.com"
            className="text-primary hover:underline"
          >
            https://pinalocalsites.com
          </a>{" "}
          (the "Site") or engaging with our website design, development,
          consulting, or related digital services, you agree to these Terms of
          Service ("Terms").
        </p>
        <p className="text-muted-foreground leading-relaxed mb-10">
          If you do not agree with these Terms, please do not use the Site or
          our services.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-3">Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Piña Local Sites provides website design, development, consulting,
              and related digital services for businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All services are subject to availability and may be modified or
              discontinued at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Consultation Requests</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Submitting a contact form or requesting a consultation does not
              create a binding client relationship or guarantee service
              availability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to decline projects at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Clients agree to provide accurate information, timely feedback,
              and any content or materials necessary for project completion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Clients are responsible for ensuring they have the rights to any
              materials, images, logos, or content they provide to us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Payments</h2>

            <p className="text-muted-foreground leading-relaxed mb-3">
              Payment terms for any project or ongoing subscription service will be agreed
              upon separately before work begins.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-3">
              Payments may be processed through third-party payment providers,
              including Stripe. By submitting payment information, you authorize
              the applicable payment processor to charge agreed-upon fees for
              services rendered.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Failure to pay invoices on time may result in delayed work,
              suspension of services, or termination of agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Subscription Plans</h2>

            <p className="text-muted-foreground leading-relaxed mb-3">
              Certain services, including website hosting, maintenance, and
              support plans, are provided on a recurring subscription basis.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-3">
              Unless otherwise agreed in writing, subscription plans require a
              minimum initial term of twelve (12) months.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-3">
              Subscriptions are billed monthly through the selected payment
              method.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-3">
              After the initial 12-month term, subscriptions automatically renew
              on a month-to-month basis unless canceled by either party with at
              least 30 days' notice.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-3">
              If a client cancels a subscription before the end of the initial twelve (12) month term, the client remains responsible for payment of the remaining balance of the initial commitment, unless otherwise agreed in writing.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Failure to make subscription payments may result in suspension of
              hosting, maintenance, website updates, email services, or other
              recurring services until the account is brought current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Website Hosting & Ownership
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-3">
              Website hosting, maintenance, and related services remain active
              only while the applicable subscription is active and in good
              standing. If subscription payments are not maintained, we may
              suspend hosting, maintenance, business email, and other recurring
              services after at least seven (7) days' written notice.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-3">
              Unless otherwise agreed in writing, the client owns the final
              website design and content created specifically for their project,
              subject to full payment of all applicable fees.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-3">
              Upon completion of the initial twelve (12) month subscription term
              and payment of all outstanding balances, clients may request a
              transfer of their website to another hosting provider or request a
              copy of the website files, where technically feasible.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Piña Local Sites retains ownership of its proprietary tools,
              templates, frameworks, code libraries, automation systems, and
              other non-client-specific assets used in developing the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Refunds & Cancellations</h2>

            <p className="text-muted-foreground leading-relaxed mb-3">
              Due to the custom nature of digital and creative services,
              payments made for completed work or time already performed are
              generally non-refundable unless otherwise agreed in writing.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Either party may cancel a project before work begins. Any
              deposits, milestone payments, or partial refunds will be handled
              according to the specific project agreement.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-3">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Clients retain ownership of their provided content and branding
                materials.
              </li>
              <li>
                Piña Local Sites retains ownership of internal tools, templates,
                frameworks, and non-client-specific materials used during
                development.
              </li>
              <li>
                Website ownership and transfer are governed by the Website Hosting & Ownership section of these Terms, unless otherwise agreed in writing.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Projects may involve third-party services such as hosting
              providers, domain registrars, analytics tools, scheduling tools,
              email providers, or payment processors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are not responsible for outages, errors, pricing changes, or
              actions of third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">No Guarantees</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              While we strive to provide high-quality services, we do not
              guarantee:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>uninterrupted website availability,</li>
              <li>specific business results,</li>
              <li>search engine rankings,</li>
              <li>lead generation,</li>
              <li>
                or compatibility with all devices or third-party services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Force Majeure</h2>
            <p className="text-muted-foreground leading-relaxed">
              Piña Local Sites is not responsible for delays, interruptions, or
              failures caused by events beyond our reasonable control, including
              natural disasters, internet outages, acts of government, labor
              disputes, power outages, or failures of third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              To the maximum extent permitted by law, Piña Local Sites shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising from the use of the Site or our services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our total liability for any claim shall not exceed the amount paid
              to us for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Website Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this Site, including text, graphics, branding, and
              design elements, is owned by or licensed to Piña Local Sites and
              may not be copied or reused without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Content Updates</h2>

            <p className="text-muted-foreground leading-relaxed">
              Monthly content updates included in subscription plans are
              intended for reasonable modifications to existing website content.
              Requests involving significant redesigns, new pages, custom
              functionality, or extensive content creation may require an
              additional quote.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your use of the Site is also governed by our{" "}
              <Link
                href="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to refuse service, suspend projects, or
              terminate access to the Site if these Terms are violated or if
              abusive, fraudulent, or unlawful behavior occurs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by the laws of the State of New Mexico, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Changes to These Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms from time to time. Updated versions will
              be posted on this page with a revised effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Contact Information</h2>
            <address className="not-italic text-muted-foreground leading-relaxed space-y-1">
              <p className="font-medium text-foreground">
                Piña Local Sites is operated by HealthyDigital LLC.
              </p>
              <p>
                <a
                  href="mailto:adrian@pinalocalsites.com"
                  className="text-primary hover:underline"
                >
                  adrian@pinalocalsites.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+18085155573"
                  className="hover:text-primary transition-colors"
                >
                  +1 (808) 515-5573
                </a>
              </p>
              <p className="pt-1">
                1209 Mountain Road Pl NE, Ste N<br />
                Albuquerque, NM 87110
                <br />
                USA
              </p>
            </address>
          </section>
        </div>
      </main>

      <footer className="border-t py-6 px-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Piña Local Sites. All rights
          reserved.
        </p>
        <div className="flex justify-center gap-6 mt-2">
          <Link
            href="/privacy-policy"
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}
