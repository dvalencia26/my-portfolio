// Additional projects data
// Add any special projects, personal work, or notable achievements

export interface Project {
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
  thumbnailUrl?: string; // Screenshot or image representing the project
}

export const projects: Project[] = [
  {
    title: "WAG Movie Reviews Platform",
    description: "Built with MERN Stack, it offers a seamless experience for both administrators who write detailed movie reviews and users who discover, like, and comment on their favorite film reviews.",
    link: "https://wagmoviereviews.onrender.com", 
    linkLabel: "Visit Website",
    thumbnailUrl: "/images/Wag.png",
  },
  {
    title: "Mirna's Cuban Cuisine Website redesign (Class Project)",
    description: "Redesigned the website for Mirna's Cuban Cuisine using Figma, focusing on enhancing user experience and visual appeal to better showcase the restaurant's offerings.",
    link: "https://www.figma.com/proto/oUjUpVwVPb8bxUnEhjWCB9/Mirna-s-Website?type=design&node-id=1-8&t=RQnpTiaLCQRRtzp8-1&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A8",
    linkLabel: "View Figma Design",
    thumbnailUrl: "/images/Mirnas.png",
  },
  {
    title: "Nostray Network",
    description: "A full-stack web application for managing and tracking stray animals. This project consists of a Django backend API and a React frontend.",
    link: "https://www.youtube.com/watch?v=IP0R8_4DthA", 
    linkLabel: "Watch Demo Video",
    thumbnailUrl: "/images/Nostray.png",
  }
];
