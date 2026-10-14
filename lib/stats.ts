export type Stat = {
  value: string;
  label: string;
  sourceName: string;
  sourceUrl: string;
};

export const STATS: Stat[] = [
  {
    value: "22.8%",
    label:
      "of people with a disability were employed in 2025, compared with 65.2% of people without a disability.",
    sourceName: "U.S. Bureau of Labor Statistics, Persons with a Disability: Labor Force Characteristics, 2025",
    sourceUrl: "https://www.bls.gov/news.release/disabl.nr0.htm",
  },
  {
    value: "71%",
    label:
      "of adults with intellectual and developmental disabilities are not part of any community group or organization.",
    sourceName: "National Core Indicators, National Report 2024-25: Community Participation",
    sourceUrl: "https://idd.nationalcoreindicators.org/wp-content/uploads/2026/05/IPS-24-25-05-Community-Participation.pdf",
  },
  {
    value: "61%",
    label:
      "did not attend a single religious service or spiritual practice in the past month.",
    sourceName: "National Core Indicators, National Report 2024-25: Community Participation",
    sourceUrl: "https://idd.nationalcoreindicators.org/wp-content/uploads/2026/05/IPS-24-25-05-Community-Participation.pdf",
  },
];
