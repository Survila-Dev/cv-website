import { IProjectInfo } from "./project-section-types";

/**
 * Info about the project.
 */
export const VisProgProject: IProjectInfo = {
    title: "Full-stack Visual Calculation Interface with Authentication and Authorization",
    id: "fs_viscalc",
    bullerpoints: [
        {
            subtitle: "Features",
            points: [
                "Authentication and authorization with databank connection",
                "Drag and drop functionality built from scratch",
                "Back propagation algorithm for calculating value and highlighting not fully connected nodes",
            ]
        }
        ,
        {
            subtitle: "Code",
            points: [
                "Implemented Auth0 for frontend and backend",
                "Redux state management",
                "Higher order components for drag-and-drop items",
                "Express.JS, GraphQL, and MongoDB backend",
                "Tailwind CSS for formatting",
                "End-to-end testing with cypress"
            ]
        }
    ],
    gifVisualisation: "videos/Calculator.mp4",
    links: {demoLink: "https://calculator.eimantas-survila.com/", githubLink: "https://github.com/Survila-Dev/Visual-Calculator"},
    techstack: [
        "HTML", "CSS", "Tailwind CSS", "JavaScript" ,"TypeScript", "React",
        "Redux", "Auth0", "Axios", "Node.js", "Express.js", "GraphQL", "MongoDB", "cypress"],
    visualizationNode: (
        <video className = "col-start-3 row-start-2 max-w-full border-solid border-[1px] w-full border-gray-700" controls>
            <source src="videos/Calculator.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    )
}

export const ToyProgLang: IProjectInfo = {
    title: "Online Interpreter of a Toy Programming Language",
    id: "toyprog",
    bullerpoints: [
        {
            subtitle: "Features",
            points: [
                "An interpreter for custom-made programming language",
                "Visualization of the call stack and variables",
                "Line-by-line evaluation and possibility to interact with call stack and variables during evaluation",
                "Drag-and-drop of lines to call stack to create new callstack elements"
            ]
        }
        ,
        {
            subtitle: "Code",
            points: [
                "Implementation of the programming language interpreter in Typescript with object oriented programming paradigm and recursive callbacks",
                "Complex state management with smart-dumb-component architecture",
                "Component tests with React testing library"
            ]
        }
    ],
    gifVisualisation: "videos/Interpreter.mp4",
    links: {demoLink: "https://interpreter.eimantas-survila.com/", githubLink: "https://github.com/Survila-Dev/Toy-Prog-Lang"},
    techstack: ["HTML", "CSS", "JavaScript" ,"TypeScript", "React", "Testing Lib."],
    visualizationNode: (
        <video className = "col-start-3 row-start-2 max-w-full border-solid border-[1px] w-full border-gray-700" controls>
            <source src="videos/Interpreter.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    )
}

export const FullStackNotebook: IProjectInfo = {
    title: "Full-stack Notebook Web App",
    id: "fs_notebook",
    bullerpoints: [
        {
            subtitle: "Features",
            points: [
                "A full-stack notebook web app with responsive design",
                "Backend with authentication, authorization and databank"
            ]
        }
        ,
        {
            subtitle: "Code",
            points: [
                "Implemented frontend with React and SCSS",
                "Implemented backeend with Firebase",
            ]
        }
    ],
    gifVisualisation: "videos/Notebook.mp4",
    links: {demoLink: "https://notebook.eimantas-survila.com/", githubLink: "https://github.com/Survila-Dev/Notebook"},
    techstack: ["HTML", "CSS", "SASS", "JavaScript" ,"TypeScript", "React", "Firebase"],
    visualizationNode: (
        <video className = "col-start-3 row-start-2 max-w-full border-solid border-[1px] w-full border-gray-700" controls>
            <source src="videos/Notebook.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    )
}

export const ResumeWebsiteProject: IProjectInfo = {
    title: "Responsive React Resume Website",
    id: "resume_website",
    bullerpoints: [
        {
            subtitle: "Features",
            points: [
                "Responsive design for desktop and for mobile browsers",
                "Scroll animation"
            ]
        },
        {
            subtitle: "Code",
            points: [
                "Tailwind CSS formatting",
                "Firebase hosting"
            ]
        }
    ],
    gifVisualisation: "/Calculator_Demo.mp4",
    links: {
        demoLink: "",
        githubLink: "https://github.com/Survila-Dev/cv-website"
    },
    techstack: ["HTML", "CSS", "Tailwind CSS","JavaScript", "TypeScript", "React", "Firebase"],
    visualizationNode: (
        <div className = "col-start-3 row-start-2 max-w-full border-solid border-[1px] w-full h-[200px] text-xl italic flex justify-center items-center border-gray-700">
            <p>The currently displayed website.</p>
        </div>
    )
}

export const SymbolicRegression: IProjectInfo = {
    title: "Python Programming Experience",
    id: "symreg",
    bullerpoints: [
        {
            subtitle: "Features",
            points: [
                "Application of Pandas and Keras for creationg of data processing pipelines and artificial neural network training",
                "Developed a Python framework for generic genetic algorithm",
                "Expanded this genetic algorithm to optimize tree structures and applied it for automatic deriving of equations from data"
            ]
        }
        ,
        {
            subtitle: "Code",
            points: [
                "Implemented the frameworks and tools with object-oriented programming paradigm and test-driven development",
                
            ]
        }
    ],
    gifVisualisation: "videos/Python.mp4",
    links: {demoLink: "", githubLink: "https://github.com/Survila-Dev/Symbolic-Regression"},
    techstack: ["Python", "Pandas", "Keras", "OpenGL"],
    visualizationNode: (
        <video className = "col-start-3 row-start-2 max-w-full border-solid border-[1px] w-full border-gray-700" controls>
            <source src="videos/Python.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    )
}