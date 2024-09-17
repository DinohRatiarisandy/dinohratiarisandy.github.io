type WorkProps = {
   entrepriseImage: string
   entrepriseName: string
   entrepriseWebsite: string
   myPost: string
   year: string
}

function WorkCard(props: WorkProps) {
   return (
      <div className="flex items-center gap-2 p-2">
         <img
            className="h-12 rounded"
            src={props.entrepriseImage}
            alt={`${props.entrepriseName}'s image`}
         />
         <div className="flex w-full justify-between">
            <div>
               <a
                  href={props.entrepriseWebsite}
                  target="_blank"
                  className="font-semibold text-slate-700 transition-colors hover:text-sky-400 dark:text-slate-300"
               >
                  {props.entrepriseName}
               </a>
               <p className="text-sm text-slate-500">{props.myPost}</p>
            </div>
            <p className="text-sm font-semibold text-slate-500">{props.year}</p>
         </div>
      </div>
   )
}

export default WorkCard
