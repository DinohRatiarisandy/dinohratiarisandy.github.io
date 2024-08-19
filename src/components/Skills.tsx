import AlgorithmIcon from "./icons/AlgorithmIcon"
import PythonIcon from "./icons/PythontIcon"
import ReactIcon from "./icons/ReactIcon"
import SkillCard from "./SkillCard"

const MY_SKILLS = [
   {
      icon: PythonIcon,
      technoName: "Python",
      description:
         "It's my primary language for implementing algorithms. I've used it for 5 years, which means I have advanced quite a bit in Python. 😉",
   },
   {
      icon: ReactIcon,
      technoName: "ReactJs",
      description:
         "I use ReactJS with Typescript for better clarity and to ensure smooth communication with other developers. Combined with Tailwind CSS, it's amazing !🔥",
   },
   {
      icon: AlgorithmIcon,
      technoName: "Algorithm integration",
      description:
         "I'm a fan of algorithms, especially AI algorithms. I love implementing them in my games and exploring new ones during my free time. 🚀",
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
