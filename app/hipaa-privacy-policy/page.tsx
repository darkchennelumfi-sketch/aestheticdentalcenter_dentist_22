import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "HIPAA Privacy Policy",
  description:
    "Notice of Privacy Practices for Aesthetic Dental Center in Bismarck, ND, describing how protected health information may be used and disclosed.",
  alternates: {
    canonical: "/hipaa-privacy-policy",
  },
};

export default function HipaaPrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="HIPAA"
      title="Notice of Privacy Practices"
      description="This notice describes how medical information about you may be used and disclosed, and how you can get access to that information. Please review it carefully."
    >
      <h2>Our commitment to your privacy</h2>
      <p>
        Aesthetic Dental Center is committed to protecting the privacy of your
        protected health information. We are required by law to maintain the
        privacy of your health information, provide you with this notice of our
        legal duties and privacy practices, and follow the terms of the notice
        that is currently in effect.
      </p>
      <p>
        We may change this notice at any time. If we make a material change, we
        will post the revised notice on this website and make a copy available at
        our office. The revised notice will apply to all health information we
        maintain, including information created or received before the change.
      </p>

      <h2>How we may use and disclose your health information</h2>
      <p>
        The following categories describe the ways we may use and disclose
        protected health information without your authorization. Not every
        example applies to every patient.
      </p>

      <h3>Treatment</h3>
      <p>
        We may use your health information to provide dental care and coordinate
        your treatment. For example, we may share information with a specialist
        to whom we refer you, or with a laboratory that makes a restoration. We
        may also contact you with appointment reminders or information about
        treatment alternatives.
      </p>

      <h3>Payment</h3>
      <p>
        We may use and disclose your health information to obtain payment for
        services we provide. For example, we may share information with your
        dental insurance plan to determine coverage, obtain prior authorization,
        or submit a claim. We may also share information with a financing
        provider when you ask us to do so.
      </p>

      <h3>Health care operations</h3>
      <p>
        We may use and disclose your health information for activities necessary
        to run our practice, such as quality assessment, staff training,
        compliance reviews, business planning, and customer service. We may
        contact you to remind you of an appointment or to follow up after a
        visit.
      </p>

      <h3>People involved in your care</h3>
      <p>
        We may share information with a family member, friend, or other person
        you identify as involved in your care or payment for your care. We may
        also share information with someone who accompanies you to an
        appointment, unless you object. If you are not able to tell us your
        preference — for example, in an emergency — we may use our professional
        judgment to share only the information that person needs to know.
      </p>

      <h3>Required by law and public interest</h3>
      <p>
        We may use or disclose your health information without authorization when
        required or permitted by law, including for:
      </p>
      <ul>
        <li>Public health activities, such as reporting certain diseases or injuries</li>
        <li>Reporting suspected abuse, neglect, or domestic violence</li>
        <li>Health oversight activities, including audits and licensure reviews</li>
        <li>Judicial or administrative proceedings in response to a valid order</li>
        <li>Law enforcement purposes as permitted by law</li>
        <li>Coroners, medical examiners, and funeral directors</li>
        <li>Organ and tissue donation organizations</li>
        <li>Research approved by an institutional review board, with appropriate safeguards</li>
        <li>Preventing a serious and imminent threat to health or safety</li>
        <li>Workers’ compensation programs</li>
        <li>Specialized government functions, such as military and veterans activities</li>
      </ul>

      <h3>Uses and disclosures requiring authorization</h3>
      <p>
        We will not use or disclose your health information for marketing or
        sale, or for most psychotherapy notes, without your written
        authorization. Other uses and disclosures not described in this notice
        will be made only with your written authorization. You may revoke an
        authorization at any time in writing, except to the extent we have already
        relied on it.
      </p>

      <h2>Your rights</h2>
      <p>
        You have the following rights regarding your protected health
        information:
      </p>

      <h3>Right to inspect and copy</h3>
      <p>
        You may request to inspect or receive a copy of your dental and billing
        records, with limited exceptions. We may charge a reasonable,
        cost-based fee for copies as permitted by law. We will respond within the
        time required by applicable law.
      </p>

      <h3>Right to amend</h3>
      <p>
        If you believe information in your record is incorrect or incomplete, you
        may ask us to amend it. We may deny the request in certain circumstances,
        and we will explain the reason in writing. You may submit a statement of
        disagreement to be included with your record.
      </p>

      <h3>Right to an accounting of disclosures</h3>
      <p>
        You may request a list of certain disclosures of your health information
        made by us, generally for the six years before your request. The list
        will not include disclosures for treatment, payment, or health care
        operations, or disclosures you authorized.
      </p>

      <h3>Right to request restrictions</h3>
      <p>
        You may ask us to restrict the use or disclosure of your health
        information for treatment, payment, or health care operations. We are not
        required to agree to a request, except in certain circumstances involving
        a request not to disclose information to a health plan for a service you
        paid for in full. If we agree, we will honor the restriction except in
        limited situations such as emergencies.
      </p>

      <h3>Right to confidential communications</h3>
      <p>
        You may ask us to communicate with you in a particular way or at a
        particular location. For example, you may ask us to call your mobile
        number instead of your home number. We will accommodate reasonable
        requests.
      </p>

      <h3>Right to a paper copy</h3>
      <p>
        You may ask for a paper copy of this notice at any time, even if you
        received it electronically. Contact our office and we will provide one.
      </p>

      <h3>Right to choose a representative</h3>
      <p>
        If you have given someone medical power of attorney or if someone is your
        legal guardian, that person can exercise your rights and make choices
        about your health information. We will verify the person’s authority when
        necessary.
      </p>

      <h2>Our responsibilities</h2>
      <ul>
        <li>We are required by law to maintain the privacy and security of your protected health information.</li>
        <li>We will notify you promptly if a breach occurs that may have compromised the privacy or security of your information.</li>
        <li>We must follow the duties and privacy practices described in this notice and provide you with a copy.</li>
        <li>We will not use or share your information other than as described here unless you authorize us to do so.</li>
      </ul>

      <h2>Complaints</h2>
      <p>
        If you believe your privacy rights have been violated, you may file a
        complaint with us by contacting our office. You may also file a complaint
        with the U.S. Department of Health and Human Services, Office for Civil
        Rights. We will not retaliate against you for filing a complaint.
      </p>
      <p>
        Office for Civil Rights, U.S. Department of Health and Human Services.
        Visit{" "}
        <a
          href="https://www.hhs.gov/ocr/complaints/index.html"
          target="_blank"
          rel="noreferrer"
        >
          hhs.gov/ocr/complaints
        </a>{" "}
        for current filing instructions.
      </p>

      <h2>Contact us</h2>
      <p>
        For questions about this notice, to exercise any of your rights, or to
        file a complaint with our practice, contact:
      </p>
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
          This notice is a summary of our privacy practices and is not a
          substitute for legal advice. If you have a question about how your
          health information is handled, please contact our office. See also our{" "}
          <Link href="/privacy-policy">website privacy policy</Link>.
        </p>
      </div>
    </LegalPage>
  );
}
