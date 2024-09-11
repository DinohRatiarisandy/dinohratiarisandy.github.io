import Card from "./ui/Card"
import ProjectCard from "./ProjectCard"
import { PROJECTS } from "../constants/projects"

function Projects() {
   return (
      <Card title="Side and fun projects" className="flex flex-[2] flex-col">
         <div className="h-[20rem] overflow-scroll">
            {PROJECTS.map(function (project) {
               return <ProjectCard key={project.title} {...project} />
            })}
         </div>
      </Card>
   )
}

export default Projects
