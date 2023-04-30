import React from "react"
import { TechSymbol } from "./tech-symbol"
import { ITechStack } from "./types"

export const TechStack: React.FC<{techStack: ITechStack}> = ({techStack}) => {
    return (
        <div className = "flex flex-col gap-3 items-center w-auto opacity-0 animate-wait-for-left">
            <p className = "text-text-highlight">Tech stack</p>
            <div className = "flex gap-2 flex-wrap justify-center">
                {techStack.map((tech) => <TechSymbol type = {tech}/>)}
            </div>
        </div>
    )
}