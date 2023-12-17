import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages 🌎"/>
        <div className="languages-info">
          <span><strong>English</strong> - <em>Fluent</em></span>
          <span><strong>Portuguese</strong> - <em>Native</em></span>
        </div>
        <SectionTitle text="Education 🎓"/>
        <div className="educational-info">
          <span><strong>Computer Science Bachelors Degree</strong> - <em>Uninassau</em></span>
        </div>
      </div>
    )
}