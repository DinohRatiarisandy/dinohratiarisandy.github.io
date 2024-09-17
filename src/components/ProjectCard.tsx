import Badge from "./ui/Badge"

type ProjectProps = {
   thumbnail: string
   title: string
   description: string
   url: string
   isNew?: boolean
}

function ProjectCard({ isNew = false, ...props }: ProjectProps) {
   return (
      <a
         target="_blank"
         href={props.url}
         className="relative flex items-center gap-2 p-2 transition-colors hover:bg-slate-500/10"
      >
         <img src={props.thumbnail} alt="" className="h-12 rounded" />
         <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">
               {props.title}
            </h4>
            <article className="text-sm text-slate-500">
               {props.description}
            </article>
         </div>
         {isNew && <Badge text="New" className="absolute right-5 top-3" />}
      </a>
   )
}

export default ProjectCard
