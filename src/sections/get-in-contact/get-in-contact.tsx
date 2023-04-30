import React from "react"
import {BiCopy} from "react-icons/bi"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { useGetYPositionAndRef } from "../../subroutines/custom-hooks"

interface IGetInContact {
    sectionNo: number
    updateYPosition: React.Dispatch<React.SetStateAction<(number | null)[]>>
}

export const GetInContactSection: React.FC<IGetInContact> = ({sectionNo, updateYPosition}) => {

    const emailAdress = "contact@eimantas-survila.com"

    const selfRef = useGetYPositionAndRef(sectionNo, updateYPosition)

    const [showCopyMessage, updateShowCopyMessage] = React.useState<boolean>(false)
    const [firstName, updateFirstName] = React.useState<string>("")
    const [secondName, updateSecondName] = React.useState<string>("")
    const [company, updateCompany] = React.useState<string>("")
    const [email, updateEmail] = React.useState<string>("")
    const [message, updateMessage] = React.useState<string>("")
    const [successfullySent, updateSuccessfullySent] = React.useState<boolean>(false)

    const handleFirstNameChange: React.ChangeEventHandler<HTMLInputElement> = (event: React.FormEvent<HTMLInputElement>) => {
        updateFirstName(event.currentTarget.value as any as string)
    }

    const handleSecondNameChange: React.ChangeEventHandler<HTMLInputElement> = (event: React.FormEvent<HTMLInputElement>) => {
        updateSecondName(event.currentTarget.value as any as string)
    }

    const handleCompanyChange: React.ChangeEventHandler<HTMLInputElement> = (event: React.FormEvent<HTMLInputElement>) => {
        updateCompany(event.currentTarget.value as any as string)
    }

    const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (event: React.FormEvent<HTMLInputElement>) => {
        updateEmail(event.currentTarget.value as any as string)
    }
    const handleMessageChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event: React.FormEvent<HTMLTextAreaElement>) => {
        updateMessage(event.currentTarget.value as any as string)
    }

    const handleFromCommit: React.MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent) => {
        event.preventDefault()

        // Sent the data as email

        updateSuccessfullySent(true)
        setTimeout(() => {
            updateSuccessfullySent(false)
        }, 1500);
    }

    const handleCopyClick:React.MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent) => {
        navigator.clipboard.writeText(emailAdress)
        updateShowCopyMessage(true)
        setTimeout(() => {
            updateShowCopyMessage(false)
        }, 1500);
    }

    return (
        <section ref = {selfRef} id = "get_in_contact" className = "relative pb-6 mt-6 web:mb-0 relativ px-2 web:px-0 w-full web:snap-end grid web:grid-cols-general web:gap-6 web:grid-rows-contact web:h-screen">
            <h2 className = "mt-6 web:mt-0 font-bold  opacity-0 animate-wait-for-left web:col-start-2 web:row-start-2 web:col-span-1 text-text-highlight text-2xl pt-2 pb-5 web:pt-2 web:pb-10  rounded-r-lg px-6 bg-box-background backdrop-blur-md bg-opacity-10 border-l-4 border-border-line">
                Get in contact!
            </h2>
            <div className = "web:col-start-2 web:row-start-3 text-white text-xl  opacity-0 animate-wait-for-left">
                <div className = "bg-box-background py-2 pl-4 pr-2 flex items-center justify-between rounded-md backdrop-blur-md bg-opacity-10 web:mt-0 mt-2">
                    <p className = "text-[18px]">{emailAdress}</p>
                    <div
                        className = "text-white relativ bg-button-background backdrop-blur-md bg-opacity-10 p-2 rounded-md hover:bg-button-background-hover"
                        onClick = {handleCopyClick}>
                        <BiCopy size = {20}/>
                        {showCopyMessage && <p className = "bg-text-highlight text-black absolute top-0 left-10 text-md px-1">Copied!</p>}
                    </div>
                </div>

                <div className = "my-2 flex gap-2 mt-5 justify-center web:justify-start">
                    {/* <a
                        className = "w-[80px] px-3 pt-2 pb-1 rounded-lg flex flex-col items-center justify-center border-[1px] bg-button-background backdrop-blur-md bg-opacity-10 hover:bg-button-background-hover border-border-line"
                        href = "https://github.com/Survila-Dev"
                        >
                        <SiGithub size = {45}/>
                        <p className = "text-sm">GitHub</p>
                    </a> */}

                    <a
                        className = "w-[110px] px-3 pt-2 pb-1 rounded-lg flex flex-col items-center justify-center border-[1px] bg-button-background backdrop-blur-md bg-opacity-10 hover:bg-button-background-hover border-border-line"
                        href = "https://www.linkedin.com/in/eimantas-survila/"
                        >
                        <SiLinkedin size = {45}/>
                        <p className = "text-sm">LinkedIn</p>
                    </a>
                </div>

            </div>
            <div className = "absolute w-full h-full web:bg-photo-me web:bg-cover -z-20"></div>
            <div className = "absolute w-full h-full bg-green-800 opacity-40 -z-10"></div>
            {/* <form className = "relativ pt-10 web:pt-0 web:col-start-3 web:row-start-3 flex flex-col gap-3 web:col-span-2 web:row-span-4">
                <input type="text" value={firstName} onChange = {handleFirstNameChange} placeholder="First name" />
                <input type="text" value={secondName}  onChange = {handleSecondNameChange} placeholder="Last name"/>
                <input type="text" value={company} onChange = {handleCompanyChange} placeholder="Company"/>
                <input type="text" value={email} onChange = {handleEmailChange} placeholder="Email"/>
                <textarea placeholder="Message" onChange = {handleMessageChange}>{message}</textarea>
                <button onClick = {handleFromCommit} className = "text-white bg-button-background backdrop-blur-md bg-opacity-10 border-[1px] rounded-lg text-xl pb-1 hover:bg-button-background-hover">Send {successfullySent && "(successfully sent)"}</button>
            </form> */}
            {/* <a className = "absolute" href="https://www.flaticon.com/free-icons/globe" title="globe icons">Globe icons created by Prosymbols - Flaticon</a> */}
        </section>
    )
}