// Companies and collaborations data

export interface Company {
  name: string;
  description: string;
  role: string;
  workHighlight: string;
  links: {
    website?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
    tiktok?: string;
  };
}

export const companies: Company[] = [
  {
    name: "Sarasota Architectural Salvage",
    description: "A 10,000 square-foot cornucopia of architecturally stunning elements from around the globe.",
    role: "Content Creator • Videography & Photography",
    workHighlight: "Created 50+ short-form videos for Instagram Reels and Facebook Reels. From March until August 2024, the Facebook account grew from 20,000 to over 25,000 followers.",
    links: {
      instagram: "https://www.instagram.com/srqarchitecturalsalvage/reels/",
      facebook: "https://www.facebook.com/SarasotaSalvage/reels/",
    },
  },
  {
    name: "EDAP (Environmental Discovery Awards Program)",
    description: "Paid, field experience internships for students pursuing degrees related to environmental studies.",
    role: "Visual Media Specialist",
    workHighlight: "Worked on creating promotional and highlight videos for the summer internship program, showcasing intern projects and community impact.",
    links: {
      youtube: "https://www.youtube.com/@edapSummerInternship/videos",
    },
  },
  {
    name: "Boxser Diversity Initiative ",
    description: "For more than 15 years, the Boxser Diversity Initiative (BDI) has been a leading voice for inclusion, education, and dialogue in Southwest Florida. ",
    role: "Visual Media Specialist",
    workHighlight: "Filmed and edited 12+ videos for the Giving Challenge 2024 campaign.",
    links: {
      website: "https://www.boxserdiversityinitiative.org/post/how-our-2024-giving-challenge-donors-transformed-young-lives",
    },
  },
];
