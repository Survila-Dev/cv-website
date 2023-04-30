import React from "react"
import { TechSymbol } from "./tech-symbol"
import { ITechStack } from "./types"

export const TechStack: React.FC<{techStack: ITechStack}> = ({techStack}) => {
    return (
        <div className = "flex flex-col gap-3 items-center w-auto ">
            <p className = "text-text-highlight opacity-0 animate-wait-for-left">Tech stack</p>
            <div className = "flex gap-4 [&>*:nth-child(1)]:animation-delay-1child [&>*:nth-child(2)]:animation-delay-2child [&>*:nth-child(3)]:animation-delay-3child [&>*:nth-child(4)]:animation-delay-4child [&>*:nth-child(5)]:animation-delay-5child [&>*:nth-child(6)]:animation-delay-6child [&>*:nth-child(7)]:animation-delay-7child  [&>*:nth-child(8)]:animation-delay-8child [&>*:nth-child(9)]:animation-delay-9child [&>*:nth-child(10)]:animation-delay-10child [&>*:nth-child(11)]:animation-delay-11child [&>*:nth-child(12)]:animation-delay-12child [&>*:nth-child(13)]:animation-delay-13child [&>*:nth-child(14)]:animation-delay-14child [&>*:nth-child(15)]:animation-delay-15child flex-wrap justify-center">
                {techStack.map((tech, i) => <TechSymbol key = {i} type = {tech}/>)}
            </div>
        </div>
    )
}