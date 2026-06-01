import { Link } from "wouter";
import logoPath from "@/assets/images/logo.avif";

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-serif font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">
          <strong>Effective Date:</strong> May 1, 2026
        </p>

        <p className="text-muted-foreground leading-relaxed mb-10">
          Piña Local Sites, operated by HealthyDigital LLC ("Piña Local Sites",
          "HealthyDigital LLC", "we", "our", or "us"), respects your privacy and
          is committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, disclose, and protect information
          when you visit{" "}
          <a
            href="https://pinalocalsites.com"
            className="text-primary hover:underline"
          >
            https://pinalocalsites.com
          </a>{" "}
          (the "Site"), contact us, or use our website design, development, and
          related digital services.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We may collect personal information that you voluntarily provide,
              including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business information</li>
              <li>
                Information submitted through contact or consultation forms
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We may also automatically collect certain technical information
              when you visit the Site, including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>General website usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We use your information to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
              <li>Respond to inquiries and consultation requests</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Protect against spam, fraud, or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed font-medium">
              We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use essential cookies and basic analytics tools to
              improve functionality and understand website usage. You can
              disable cookies through your browser settings if you prefer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We may use trusted third-party providers to help operate our
              business and website, including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
              <li>Website hosting providers</li>
              <li>Email providers</li>
              <li>Analytics providers</li>
              <li>Scheduling or communication tools</li>
              <li>Payment processors, including Stripe</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              These providers may process limited information necessary to
              perform their services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain personal information only as long as reasonably
              necessary for business, legal, or operational purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We take reasonable technical and organizational measures to
              protect your personal information. However, no method of internet
              transmission or storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for individuals under the age of 18,
              and we do not knowingly collect personal information from
              children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">International Users</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are operated from the United States and may involve
              data processing in other countries. By using the Site, you consent
              to the transfer and processing of your information in accordance
              with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Depending on your location, you may have rights regarding your
              personal information, including the right to request access,
              correction, or deletion of your data.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              To make a request, contact us at:{" "}
              <a
                href="mailto:adrian@pinalocalsites.com"
                className="text-primary hover:underline"
              >
                adrian@pinalocalsites.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Contact Information</h2>
            <address className="not-italic text-muted-foreground leading-relaxed space-y-1">
              <p className="font-medium text-foreground">
                HealthyDigital LLC d/b/a Piña Local Sites
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

          <section>
            <h2 className="text-2xl font-bold mb-3">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Updated
              versions will be posted on this page with a revised effective
              date.
            </p>
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
