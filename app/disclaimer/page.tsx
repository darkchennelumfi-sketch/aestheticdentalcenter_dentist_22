import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important information about the content on the Aesthetic Dental Center website and its limitations.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Disclaimer"
      title="Website Disclaimer"
      description="Please read this disclaimer before relying on information from this website. It explains the limits of the content and how to reach us with questions."
    >
      <h2>General information only</h2>
      <p>
        The content on this website is provided for general informational
        purposes. It is not dental advice, a diagnosis, or a treatment
        recommendation for any individual. Reading this website does not create a
        dentist-patient relationship.
      </p>
      <p>
        Dental care depends on a person’s medical history, examination findings,
        imaging, and other factors that cannot be evaluated through a website.
        Always seek the advice of a qualified dental professional with questions
        about a dental condition or treatment.
      </p>

      <h2>Emergencies</h2>
      <p>
        This website is not designed for urgent or emergency communication. If
        you have facial swelling, trouble breathing or swallowing, uncontrolled
        bleeding, a serious injury, or another emergency, call 911 or go to the
        nearest emergency department. Do not rely on a website message for urgent
        care.
      </p>

      <h2>Accuracy and updates</h2>
      <p>
        We work to keep the information on this site accurate and current, but we
        do not guarantee that every page is complete, error-free, or up to date.
        Services, hours, policies, and other details may change. Please call our
        office to confirm information that is important to your decision.
      </p>

      <h2>Third-party links and content</h2>
      <p>
        This website may link to or embed content from other websites and
        services, including Google Maps, online scheduling, social media, and
        financing providers. Those services are controlled by their own
        organizations. We do not endorse or assume responsibility for their
        content, availability, or privacy practices. Review their terms and
        policies before using them.
      </p>

      <h2>Testimonials and results</h2>
      <p>
        Any rating or review referenced on this website reflects the experience
        of the person who provided it. Individual experiences and treatment
        results vary. A review or rating is not a guarantee that you will have
        the same experience or outcome.
      </p>

      <h2>Treatment outcomes</h2>
      <p>
        Descriptions of treatments on this website are general. They do not
        promise a particular result, timeline, or outcome. Your dentist will
        discuss the benefits, risks, alternatives, and expected results of any
        recommended treatment with you before you decide whether to proceed.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Aesthetic Dental Center is not
        liable for any loss or damage arising from reliance on the general
        information on this website or from the use of linked third-party
        services. This disclaimer does not limit any obligation or liability that
        cannot be limited under applicable law.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have a question about this disclaimer or would like to schedule an
        appointment, call{" "}
        <a href={site.phoneHref}>{site.phoneDisplay}</a> or{" "}
        <Link href="/contact">contact our office</Link>.
      </p>

      <div className="legal-note">
        <p>
          This page provides general information about the use of this website.
          It is not legal advice. For questions about your rights or a specific
          situation, consult an appropriate professional.
        </p>
      </div>
    </LegalPage>
  );
}
