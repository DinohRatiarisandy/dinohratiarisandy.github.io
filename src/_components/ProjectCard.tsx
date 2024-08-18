type ProjectProps = {
   image: string
   title: string
   description: string
   urlGithub: string
}

function ProjectCard(props: ProjectProps) {
   return (
      <a
         target="_blank"
         href={props.urlGithub}
         className="flex items-center gap-2 p-2 transition-colors hover:bg-slate-500/10"
      >
         <img src={props.image} alt="" className="h-12 rounded" />
         <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-slate-300">{props.title}</h4>
            <article className="text-sm text-slate-500">
               {props.description}
            </article>
         </div>
      </a>
   )
}

export default ProjectCard
