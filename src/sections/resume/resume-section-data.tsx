export interface IResumeSection {
    resumeInfoWork: IResumeSectionProps
    resumeInfoEducation: IResumeSectionProps
    sectionNo: number
    updateYPosition: React.Dispatch<React.SetStateAction<(number | null)[]>>
}

export interface IResumeSectionProps {
    title: string,
    id: string,
    entries: {timespan: string, positionTitle: string, subTitle: string, organisation: string, location: string}[]
}

export const workExperienceResumeInfo: IResumeSectionProps = {
    title: "Work Experience",
    id: "work_experience",
    entries: [{
        timespan: "2023 - today",
        positionTitle: "Research & Development Engineer",
        subTitle: "Laser Technologies and Aerodynamics",
        organisation: "4JET Group",
        location: "Alsdorf, Germany"
        },
        {
        timespan: "2021 - 2023",
        positionTitle: "Project Manager",
        subTitle: "Research and Development in Production Engineering",
        organisation: "Fraunhofer Institute for Production Technologies",
        location: "Aachen, Germany"
        },
    ]
}

export const educationResumeInfo: IResumeSectionProps = {
    title: "Education",
    id: "education",
    entries: [{
        timespan: "2021",
        positionTitle: "Aerospace Engineering, MSc",
        subTitle: "Master of Science in Aerospace Engineering (ranked in top 25 percentile)",
        organisation: "RWTH Aachen",
        location: "Aachen, Germany"
        },
        {
        timespan: "2019",
        positionTitle: "Mechanical Engineering, BSc",
        subTitle: "Bachelor of Science in Mechanical Engineering (ranked in top 25 percentile)",
        organisation: "RWTH Aachen",
        location: "Aachen, Germany"
        },
    ]
}