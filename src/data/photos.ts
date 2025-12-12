// Photography projects data

export interface PhotoProject {
  title: string;
  locationOrContext: string;
  description: string;
  linkUrl: string; // Google Drive folder, Flickr album, etc.
  thumbnailUrl?: string;
}

export const photoProjects: PhotoProject[] = [
  {
    title: "The Common Thread for the Cure charity event 2025 ",
    locationOrContext: "Sarasota Architectural Salvage",
    description: "",
    linkUrl: "https://drive.google.com/drive/folders/1fXXc1Qm73aQMN1dmsaVel7Ce8-kO_XvH?usp=share_link",
    thumbnailUrl: "/images/SASCharity.jpg",
  },
  {
    title: "So This is Love - Short Film",
    locationOrContext: "Sarasota, FL",
    description: "Behind-the-scenes photography from the short film production 'So This is Love,' capturing cast, crew, and on-set moments.",
    linkUrl: "https://drive.google.com/drive/folders/1rxgdDjzLDhQUQ8g6VtiQ7f47EB0amSkr?usp=share_link",
    thumbnailUrl: "/images/SoThisLove.jpg",
  },
  {
    title: "Dance on Campus - Jazz Club",
    locationOrContext: "New College of Florida",
    description: "Behind-the-scenes and performance shots of jazz club theater production.",
    linkUrl: "https://drive.google.com/drive/folders/1_6aHxfyk7MFeO5OEoxDxVc0Q8ck6HqXa?usp=sharing", 
    thumbnailUrl: "/images/danceClub.jpg",
  },
  {
    title: "Cross College Alliance Event",
    locationOrContext: "Sarasota, FL",
    description: "Capturing moments from the Cross College Alliance event, showcasing interactions and activities.",
    linkUrl: "https://drive.google.com/drive/folders/1TSwznNOwjxTX6buklFX8oQXllU1GE6z8?usp=share_link",
    thumbnailUrl: "/images/CCAEvent.jpg",
  },
];
