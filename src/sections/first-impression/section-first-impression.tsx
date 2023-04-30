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
            {/* <div className = "bg-photo-me bg-cover w-[100vw] h-[50vh] web:invisible"></div> */}
            <img className = "visible web:invisible" src={'/Web_Resume_Mobile_Pic.jpg'} alt="Portrait"/>
            <div className = "mt-6 web:mt-0 web:px-3 web:absolute web:left-[20vw] web:top-[20vh] p-4 rounded-r-lg bg-box-background backdrop-blur-md bg-opacity-10 pb-2 pt-3 border-l-4 border-border-line">
                <div className = "col-start-2 row-start-2 w-full">
                    <p className = "text-6xl text-text-highlight mb-5">Hi! I'm Eimantas</p>
                    <p className = "text-3xl w-full web:w-[25vw] mb-5">A React frontend developer with background in aerospace engineering and new found passion for software development</p>
                    <p className = "text-xl italic">Scroll down for a 42 seconds long resume video!</p>
                </div>
            </div>
        </section>
    )
}   