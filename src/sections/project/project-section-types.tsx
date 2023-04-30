import { ReactNode } from "react";
import { ITechStack } from "../../tech-stack/types";

export interface IProjectInfo {
    title: string,
    id: string,
    bullerpoints: {subtitle: string, points: string[]}[],
    gifVisualisation: string,
    links: {githubLink: string, demoLink: string},
    techstack: ITechStack,
    visualizationNode: ReactNode
}

export interface IProjectSectionProps {
    projectNo: number,
    projectInfo: IProjectInfo,
    sectionNo: number
    updateYPosition: React.Dispatch<React.SetStateAction<(number | null)[]>>,
    showLiveDemoButton: boolean
}