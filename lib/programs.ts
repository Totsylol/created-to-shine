export type Program = {
  slug: string;
  name: string;
  summary: string;
  details: string[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "academy",
    name: "Created To Shine Academy",
    summary:
      "Structured vocational education that builds workplace skills, independence, and employment readiness for adults with disabilities.",
    details: [
      "Workplace skills: professional communication, teamwork, following workplace routines, problem solving, time management, workplace expectations, hospitality, customer service, beverage preparation, food safety, inventory management, cleaning and sanitation.",
      "Employment preparation: career exploration, job readiness, resume development, interview preparation, workplace advocacy, and understanding job responsibilities.",
      "Independent living skills: financial literacy, transportation skills, self-advocacy, decision making, safety awareness, following daily routines, and increasing independence.",
    ],
  },
  {
    slug: "coffee-co",
    name: "Created To Shine Coffee Co.",
    summary:
      "The hands-on vocational training arm of the Academy — a mobile coffee cart where participants gain real workplace experience.",
    details: [
      "A mobile coffee cart serves as a practical classroom, with participants serving at churches, conferences, community events, businesses, schools, and ministry gatherings.",
      "Participants gain experience in hospitality, customer service, beverage preparation, food safety, workplace routines, teamwork, and responsibility.",
      "As participants grow in skill and confidence, Created to Shine Ministries supports their transition into employment through partnerships with local businesses. Over time, Coffee Co. will grow from a mobile cart into a permanent community coffee location.",
    ],
  },
  {
    slug: "family-education",
    name: "Created To Shine Family Education",
    summary:
      "Equipping parents and caregivers with knowledge, resources, and practical tools to support and advocate for their loved ones.",
    details: [
      "Understanding disability, development, and individual strengths.",
      "Supporting communication, independence, and skill development.",
      "Preparing for transitions into adulthood.",
      "Navigating educational, vocational, and community resources.",
      "Developing advocacy skills and becoming effective partners in decision-making.",
      "Connecting with other families through mentoring and shared learning.",
    ],
  },
  {
    slug: "community-inclusion",
    name: "Created To Shine Community Inclusion",
    summary:
      "Partnering with churches and community organizations to provide education and training on disability inclusion.",
    details: [
      "Understanding disability.",
      "Creating welcoming environments.",
      "Supporting individuals with different needs.",
      "Inclusive worship and community participation.",
      "Disability theology.",
    ],
  },
];
