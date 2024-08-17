import Card from "./Card"
import ProjectCard from "./ProjectCard"

const PROJECTS = [
   {
      image: "src/assets/profile/my-profile.jpeg",
      title: "Connect-4 with AI",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      urlGithub: "/",
   },
   {
      image: "src/assets/profile/my-profile.jpeg",
      title: "2048 with AI",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      urlGithub: "/",
   },
   {
      image: "src/assets/profile/my-profile.jpeg",
      title: "App desktop to solve knapsack problem",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      urlGithub: "/",
   },
   {
      image: "src/assets/profile/my-profile.jpeg",
      title: "App desktop to solve knapsack problem",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      urlGithub: "/",
   },
   {
      image: "src/assets/profile/my-profile.jpeg",
      title: "App desktop to solve knapsack problem",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      urlGithub: "/",
   },
   {
      image: "src/assets/profile/my-profile.jpeg",
      title: "App desktop to solve knapsack problem",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      urlGithub: "/",
   },
   {
      image: "src/assets/profile/my-profile.jpeg",
      title: "App desktop to solve knapsack problem",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      urlGithub: "/",
   },
]

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
