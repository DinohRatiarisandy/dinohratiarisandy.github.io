import FacebookIcon from "./icons/FacebookIcon"
import ReactIcon from "./icons/ReactIcon"
import SkillCard from "./SkillCard"

const MY_SKILLS = [
   {
      icon: ReactIcon,
      technoName: "Python",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
   },
   {
      icon: ReactIcon,
      technoName: "ReactJs",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
   },
   {
      icon: FacebookIcon,
      technoName: "Algorithm integration",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
   },
]

function Skills() {
   return (
      <div className="mt-8 flex flex-col gap-2 rounded border border-slate-400/20 p-2">
         <h5 className="text-2xl text-slate-200">I love working on...</h5>
         <div className="flex flex-col justify-between gap-3 lg:flex-row">
            {MY_SKILLS.map(function (techno) {
               return <SkillCard {...techno} />
            })}
         </div>
      </div>
   )
}

export default Skills
