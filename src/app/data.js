/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id:1,
    name: "Creative Nextjs Portfolio",
    demoLink: "https://nextjs-portfolio-pink-pi.vercel.app/",
    date: "2022-08-15",
    description:
      "This project showcases a responsive portfolio built with React, TailwindCSS, and Three.js, leveraging Next.js for server-side rendering and performance optimization. The clean, modern design ensures accessibility across devices",
  },
  {
    id: 2,
    name: "Nextjs Todo App",
    demoLink: "https://nextjs-todo-e32142e33-barakatokikiolas-projects.vercel.app/",
    date: "2022-08-15",
    description:
      "A simple and intuitive task management app built with Next.js and React. It offers seamless user experience with TypeScript for type safety and TailwindCSS for modern styling. This responsive app allows users to add, delete, and track tasks efficiently.",
  },
  {
    id: 3,
    name: "Krawdwise",
    demoLink: "https://krawdwise.netlify.app/",
   date:"2024-09-09",
   description:
      "A sleek and responsive web application built with React and TailwindCSS. Krawdwise offers a dynamic interface for exploring and interacting with content seamlessly. The project emphasizes modern design, intuitive UI/UX, and efficient performance.",
  },
  {
    id: 4,
    name: "Movie Search App",
    demoLink: "https://barakatokikiola.github.io/Movie-App/",
    date: "2024-05-06",
    description:
      "A React-based app that lets users search for movies quickly and view details using a clean, Bootstrap-powered interface. The app dedemoLinkrs a smooth user experience with responsive design, making it easy to explore and discover movies.",
  },
  {
    id: 5,
    name: "Credo Landing Page",
    demoLink: "https://teamconnect.netlify.app/",
   date:"2022-08-21",
   description:
      "A modern, responsive landing page designed using React and TailwindCSS. The project features clean, minimalistic UI components, providing seamless navigation and a visually appealing layout optimized for various devices.",
  },
  {
      id: 6,
      name: "MSSN Landing Page",
      demoLink: "https://barakatokikiola.github.io/MSSN-Unilag/",
      date:"2023-09-13",
      description:
        "A responsive landing page designed for the Muslim Students' Society of Nigeria (MSSN), UNILAG chapter. Built with HTML5, CSS3, JavaScript, and Bootstrap, it features a clean layout, smooth navigation, and a modern design for effective communication of information.",
    },
];


export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/barakatokikiola",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/barakatokikiola",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://www.x.com/barakatokikiola",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


