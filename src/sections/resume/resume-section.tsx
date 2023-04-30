import React from "react"
import { IResumeSection } from "./resume-section-data"
import { useGetYPositionAndRef } from "../../subroutines/custom-hooks"

export const ResumeSection: React.FC<IResumeSection> = ({resumeInfoWork, resumeInfoEducation, sectionNo, updateYPosition}) => {

    const selfRef = useGetYPositionAndRef(sectionNo, updateYPosition)

    return (
        <section ref = {selfRef} id = {resumeInfoWork.id} className = "w-full text-white web:snap-start grid web:grid-cols-general web:grid-rows-resume web:gap-5 pt-5 px-2 web:px-0 ">
            <div className = "web:row-start-1 web:col-start-2"></div>
            <h2 className = "col-start-1 col-span-1 opacity-0 animate-wait-for-left web:col-start-2 web:col-span-3 text-text-highlight text-2xl font-bold rounded-r-lg px-6 bg-box-background backdrop-blur-md bg-opacity-10 pt-2 pb-2 border-l-4 border-border-line">{resumeInfoWork.title}</h2>
            
            {/* <div className = "bg-cyan-800 web:grid-cols-general web:gap-5"> */}

            {resumeInfoWork.entries.map((entry, i) => { return ([
                <div key = {i*2} className = "col-start-1 web:col-start-2 opacity-0 animate-wait-for-left col-span-1 pl-5 web:pl-3 web:mt-0 mt-5">
                    <p className = "text-lg">{entry.timespan}</p>
                </div>,
                <div key = {i*2+1} className = "col-start-1 web:col-start-3 col-span-1 pl-5 web:pl-0 opacity-0 animate-wait-for-right">
                    <p className = "text-xl text-text-highlight font-bold">{entry.positionTitle}</p>
                    <p>{entry.subTitle}</p>
                    <p>{entry.organisation}</p>
                    <p>{entry.location}</p>
                    
                </div>
            ])})}

            <h2 className = "col-start-1 opacity-0 animate-wait-for-left web:py-2 col-span-1 web:col-start-2 web:col-span-3 mt-5 web:mt-5 text-text-highlight text-2xl font-bold rounded-r-lg px-6 bg-box-background backdrop-blur-md bg-opacity-10 pt-2 pb-2 border-l-4 border-border-line">{resumeInfoEducation.title}</h2>
            
            {/* <div className = "bg-cyan-800 web:grid-cols-general web:gap-5"> */}

            {resumeInfoEducation.entries.map((entry, i) => { return ([
                <div key = {i*2} className = "col-start-1 web:col-start-2 col-span-1 opacity-0 animate-wait-for-left pl-5 web:pl-3 web:mt-0 mt-5">
                    <p className = "text-lg">{entry.timespan}</p>
                </div>,
                <div key = {i*2+1} className = "col-start-1 web:col-start-3 col-span-1 pl-5 web:pl-0 opacity-0 animate-wait-for-right">
                    <p className = "text-xl text-text-highlight font-bold">{entry.positionTitle}</p>
                    <p>{entry.subTitle}</p>
                    <p>{entry.organisation}</p>
                    <span>
                        <p>Top 1 in Germany and top 20 university in the world for mechanical engineering according to QS ranking 2022</p>
                        <a className = "underline text-blue-500 hover:text-blue-600 visited:text-purple-400" href = "https://www.rwth-aachen.de/go/id/bavbju?lidx=1#aaaaaaaaabavbmu">(Link to ranking)</a>
                    </span>
                    <p>{entry.location}</p>
                    
                </div>
            ])})}
            <h2 className = "web:invisible col-start-1 web:py-2 text-text-highlight text-2xl col-span-1 web:col-start-2 web:col-span-3 mt-5 web:mt-5 font-bold rounded-r-lg px-6 bg-box-background backdrop-blur-md bg-opacity-10 pt-2 pb-2 border-l-4 border-border-line">Side Projects</h2>
            {/* </div> */}
        </section>
    )
}