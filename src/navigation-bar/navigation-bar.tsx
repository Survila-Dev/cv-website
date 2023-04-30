import React from "react"
import { FullStackNotebook, ResumeWebsiteProject, SymbolicRegression, ToyProgLang, VisProgProject } from "../sections/project/project-section-info"
import { educationResumeInfo, workExperienceResumeInfo } from "../sections/resume/resume-section-data"
import { CgShapeRhombus } from "react-icons/cg"

interface INavBar {
    yPositions: (number | null)[]
}

export const NavBar: React.FC<INavBar> = ({yPositions}) => {

    const buttonsInfo: {text: string, onClickRef: string}[] = [
        {text: "Hi", onClickRef: "first_impression_section"},
        {text: "Resume video", onClickRef: "elevator_pitch_section"},
        {text: "Experience", onClickRef: workExperienceResumeInfo.id},
        {text: "Education", onClickRef: educationResumeInfo.id},
        {text: "Project 01", onClickRef: VisProgProject.id},
        {text: "Project 02", onClickRef: ToyProgLang.id},
        {text: "Project 03", onClickRef: SymbolicRegression.id},
        {text: "Project 04", onClickRef: FullStackNotebook.id},
        {text: "Project 05", onClickRef: ResumeWebsiteProject.id },
        {text: "Get in contact", onClickRef: "get_in_contact"},
    ]

    const NavbarElement: React.FC<{no: number, text: string, onClickRef: string}> =({no, text, onClickRef}) => {

        const [triggerScroll, updateTriggerScroll] = React.useState<boolean>(true)

        // React.useEffect(() => {

        //     // window.scrollTo(0, 100)
        //     // console.log("scrolling")
        //     // window.scrollTo({
        //     //             top: 200,
        //     //             behavior: 'smooth',
        //     //         })

        //     const posToScrollTo = yPositions[no]
        //     const element = document.querySelector("body")
        //     if (posToScrollTo && element) {
        //         console.log("Scroll")
        //         // window.scrollTo(100, 100)
        //         element.scroll(0,posToScrollTo)

        //     }

        // }, [triggerScroll])

        const handleOnClick: React.MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent) => {

            updateTriggerScroll((cur) => !cur)

            // const posToScrollTo = yPositions[no]
            // // const element = document.querySelector("body")
            // if (posToScrollTo) {
            //     console.log("Scroll")
            //     // window.scrollTo(100, 100)
            //     window.scrollTo({
            //         top: 200,
            //         behavior: 'smooth',
            //     })
            //     // element.scroll(0,posToScrollTo)
            // }
            // console.log(posToScrollTo)
        }

        return (
            <div
                className = "group flex items-center justify-end hover:bg-box-background hover:backdrop-blur-md hover:bg-opacity-10 px-2"
                onClick = {handleOnClick}>
                <p className = "invisible group-hover:visible w-auto text-xl pb-1 pr-5">{text}</p>
            
                <div className = "group-hover:animate-spin flex w-[25px] justify-center text-text-highlight">
                    <CgShapeRhombus size = {25}/>
                </div>
            </div>
        )
    }
    
    return (
        <div className = "invisible text-white web:visible fixed right-[3vw] top-0 h-screen flex flex-col justify-center gap-1 z-10">
            {buttonsInfo.map((cur, i) => {
                return <NavbarElement no = {i} text = {cur.text} onClickRef = {cur.onClickRef}/>

                // if (i === 0) {
                //     return (
                //         <a href={"#"+cur.onClickRef} className = "bg-transparent border-[1px] rounded-tl-lg hover:bg-slate-50 border-slate-500 py-1 flex flex-col items-center justify-center">{cur.element}</a>
                //         // <button
                //         //     className = "bg-transparent border-[1px] rounded-tl-lg hover:bg-slate-50 border-slate-500 py-1 flex flex-col items-center justify-center"
                //         //     onClick = () => { }
                //         // >{cur.element}
                //         // </button>
                //         )
                // } else if (i === buttonsInfo.length - 1) {
                //     return (<a href={"#"+cur.onClickRef} className = "bg-transparent border-[1px] rounded-bl-lg hover:bg-slate-50 border-slate-500 py-1 flex flex-col items-center justify-center">{cur.element}</a>)
                // } else {
                //     return (<a href={"#"+cur.onClickRef} className = "bg-transparent border-[1px] hover:bg-slate-50 border-slate-500 py-1 flex flex-col items-center justify-center">{cur.element}</a>)
                // }
            })}
        </div>
    )
}