import React from 'react';
import { NavBar } from './navigation-bar/navigation-bar';
import { ElevatorPitch } from './sections/elevator-pitch/elevator-pitch';
import { FirstImpressionSection } from './sections/first-impression/section-first-impression';
import { GetInContactSection } from './sections/get-in-contact/get-in-contact';
import { ProjectSection } from './sections/project/project-section';
import { FullStackNotebook, ResumeWebsiteProject, SymbolicRegression, ToyProgLang, VisProgProject } from './sections/project/project-section-info';
import { ResumeSection } from './sections/resume/resume-section';
import { educationResumeInfo, workExperienceResumeInfo } from './sections/resume/resume-section-data';
import { useIntersectionObserver } from './subroutines/custom-hooks';

function App() {

  const sectFirstImpressionRef = React.useRef<HTMLDivElement>(null)
  const [yPosSections, updateYPosSection] = React.useState<(number | null)[]>([null, null, null, null, null, null, null, null, null])

  useIntersectionObserver("animate-wait-for-left", "animate-come-from-left", 0.5)
  useIntersectionObserver("animate-wait-for-right", "animate-come-from-right", 0.5)
  useIntersectionObserver("animate-wait-for-left-pre", "animate-come-from-left-pre", 0.5)

  return (
    <div className = "font-mono w-[100%] bg-scroll bg-cover absolute overflow-y-visible web:snap-mandatory max-h-screen overflow-x-hidden" >
      {/* <div className = "w-[100%] bg-scroll bg-cover bg-bg-image absolute overflow-y-auto max-h-screen web:snap-mandatory web:snap-y overflow-x-hidden"> */}
      <div className = "fixed w-full -z-20 h-full bg-background bg-opacity-100 "></div>
      <FirstImpressionSection sectionNo = {0} updateYPosition = {updateYPosSection}/>
      <ElevatorPitch sectionNo = {1} updateYPosition = {updateYPosSection}/>
      <ResumeSection resumeInfoWork = {workExperienceResumeInfo} resumeInfoEducation = {educationResumeInfo} sectionNo = {2} updateYPosition = {updateYPosSection}/>
      <ProjectSection projectNo = {1} projectInfo = {VisProgProject} sectionNo = {3} updateYPosition = {updateYPosSection} showLiveDemoButton = {true}/>
      <ProjectSection projectNo = {2} projectInfo = {ToyProgLang} sectionNo = {4} updateYPosition = {updateYPosSection} showLiveDemoButton = {true}/>
      {/* <ProjectSection projectNo = {3} projectInfo = {SymbolicRegression} sectionNo = {5} updateYPosition = {updateYPosSection} showLiveDemoButton = {false}/> */}
      <ProjectSection projectNo = {3} projectInfo = {FullStackNotebook} sectionNo = {6} updateYPosition = {updateYPosSection} showLiveDemoButton = {true}/>
      {/* <ProjectSection projectNo = {4} projectInfo = {ResumeWebsiteProject} sectionNo = {7} updateYPosition = {updateYPosSection} showLiveDemoButton = {false}/> */}
      <GetInContactSection sectionNo = {8} updateYPosition = {updateYPosSection}/>
      {/* <NavBar yPositions={yPosSections}/> */}
      {/* </div> */}
    </div>
  );
}

export default App;
