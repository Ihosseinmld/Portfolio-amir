export interface ProjectInterface {
  title: string;
  description: string;
  image: string;
  tools : string[];
  link: string;
  company: string;
  year: number;
}
export const projects: ProjectInterface[] = [
  
  {
    title: "Expo 2025 Ardabil event",
    description:
      "Ardabil Expo 2025 stands as a premier international platform designed to showcase the vast economic potential, industrial capabilities, and rich cultural heritage of the Ardabil province. Strategically located at the crossroads of the Caucasus and Central Asia, this event focuses on fostering global partnerships in key sectors, including health tourism, advanced agriculture, and sustainable industries. By bringing together international investors, industry leaders, and policy-makers, Ardabil Expo 2025 aims to unlock new opportunities for cross-border trade and highlight the region's emergence as a strategic hub for innovation and investment in the Middle East.",
    image: "/images/projects/todoapp.png",
    tools: [
      "Adobe Premier Pro",
      "Adobe After Effects",
      "DJI Ronin rs3",
      "Sony A7 3",

  
    ],
    link: "https://www.youtube.com/watch?v=MIg0dMWOLR4",
    company: "Todo Rda",
    year: 2024,
  },
  {
    title: "Digital Advertising Studio Website",
    description:
      "A modern, visually engaging website crafted for a digital advertising studio, designed and developed directly from a Figma prototype. The site showcases the studio’s portfolio, services, and creative process, with a focus on high performance, responsive design, and seamless user experience. Built to highlight the brand’s unique identity and drive client engagement.",
    image: "/images/projects/digitalstudio.png",
    tools: [
      "Adobe Premier Pro",
      "Adobe After Effects",
      "DJI Ronin rs3",
      "Sony A7 3",

    ],
       link: "",
    company: "Mixord",
    year: 2025,
  },
  {
    title: "Holding Company Website",
    description:
      "A modern platform for holding companies to manage groups, share files, and communicate efficiently. Features include a centralized dashboard, secure document management, and an interactive 3D earth model (Three.js) to showcase all companies. Built for scalability, security, and seamless collaboration.",
    image: "/images/projects/group100.jpg",
    tools: [
      "Adobe Premier Pro",
      "Adobe After Effects",
      "DJI Ronin rs3",
      "Sony A7 3",

    ],
       link: "",
    company: "Group100",
    year: 2023,
  },

];

