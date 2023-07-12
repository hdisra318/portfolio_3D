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
    medfil,
    calculadora,
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
        name: "MedFil app",
        description:
            "Aplicación hecha para la Facultad de Medicina de la Universidad Nacional Autónoma de México (UNAM) "+
            "que consiste en una app diseñada para que los estudiantes de medicina practiquen sus habilidades "+
            "de diagnóstico a través de \'filtros\' sobre algunas enfermedades/condiciones.",
        image: medfil,
        source_code_link: "https://github.com/hdisra318/MiztliMedFil",
    },
    {
        name: "Calculadora",
        description:
            "App de una calculadora sencilla para Android, hecha en Android Studio.",
        image: calculadora,
        source_code_link: "https://github.com/hdisra318/calculadoraAndroid/",
    },
];

export { services, technologies, experiences, projects };