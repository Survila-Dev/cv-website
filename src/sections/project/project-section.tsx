import React from "react"
import { TechStack } from "../../tech-stack/tech-stack"
import { TechSymbol } from "../../tech-stack/tech-symbol"
import { IProjectSectionProps } from "./project-section-types"
import { SiGithub } from "react-icons/si"
import { BiLinkExternal } from "react-icons/bi"
import { useGetYPositionAndRef } from "../../subroutines/custom-hooks"

export const ProjectSection: React.FC<IProjectSectionProps> = ({projectNo, projectInfo, sectionNo, updateYPosition, showLiveDemoButton}) => {

    const selfRef = useGetYPositionAndRef(sectionNo, updateYPosition)

    const buttonSymbolSize = 40

    return (
        <section ref = {selfRef} id = {projectInfo.id} className = "w-auto  text-white web:snap-start grid grid-cols-project-small px-2 web:px-0 web:grid-cols-project web:grid-rows-project gap-6" >
            <div className = "w-auto row-start-2 opacity-0 animate-wait-for-left col-start-1 col-span-1 web:row-start-2 web:col-start-2 web:col-span-3">
                <div className = "flex items-center gap-3">
                    <div className = "text-text-highlight text-2xl font-bold rounded-r-lg px-6 bg-box-background backdrop-blur-md bg-opacity-10 pb-2 pt-1 border-l-4 border-l-border-line">
                        Project #0{projectNo}
                    </div>
                    <h2 className = "text-2xl">
                         {projectInfo.title}
                    </h2>
                </div>
            </div>

            <div className = "w-full grid grid-cols-2 row-start-4 web:row-start-3 gap-2 row-span-1 col-start-1 web:col-start-2 col-span-1 opacity-0 animate-wait-for-left">
                {showLiveDemoButton && <a
                    className = "cursor-pointer h-auto p-2 gap-3 flex flex-row items-center rounded-lg rounded-l-none border-[1px] bg-button-background backdrop-blur-md bg-opacity-10 hover:bg-button-background-hover border-l-4  border-border-line"
                    href = {projectInfo.links.demoLink}
                    >
                    <BiLinkExternal size = {buttonSymbolSize}/>
                    <p>Live Demo.</p>
                </a>}
                {(!showLiveDemoButton) &&
                <a
                    className = "cursor-pointer h-auto p-2 col-span-2 gap-3 flex flex-row items-center rounded-lg rounded-l-none border-[1px] bg-button-background backdrop-blur-md bg-opacity-10 hover:bg-button-background-hover border-l-4  border-border-line"
                    href = {projectInfo.links.githubLink}
                    >
                    <SiGithub size = {buttonSymbolSize}/>
                    <p>GitHub</p>
                </a>
                }
                {showLiveDemoButton && 
                <a
                    className = "cursor-pointer h-auto p-2 gap-3 flex flex-row items-center rounded-lg border-[1px] bg-button-background backdrop-blur-md bg-opacity-10 hover:bg-button-background-hover  border-border-line"
                    href = {projectInfo.links.githubLink}
                    >
                    <SiGithub size = {buttonSymbolSize}/>
                    <p>GitHub</p>
                </a>
                }
            </div>

            <div className = "w-auto bg-box-background opacity-0 animate-wait-for-left backdrop-blur-md bg-opacity-10 p-5 pr-7 rounded-r-lg border-l-4 row-start-5 row-span-1 col-start-1 col-span-1 web:row-start-4 web:col-start-2 web:col-span-1 web:row-span-3 overflow-y-auto border-l-border-line" >
                
                {projectInfo.bullerpoints.map((curChapter, i) => {
                    return (
                        <div key = {i}>
                            <h3 className = "text-xl text-text-highlight">{curChapter.subtitle}</h3>
                            <ul className = "list-disc pl-6 py-2 text-gray-100">
                                {curChapter.points.map((curBulletPoint, j) => <li key = {j} className = "text-md">{curBulletPoint}</li>)}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div className = "row-start-3 col-start-1 opacity-0 animate-wait-for-right col-span-1 web:row-start-3 web:col-start-3 web:row-span-3 web:col-span-1 ">
                {projectInfo.visualizationNode}
            </div>
            {/* <div className =  "justify-center row-start-6 col-start-1 opacity-0 animate-wait-for-right  col-span-1 flex flex-row web:justify-start web:flex-col gap-1 web:row-start-3 web:col-start-4 web:row-span-3">
                {showLiveDemoButton && <a
                    className = "cursor-pointer w-[120px] web:w-[65px] h-auto p-2 flex flex-col items-center rounded-lg web:rounded-r-none border-[1px] bg-button-background backdrop-blur-md bg-opacity-10 hover:bg-button-background-hover web:border-r-4 border-slate-400 web:border-border-line"
                    href = {projectInfo.links.demoLink}
                    >
                    <BiLinkExternal size = {buttonSymbolSize}/>
                    <p>Live Demo.</p>
                </a>}
                <a
                    className = "cursor-pointer web:w-[65px] h-auto p-2 flex flex-col items-center rounded-lg web:rounded-r-none border-[1px] bg-button-background backdrop-blur-md bg-opacity-10 hover:bg-button-background-hover web:border-r-4 border-slate-400 web:border-border-line"
                    href = {projectInfo.links.githubLink}
                    >
                    <SiGithub size = {buttonSymbolSize}/>
                    <p>GitHub</p>
                </a>
            </div> */}
            <div className = " w-auto row-start-6 col-start-1 col-span-1 web:col-start-2 web:row-start-7 web:col-span-2">
                <TechStack techStack={projectInfo.techstack}/>
            </div>
        </section>
    )
}