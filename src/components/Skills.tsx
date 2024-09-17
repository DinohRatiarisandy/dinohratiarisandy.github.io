import SkillCard from "./SkillCard"
import { SKILLS } from "../constants/skills"

function Skills() {
   return (
      <div className="mt-8 flex flex-col gap-2 rounded border border-slate-900/20 p-2 dark:border-slate-400/20">
         <h5 className="text-2xl text-slate-800 dark:text-slate-200">
            I love working on...
         </h5>
         <div className="flex flex-col justify-between gap-3 lg:flex-row">
            {SKILLS.map(function (techno) {
               return <SkillCard key={techno.technoName} {...techno} />
            })}
         </div>
      </div>
   )
}

export default Skills
