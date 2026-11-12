import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Aesthetic Dental Center is committed to making our website and practice accessible to all patients. Read our accessibility statement and share feedback.",
  alternates: {
    canonical: "/accessibility-statement",
  },
};

export default function AccessibilityStatementPage() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      title="Accessibility Statement"
      description="Everyone deserves to feel welcome — online and in our office. We are working to make this website and our practice easier to use for all patients."
    >
      <h2>Our commitment</h2>
      <p>
        Aesthetic Dental Center is committed to providing accessible information
        and care. We recognize that people experience websites and dental offices
        in different ways, and we want our patients and visitors to be able to
        find what they need with confidence.
      </p>
      <p>
        We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at
        Level AA for this website. Accessibility is an ongoing effort, and we do
        not claim that every part of the site is fully conformant today. We
        continue to review and improve the experience over time.
      </p>

      <h2>What we have done</h2>
      <p>This website includes a number of accessibility considerations, such as:</p>
      <ul>
        <li>Semantic headings and landmarks to support screen readers and keyboard navigation</li>
        <li>Skip-to-content navigation at the top of each page</li>
        <li>Text alternatives for meaningful images</li>
        <li>Visible focus indicators for keyboard users</li>
        <li>Responsive layouts that support zoom and smaller screens</li>
        <li>Reduced-motion support for visitors who prefer less animation</li>
        <li>Sufficient color contrast for primary text and interactive elements</li>
      </ul>

      <h2>Third-party services</h2>
      <p>
        Some parts of the website rely on services provided by other companies,
        including Google Maps, our online scheduling portal, and social media
        links. We do not control those services, and their accessibility features
        may differ. If a third-party service is difficult for you to use, please
        contact our office and we will help you complete the same task by phone.
      </p>

      <h2>In our office</h2>
      <p>
        If you have a disability or communication preference, tell us when you
        schedule. We will do our best to accommodate your needs and discuss the
        arrangements available at our Bismarck office. Advance notice helps us
        prepare, but please ask even if your appointment is already scheduled.
      </p>

      <h2>Feedback</h2>
      <p>
        If you encounter a barrier on this website, need information in another
        format, or have a suggestion for improvement, we would like to hear from
        you. Please include the page or feature you are referring to and the type
        of difficulty you experienced.
      </p>
      <p>
        Call <a href={site.phoneHref}>{site.phoneDisplay}</a> or use our{" "}
        <Link href="/contact">contact form</Link>. We will review your feedback
        and respond as soon as we can.
      </p>

      <h2>Ongoing work</h2>
      <p>
        Accessibility is not a one-time project. As we update the site and add
        new features, we will continue to consider usability, keyboard access,
        screen reader support, and clear language. We welcome the chance to make
        the experience better for every visitor.
      </p>

      <div className="legal-note">
        <p>
          This statement reflects our current accessibility goals and efforts. It
          is not a warranty that every page, document, or third-party service is
          fully accessible at all times.
        </p>
      </div>
    </LegalPage>
  );
}
