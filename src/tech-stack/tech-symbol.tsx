import React from "react"
import { ITech } from "./types"
import { SiAmazonaws, SiAuth0, SiAxios, SiCss3, SiCypress, SiDocker, SiExpress, SiFirebase, SiGraphql, SiHtml5, SiJavascript, SiJest, SiMongodb, SiNodedotjs, SiPython, SiReact, SiRedux, SiSass, SiTailwindcss, SiTestinglibrary, SiTypescript } from "react-icons/si"

export const TechSymbol: React.FC<{type: ITech}> = ({type}) => {

    let symbol: JSX.Element = <div></div>;

    const symbolSize = 35

    switch(type) {
        case "Auth0":
            symbol = <SiAuth0 size = {symbolSize}/>
            break
        case "HTML":
            symbol = <SiHtml5 size = {symbolSize}/>
            break
        case "CSS":
            symbol = <SiCss3 size = {symbolSize}/>
            break
        case "SASS":
            symbol = <SiSass size = {symbolSize}/>
            break
        case "Tailwind CSS":
            symbol = <SiTailwindcss size = {symbolSize}/>
            break
        case "JavaScript":
            symbol = <SiJavascript size = {symbolSize}/>
            break
        case "TypeScript":
            symbol = <SiTypescript size = {symbolSize}/>
            break
        case "React":
            symbol = <SiReact size = {symbolSize}/>
            break
        case "Axios":
            symbol = <SiAxios size = {symbolSize}/>
            break
        case "Node.js":
            symbol = <SiNodedotjs size = {symbolSize}/>
            break
        case "Express.js":
            symbol = <SiExpress size = {symbolSize}/>
            break
        case "GraphQL":
            symbol = <SiGraphql size = {symbolSize}/>
            break
        case "MongoDB":
            symbol = <SiMongodb size = {symbolSize}/>
            break
        case "Python":
            symbol = <SiPython size = {symbolSize}/>
            break
        case "Jest":
            symbol = <SiJest size = {symbolSize}/>
            break
        case "cypress":
            symbol = <SiCypress size = {symbolSize}/>
            break
        case "Redux":
            symbol = <SiRedux size = {symbolSize}/>
            break
        case "Docker":
            symbol = <SiDocker size = {symbolSize}/>
            break
        case "AWS":
            symbol = <SiAmazonaws size = {symbolSize}/>
            break
        case "Firebase":
            symbol = <SiFirebase size = {symbolSize}/>
            break
        case "Testing Lib.":
            symbol = <SiTestinglibrary size = {symbolSize}/>
            break
    }

    return (
        <article className = "transition flex flex-col items-center w-[78px] opacity-0 animate-wait-for-left-pre">
            {/* <div className = "bg-slate-700 h-[50px] w-[50px]"></div> */}
            {symbol}
            <p className = "text-sm text-center">{type}</p>
        </article>
    )

} 