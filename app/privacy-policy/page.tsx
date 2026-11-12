import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Aesthetic Dental Center in Bismarck, ND collects, uses, and protects information submitted through this website.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      description="This policy explains how Aesthetic Dental Center handles information collected through this website. It does not replace the HIPAA Notice of Privacy Practices that applies to your dental care."
    >
      <h2>Overview</h2>
      <p>
        Aesthetic Dental Center respects your privacy. This policy describes the
        types of information we may collect when you visit this website, how we
        use it, and the choices available to you. By using this website, you
        agree to the practices described here.
      </p>

      <h2>Information we collect</h2>
      <h3>Information you provide</h3>
      <p>
        When you send a message through our contact form, schedule an
        appointment, or contact us by phone, you may provide your name, email
        address, phone number, and details about your reason for contacting us.
        Please do not include sensitive medical information in a general website
        message. If you need to share health information, call our office so we
        can handle it appropriately.
      </p>

      <h3>Information collected automatically</h3>
      <p>
        Like most websites, our hosting provider may record standard technical
        information such as your IP address, browser type, device type, referring
        page, and the dates and times you access the site. This information helps
        us keep the website secure and understand how it is working.
      </p>

      <h3>Information from third-party services</h3>
      <p>
        This website links to or embeds services provided by other companies,
        including Google Maps, our online scheduling portal, and social media
        platforms. When you interact with those services, they may collect
        information according to their own privacy policies. We encourage you to
        review those policies before providing personal information.
      </p>

      <h2>How we use information</h2>
      <p>We may use the information we collect to:</p>
      <ul>
        <li>Respond to your questions and requests</li>
        <li>Help schedule, confirm, or follow up on appointments</li>
        <li>Provide information about our services and practice</li>
        <li>Maintain the security and functionality of the website</li>
        <li>Comply with legal obligations and enforce our rights</li>
      </ul>
      <p>
        We do not sell your personal information. We do not use information
        submitted through this website for unrelated advertising.
      </p>

      <h2>When we may share information</h2>
      <p>
        We may share information with service providers who help us operate the
        practice or website, such as scheduling, hosting, or communications
        vendors, when they need it to perform services for us. We may also
        disclose information when required by law, to protect the safety or
        rights of our patients or staff, or as part of a business transition
        such as a merger or sale of the practice.
      </p>

      <h2>Cookies and similar technologies</h2>
      <p>
        This website may use cookies or similar technologies that are necessary
        for the site to function or that are set by embedded third-party services
        such as the map on our contact page. You can adjust your browser settings
        to limit or block cookies. Some parts of the site or third-party services
        may not work as intended if you do.
      </p>

      <h2>Security and retention</h2>
      <p>
        We use reasonable administrative and technical measures to protect the
        information we handle. No method of transmission or storage is
        completely secure, so we cannot guarantee absolute security. We retain
        information for as long as needed for the purposes described in this
        policy, for our business records, and as required by law.
      </p>

      <h2>Your choices</h2>
      <p>
        You may contact us to ask about the information we hold about you,
        request a correction, or ask us to stop sending non-essential
        communications. Some requests may be limited by law or by our obligation
        to keep dental records. To make a request, call{" "}
        <a href={site.phoneHref}>{site.phoneDisplay}</a> or{" "}
        <Link href="/contact">send us a message</Link>.
      </p>

      <h2>Children’s privacy</h2>
      <p>
        This website is not directed to children under 13, and we do not
        knowingly collect personal information from children through the site.
        If you believe a child has provided information to us through this
        website, please contact our office so we can address it.
      </p>

      <h2>Health information and HIPAA</h2>
      <p>
        Information you provide as a patient may be protected health information
        under the Health Insurance Portability and Accountability Act (HIPAA).
        Our{" "}
        <Link href="/hipaa-privacy-policy">HIPAA Privacy Policy</Link> describes
        how we use and disclose protected health information and the rights you
        have as a patient.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. When we do, we will revise
        the date shown at the top of this page. Continued use of the website
        after an update means you accept the revised policy.
      </p>

      <h2>Contact us</h2>
      <p>
        Aesthetic Dental Center
        <br />
        {site.address.line1} {site.address.line2}
        <br />
        {site.address.city}, {site.address.state} {site.address.zip}
        <br />
        <a href={site.phoneHref}>{site.phoneDisplay}</a>
      </p>

      <div className="legal-note">
        <p>
          This privacy policy is provided for transparency about our website
          practices. It is not legal advice, and it does not limit any rights you
          may have under applicable law.
        </p>
      </div>
    </LegalPage>
  );
}
