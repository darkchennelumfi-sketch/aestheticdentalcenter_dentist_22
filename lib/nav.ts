import { categories } from "@/lib/services";

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  image?: string;
  featureTitle?: string;
  featureCopy?: string;
};

const categoryItems: NavItem[] = categories.map((category) => ({
  label: category.menuName,
  href: `/services/${category.slug}`,
  children: [
    ...category.treatments.map((treatment) => ({
      label: treatment.menuName ?? treatment.name,
      href: `/services/${category.slug}/${treatment.slug}`,
      description: treatment.short,
    })),
    ...(category.slug === "prosthodontics"
      ? [
          {
            label: "What is Prosthodontics?",
            href: "/prosthodontist",
            description:
              "Understand the specialty behind restorative care.",
          },
        ]
      : []),
  ],
  image: category.image,
  featureTitle: category.tagline,
  featureCopy: category.description,
}));

export const navItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      {
        label: "Meet the Doctor",
        href: "/about#doctor",
        description: "The care philosophy behind Aesthetic Dental Center.",
      },
      {
        label: "Meet the Team",
        href: "/about#team",
        description: "The people who make each visit feel considered.",
      },
      {
        label: "Testimonials",
        href: "/testimonials",
        description: "A 4.8 average rating from our patients.",
      },
      {
        label: "Dental Blog",
        href: "/blog",
        description: "Everyday guidance for a healthier smile.",
      },
    ],
    image: "/images/consult.jpg",
    featureTitle: "Care that sees the whole smile.",
    featureCopy:
      "Meet the doctor and team behind the practice, and learn how we approach dentistry.",
  },
  ...categoryItems,
  {
    label: "New Patients",
    href: "/new-patients",
    children: [
      {
        label: "New Patient Information",
        href: "/new-patients",
        description: "What to know before your first visit.",
      },
      {
        label: "Patient Referral",
        href: "/patient-referral",
        description: "Share the care with someone you love.",
      },
      {
        label: "Cherry Financing",
        href: "/cherry-financing",
        description: "Flexible ways to pay over time.",
      },
    ],
    image: "/images/waiting.jpg",
    featureTitle: "A first visit that feels easy.",
    featureCopy:
      "From your first call to your first appointment, we make the process clear and comfortable.",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const footerServices = categories.map((category) => ({
  label: category.menuName,
  href: `/services/${category.slug}`,
}));

export const footerExplore = [
  { label: "About Us", href: "/about" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Dental Blog", href: "/blog" },
  { label: "Patient Referral", href: "/patient-referral" },
  { label: "Cherry Financing", href: "/cherry-financing" },
  { label: "Contact Us", href: "/contact" },
];
