import React from "react"
import { HiOutlineDownload } from "react-icons/hi"
import { useGetYPositionAndRef } from "../../subroutines/custom-hooks"
import { BiCopy } from "react-icons/bi"

interface IElevatorPitch {
    sectionNo: number,
    updateYPosition: React.Dispatch<React.SetStateAction<(number | null)[]>>
}

export const ElevatorPitch: React.FC<IElevatorPitch> = ({sectionNo, updateYPosition}) => {

    const emailAdress = "contact@eimantas-survila.com"

    const [showCopyMessage, updateShowCopyMessage] = React.useState<boolean>(false)
    const selfElement = useGetYPositionAndRef(sectionNo, updateYPosition)

    const handleCopyClick:React.MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent) => {
        navigator.clipboard.writeText(emailAdress)
        updateShowCopyMessage(true)
        setTimeout(() => {
            updateShowCopyMessage(false)
        }, 1500);
    }
    
    return (
        <section ref = {selfElement} id = "elevator_pitch_section" className = "relative px-2 web:pt-16 text-white web:px-0 w-full web:snap-start gap-6 grid grid-cols-project-small web:grid-cols-general web:grid-rows-general">
            <div className = "row-start-3 col-start-1 web:col-start-2 opacity-0 animate-wait-for-left  web:row-start-2 text-xl rounded-r-lg px-6 bg-box-background backdrop-blur-md bg-opacity-10 pb-4 pt-1 border-l-4 border-border-line">
                <p className = "mt-2 mb-4">Hello!</p>
                <p className = "mb-4">I'm a self-taught <strong className = "text-text-highlight">React frontend</strong> and <strong className = "text-text-highlight">Python developer</strong> with new found passion for app and web development. Currently I'm working as <strong className = "text-text-highlight">a laser system engineer</strong> looking for impactful work as a software developer.</p>
                <p className = "mb-4">Play the video to get to know more about my journey as a frontend developer!</p>
                <a
                    className = "w-auto px-3 mb-4 rounded-lg flex flex-col items-center justify-center border-[1px] bg-button-background backdrop-blur-md bg-opacity-10 hover:bg-button-background-hover border-border-line"
                    href="/Resume.pdf"
                    download="Eimantas_Survila_Resume.pdf"
                    >
                    <HiOutlineDownload size = {45}/>
                    <p className = "text-sm">Download Resume PDF</p>
                </a>
                <div className = "bg-box-background py-2 pl-4 pr-2 flex items-center justify-between rounded-md backdrop-blur-md bg-opacity-10 web:mt-0 mt-2">
                    <p className = "text-[15px]">{emailAdress}</p>
                    <div
                        className = "text-white relativ bg-button-background backdrop-blur-md bg-opacity-10 p-2 rounded-md hover:bg-button-background-hover"
                        onClick = {handleCopyClick}>
                        <BiCopy size = {20}/>
                        {showCopyMessage && <p className = "bg-text-highlight text-black absolute top-0 left-10 text-md px-1">Copied!</p>}
                    </div>
                </div>
            </div>
            <video className = "row-start-2 col-start-1 col-span-1  opacity-0 animate-wait-for-right web:col-start-3 web:row-start-2 web:col-span-2 max-w-full border-solid border-[1px] w-full border-gray-700" controls>
            <source src="Resume_Video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
            </video>
        </section>
    )
}