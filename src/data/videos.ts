// Video projects data

export interface Video {
  title: string;
  year: string;
  role: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl?: string;
}

export const videos: Video[] = [
  {
    title: "Environmental Discovery Award Program (EDAP)",
    year: "August, 2023",
    role: "Video Documentation Intern",
    description: "Interviewed what interns have been working on during the summer as well as how these projects are making a difference in our community and environment.",
    youtubeUrl: "https://www.youtube.com/watch?v=LdsD6hDXbz0",
    thumbnailUrl: "", 
  },
  {
    title: "Dance on Campus - Jazz Club",
    year: "December, 2023",
    role: "Videography & Post-Production",
    description: "Live performance footage capturing the energy and atmosphere of a dance performance.",
    youtubeUrl: "https://youtu.be/XoQMNe-sAyo",
    thumbnailUrl: "",
  },
  {
    title: "Officially Missing You - Cover video",
    year: "June, 2024",
    role: "Director & Editor",
    description: "Live cover video for a local artist, showcasing their unique sound and style.",
    youtubeUrl: "https://youtu.be/yQ-ZFw0qMoA?si=5TSt_3VyUeCZbkyv",
    thumbnailUrl: "",
  },
  {
    title: "Guayabo - Music Video",
    year: "March, 2023",
    role: "Cinematographer & Editor",
    description: "Music video for a class project.",
    youtubeUrl: "https://vimeo.com/812098079?share=copy&fl=sv&fe=ci",
    thumbnailUrl: "/images/thumb.jpg",
  },
  {
    title: "Memories - Short Film (Class Project)",
    year: "April, 2023",
    role: "Cinematographer & Editor",
    description: "A short film exploring themes of grief and loss, shot on location in Sarasota, FL.",
    youtubeUrl: "https://vimeo.com/819550077?share=copy&fl=sv&fe=ci",
    thumbnailUrl: "/images/thumbnail2.png",
  }
];
