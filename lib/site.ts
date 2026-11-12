export const site = {
  name: "Aesthetic Dental Center",
  shortName: "Aesthetic Dental",
  tagline: "Dentistry with a lighter touch.",
  description:
    "Exceptional dental care in Bismarck, North Dakota. Family, cosmetic, restorative, and prosthodontic dentistry from Dr. Sellers and the team at Aesthetic Dental Center.",
  phoneDisplay: "701-214-5552",
  phoneDisplayAlt: "(701) 214-5552",
  phoneHref: "tel:+17012145552",
  scheduleUrl:
    "https://schedule.jarvisanalytics.com/frame/aestheticdentalcenter-dtxa?location_id=2721784210833499",
  directionsUrl: "https://maps.app.goo.gl/rtxuswnoZ9PW4YVeA",
  mapEmbedUrl:
    "https://www.google.com/maps?q=1207%20West%20Divide%20Avenue%20Suite%201%2C%20Bismarck%2C%20ND%2058501&output=embed",
  reviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Aesthetic+Dental+Center+1207+West+Divide+Avenue+Bismarck+ND",
  address: {
    line1: "1207 West Divide Avenue",
    line2: "Suite 1",
    city: "Bismarck",
    state: "ND",
    zip: "58501",
  },
  addressOneLine:
    "1207 West Divide Avenue Suite 1, Bismarck, ND 58501",
  hours: [
    { day: "Tuesday", time: "7:00 AM - 4:00 PM" },
    { day: "Wednesday", time: "7:00 AM - 4:00 PM" },
    { day: "Thursday", time: "7:00 AM - 4:00 PM" },
    { day: "Friday", time: "7:00 AM - 2:00 PM" },
  ],
  closedDays: "Saturday - Monday",
  rating: "4.8",
  ratingLabel: "4.8 average rating",
  financing: {
    title: "Pay over time",
    detail: "No hard credit checks • 0% APR options",
  },
  socials: {
    facebook: "https://www.facebook.com/AestheticDentalBismarck/",
    instagram: "https://www.instagram.com/adcbismarck/",
    youtube: "http://www.youtube.com/@aestheticdentalcenter2183",
  },
  legal: [
    { label: "Sitemap", href: "/sitemap" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "HIPAA Privacy Policy", href: "/hipaa-privacy-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Accessibility Statement", href: "/accessibility-statement" },
  ],
  legalUpdated: "November 12, 2026",
  credentials: [
    "American Academy of Cosmetic Dentistry",
    "American College of Prosthodontists",
    "Epic Laser",
    "North Dakota Dental Association",
    "Spear Education",
    "Waterlase",
  ],
} as const;

export type SiteHour = (typeof site.hours)[number];
