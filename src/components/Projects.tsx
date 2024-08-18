import Card from "./Card"
import ProjectCard from "./ProjectCard"
import myProfileImg from "../assets/profile/my-profile.jpeg"

const PROJECTS = [
   {
      image: myProfileImg,
      title: "Connect-4 with AI",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      urlGithub: "/",
   },
   {
      image: myProfileImg,
      title: "2048 with AI",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      urlGithub: "/",
   },
   {
      image: myProfileImg,
      title: "App desktop to solve knapsack problem",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      urlGithub: "/",
   },
   {
      image: myProfileImg,
      title: "App desktop to solve knapsack problem",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      urlGithub: "/",
   },
   {
      image: myProfileImg,
      title: "App desktop to solve knapsack problem",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      urlGithub: "/",
   },
   {
      image: myProfileImg,
      title: "App desktop to solve knapsack problem",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      urlGithub: "/",
   },
   {
      image: myProfileImg,
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
