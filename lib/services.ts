export type Treatment = {
  slug: string;
  name: string;
  menuName?: string;
  short: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  categorySlug: string;
};

export type Category = {
  slug: string;
  name: string;
  menuName: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  treatments: Treatment[];
};

const familyTreatments: Omit<Treatment, "categorySlug">[] = [
  {
    slug: "cleanings-hygiene",
    name: "Cleanings & Hygiene",
    short: "Preventive care that keeps your smile healthy between visits.",
    description:
      "A thorough cleaning is the foundation of a healthy smile. Our hygiene visits combine gentle, careful care with a clear look at what is happening below the surface, so you can leave with a practical plan for the months ahead.",
    highlights: [
      "Professional cleaning and polish",
      "A careful review of your teeth and gums",
      "Simple, personalized home-care guidance",
    ],
    image: "/images/clean.jpg",
    imageAlt: "Dental instruments prepared for a gentle cleaning",
  },
  {
    slug: "laser-dentistry",
    name: "Laser Dentistry",
    short: "Precise, minimally invasive care with laser technology.",
    description:
      "Laser dentistry gives us a more focused way to treat soft tissue and support everyday dental care. It is one more tool in the practice, chosen when it offers a gentler, more precise path for the treatment at hand.",
    highlights: [
      "Precise, targeted treatment",
      "A minimally invasive approach where appropriate",
      "Comfort-focused care from start to finish",
    ],
    image: "/images/office.jpg",
    imageAlt: "Modern dental treatment room with advanced equipment",
  },
  {
    slug: "sedation-dentistry",
    name: "Sedation Dentistry",
    short: "Thoughtful options for a calmer, more comfortable visit.",
    description:
      "If dental visits feel overwhelming, sedation dentistry can help make care feel more manageable. We talk through the options, the process, and what to expect, and then choose an approach that fits your needs and your health history.",
    highlights: [
      "A conversation about your comfort first",
      "Options tailored to your health history",
      "A calmer pace for treatment",
    ],
    image: "/images/waiting.jpg",
    imageAlt: "Calm, light-filled dental waiting room",
  },
  {
    slug: "sleep-apnea",
    name: "Sleep Apnea",
    short: "A dental approach to snoring and sleep-related breathing concerns.",
    description:
      "Snoring and sleep-disordered breathing can affect far more than a night's rest. We can evaluate how your oral structures may be contributing and discuss whether a dental appliance or another referral is the right next step.",
    highlights: [
      "An oral health perspective on sleep concerns",
      "A review of the airway and bite",
      "Clear guidance on next steps",
    ],
    image: "/images/consult.jpg",
    imageAlt: "Dentist speaking with a patient in a bright office",
  },
  {
    slug: "tmj-treatment",
    name: "TMJ Treatment",
    short: "Relief-focused care for jaw discomfort, clenching, and grinding.",
    description:
      "Jaw pain, tension, and grinding often have more than one cause. We look at the bite, the jaw joint, and the habits around it, then build a treatment plan that aims to reduce strain and protect your teeth.",
    highlights: [
      "Assessment of the jaw joint and bite",
      "Options for clenching and grinding",
      "A plan focused on lasting comfort",
    ],
    image: "/images/exam.jpg",
    imageAlt: "Dentist completing a careful examination",
  },
  {
    slug: "tooth-extractions",
    name: "Tooth Extractions",
    short: "Gentle extractions with a clear plan for what comes next.",
    description:
      "When a tooth cannot be saved, removing it comfortably and thoughtfully matters. We explain the reason for the extraction, what to expect during and after, and the options for replacing the tooth when the time is right.",
    highlights: [
      "A clear explanation before treatment",
      "Comfort-focused technique",
      "Aftercare and replacement guidance",
    ],
    image: "/images/procedure.jpg",
    imageAlt: "Dental team providing attentive care to a patient",
  },
];

const cosmeticTreatments: Omit<Treatment, "categorySlug">[] = [
  {
    slug: "porcelain-veneers",
    name: "Porcelain Veneers",
    short: "Handcrafted veneers for a balanced, natural-looking smile.",
    description:
      "Veneers are a considered way to refine the shape, color, and harmony of the front teeth. The best results feel unmistakably you, so the design begins with your face, your smile, and the details that make it your own.",
    highlights: [
      "A smile design shaped around your features",
      "Careful shade and contour planning",
      "A polished, natural-looking result",
    ],
    image: "/images/smile-detail.jpg",
    imageAlt: "Close-up of a bright, natural smile",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    short: "Professional whitening to brighten your smile with control and care.",
    description:
      "Professional whitening goes beyond an off-the-shelf kit. We consider your starting shade, sensitivity, and goals, then choose an approach that brightens your smile while keeping your comfort in view.",
    highlights: [
      "A shade plan made for your smile",
      "Guidance for sensitivity-prone teeth",
      "Professional-strength whitening options",
    ],
    image: "/images/hero-smile.jpg",
    imageAlt: "Woman smiling with a bright, healthy smile",
  },
];

const prosthodonticTreatments: Omit<Treatment, "categorySlug">[] = [
  {
    slug: "all-on-4-implants",
    name: "All-on-4 Implants",
    short: "A full-arch solution for missing teeth using four implants.",
    description:
      "All-on-4 is a full-arch approach that uses four strategically placed implants to support a complete set of teeth. It can be a meaningful option for patients looking for a stable, longer-term alternative to a removable denture.",
    highlights: [
      "A full-arch treatment approach",
      "Implant planning based on your anatomy",
      "A conversation about expectations and aftercare",
    ],
    image: "/images/implant.jpg",
    imageAlt: "Dental implant model used for treatment planning",
  },
  {
    slug: "crowns-bridges",
    name: "Crowns & Bridges",
    menuName: "Dental Crowns",
    short: "Restore strength, shape, and function to damaged teeth.",
    description:
      "Crowns and bridges protect and rebuild teeth that have been worn, cracked, or lost. The goal is a restoration that feels comfortable, supports your bite, and blends with the smile around it.",
    highlights: [
      "Restorations shaped for your bite",
      "Careful shade matching",
      "A clear plan for the finished result",
    ],
    image: "/images/clean.jpg",
    imageAlt: "Dental instruments used for restorative care",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    short: "A long-term foundation for replacing a missing tooth.",
    description:
      "A dental implant replaces the root of a missing tooth and provides support for a crown or other restoration. We assess the site, the bone, and your overall goals before recommending whether an implant is the right fit.",
    highlights: [
      "A tooth-replacement plan built around you",
      "Assessment of bone and bite",
      "Guidance from consultation through aftercare",
    ],
    image: "/images/implant.jpg",
    imageAlt: "Dental implant model used for treatment planning",
  },
  {
    slug: "dentures",
    name: "Dentures",
    short: "Custom dentures designed for comfort, fit, and confidence.",
    description:
      "Modern dentures can be comfortable, natural-looking, and carefully fitted. We take the time to understand how you speak, smile, and eat so the finished restoration supports your daily life, not just your bite.",
    highlights: [
      "A fit planned around your smile",
      "Natural-looking tooth and gum shades",
      "Support for comfort and function",
    ],
    image: "/images/smile-detail.jpg",
    imageAlt: "Close-up of a confident, natural smile",
  },
  {
    slug: "full-mouth-restoration",
    name: "Full Mouth Restorations",
    short: "Comprehensive reconstruction for function, comfort, and aesthetics.",
    description:
      "A full mouth restoration brings together the treatments needed to rebuild a smile that has been affected by wear, damage, or missing teeth. It is a plan made in stages, with each decision connected to the next.",
    highlights: [
      "A comprehensive, staged plan",
      "Function and aesthetics considered together",
      "Clear communication at every step",
    ],
    image: "/images/procedure.jpg",
    imageAlt: "Dental team providing treatment in a modern practice",
  },
];

export const categories: Category[] = [
  {
    slug: "family-dentistry",
    name: "Family & Comprehensive Dentistry",
    menuName: "Family & Comprehensive",
    shortName: "Family & Comprehensive",
    tagline: "Everyday care, thoughtfully delivered.",
    description:
      "Preventive, gentle dentistry for every stage of life — with a focus on comfort, clarity, and keeping your smile well.",
    longDescription:
      "Good dentistry is built on consistency. Our family and comprehensive care brings together routine hygiene, preventive guidance, and treatment for the concerns that come up along the way. We take time to explain what we see, what it means, and what choices are available, so your care always feels like yours.",
    image: "/images/exam.jpg",
    imageAlt: "Dentist completing a careful dental examination",
    treatments: familyTreatments.map((treatment) => ({
      ...treatment,
      categorySlug: "family-dentistry",
    })),
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    menuName: "Cosmetic Dentistry",
    shortName: "Cosmetic",
    tagline: "Enhancement without the obvious.",
    description:
      "Refined, natural-looking improvements that bring out the best of your smile — never erase what makes it yours.",
    longDescription:
      "The most beautiful cosmetic dentistry is the kind that looks like it was always there. We start with the proportions of your face and smile, then consider shade, shape, and balance. Whether you are curious about whitening or planning a more complete smile design, the result is measured, personal, and built to last.",
    image: "/images/smile-detail.jpg",
    imageAlt: "Close-up of a bright, natural smile",
    treatments: cosmeticTreatments.map((treatment) => ({
      ...treatment,
      categorySlug: "cosmetic-dentistry",
    })),
  },
  {
    slug: "prosthodontics",
    name: "Restorative & Prosthodontics",
    menuName: "Restorative & Prosthodontics",
    shortName: "Restorative",
    tagline: "Rebuild comfort. Restore confidence.",
    description:
      "Advanced care for missing, worn, or damaged teeth — where function, comfort, and aesthetics meet.",
    longDescription:
      "Restorative dentistry is about more than filling a space. It is about rebuilding the way your smile works, feels, and looks. From a single crown to a full-arch restoration, we plan each step with your bite, your health, and your life in mind — and we make sure you understand the journey before it begins.",
    image: "/images/implant.jpg",
    imageAlt: "Dental implant model used for restorative planning",
    treatments: prosthodonticTreatments.map((treatment) => ({
      ...treatment,
      categorySlug: "prosthodontics",
    })),
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getTreatment(
  categorySlug: string,
  treatmentSlug: string,
): Treatment | undefined {
  const category = getCategory(categorySlug);
  return category?.treatments.find(
    (treatment) => treatment.slug === treatmentSlug,
  );
}

export function getRelatedTreatments(treatment: Treatment): Treatment[] {
  const category = getCategory(treatment.categorySlug);
  if (!category) return [];
  return category.treatments
    .filter((item) => item.slug !== treatment.slug)
    .slice(0, 3);
}

export const allTreatments = categories.flatMap(
  (category) => category.treatments,
);
