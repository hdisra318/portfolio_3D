import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    github_logo,
    html,
    css,
    reactjs,
    java,
    latex,
    swift,
    android,
    github,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    icat,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work Experience",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Mobile Developer",
        icon: mobile,
    },
    
];

const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "android",
        icon: android
    },
    {
        name: "swift",
        icon: swift
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "github",
        icon: github_logo
    },
    {
        name: "latex",
        icon: latex
    },
    
    
];

const experiences = [
    {
        title: "Full stack Developer",
        company_name: "ICAT",
        icon: icat,
        iconBg: "#E6DEDD",
        date: "March 2023 - Present",
        points: [
            "Developing and maintaining a web applicaction using NodeJS",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
];


const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, projects };