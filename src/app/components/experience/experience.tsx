import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>4 years as a Front-End Developer</p>
          <div className="experience-time">
            <Skill image="/js.png" years={4}/>
            <Skill image="/react.png" years={2}/>
            <Skill image="/ts.png" years={2}/>
            <Skill image="/java.png" years={1}/>
          </div>
        </div>
    )
}