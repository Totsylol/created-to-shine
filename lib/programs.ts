export type Program = {
  slug: string;
  name: string;
  summary: string;
  details: string[];
  image: string;
  imageAlt: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: "academy",
    name: "Created To Shine Academy",
    summary:
      "Structured vocational education that builds workplace skills, independence, and employment readiness for adults with disabilities.",
    details: [
      "Workplace skills and professional communication",
      "Employment and interview preparation",
      "Independent living and self-advocacy",
    ],
    image: "/images/program-academy.jpg",
    imageAlt: "A laptop reading \"never stop learning\" in front of a bookshelf",
  },
  {
    slug: "coffee-co",
    name: "Created To Shine Coffee Co.",
    summary:
      "The hands-on vocational training arm of the Academy — a mobile coffee cart where participants gain real workplace experience.",
    details: [
      "Hands-on hospitality and customer service",
      "Serving at churches, events, and businesses",
      "A pathway toward employment partnerships",
    ],
    image: "/images/program-coffee.jpg",
    imageAlt: "A latte with heart-shaped foam art on a wooden counter",
  },
  {
    slug: "family-education",
    name: "Created To Shine Family Education",
    summary:
      "Equipping parents and caregivers with knowledge, resources, and practical tools to support and advocate for their loved ones.",
    details: [
      "Understanding disability and development",
      "Navigating resources and transitions",
      "Advocacy and family mentoring",
    ],
    image: "/images/program-education.jpg",
    imageAlt: "An open book with its pages folded into the shape of a heart",
  },
  {
    slug: "community-inclusion",
    name: "Created To Shine Community Inclusion",
    summary:
      "Partnering with churches and community organizations to provide education and training on disability inclusion.",
    details: [
      "Understanding disability together",
      "Creating welcoming environments",
      "Inclusive worship and participation",
    ],
    image: "/images/program-inclusion.jpg",
    imageAlt: "A diverse circle of hands reaching toward the center together",
  },
];
