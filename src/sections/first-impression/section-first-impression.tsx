import React, { LegacyRef } from "react"
// import portrait from '/First_impression_background_image_portrait.JPG'

import { useGetYPositionAndRef } from "../../subroutines/custom-hooks"

interface IFirstImpressionSection {
    sectionNo: number,
    updateYPosition: React.Dispatch<React.SetStateAction<(number | null)[]>>
}

export const FirstImpressionSection: React.FC<IFirstImpressionSection> = ({sectionNo, updateYPosition}) => {

    const selfRef = useGetYPositionAndRef(sectionNo, updateYPosition)

    return (
        <section ref = {selfRef} id = "first_impression_section" className = "relative px-2 web:px-0 py-2 web:py-0 w-full web:h-screen web:snap-start text-white">
            <div className = "absolute web:visible web:bg-photo-me web:bg-cover h-[100vh] w-[100vw]"></div>
            <div className = "absolute web:visible web:bg-first-impression-background web:bg-cover h-[100vh] w-[100vw] -z-20"></div>
            <div className = "absolute w-[60vw] top-[-25vh] h-[250vh] left-[45vw] rotate-[30deg] bg-text-highlight blur-xl bg-opacity-[20%] -z-10 backdrop-blur-sm overflow-hidden"></div>
            {/* <div className = "bg-photo-me bg-cover w-[100vw] h-[50vh] web:invisible"></div> */}
            <img className = "visible web:invisible" src={'/Web_Resume_Mobile_Pic.jpg'} alt="Portrait"/>
            <div className = "mt-6 web:mt-0 web:px-3 web:absolute web:left-[15vw] web:top-[15vh] p-4 rounded-r-lg bg-box-background backdrop-blur-md bg-opacity-10 pb-2 pt-3 border-l-4 border-border-line">
                <div className = "col-start-2 row-start-2 web:w-[35vw]  ">
                    <p className = "text-6xl text-text-highlight mb-5">Hi! I'm Eimantas</p>
                    <p className = "text-3xl w-full web:w-full mb-5">A React frontend and Python developer with over 2 years of experience</p>
                    <p className = "text-xl italic">Scroll down for a 40 seconds long resume video about my side projects: <strong className = "text-text-highlight">my own programming language with an online interpreter</strong> and <strong className = "text-text-highlight">drag-and-drop calculator</strong>!</p>
                </div>
            </div>
        </section>
    )
}   