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
              Payment terms for any project or ongoing service will be agreed
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
                Final website ownership and transfer terms may be defined in
                individual project agreements.
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
              These Terms shall be governed by and interpreted in accordance
              with the laws applicable in the United States, without regard to
              conflict of law principles.
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
