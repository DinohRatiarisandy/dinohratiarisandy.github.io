import React from "react"

import { IconPropsType } from "./icons/icon-props-type"

type HobbieCardProps = {
   icon: React.ComponentType<IconPropsType>
   hobbieProfileUrl: string
   hobbieName: string
   description: string
}

function HobbieCard(props: HobbieCardProps) {
   const { icon: Icon, hobbieProfileUrl, hobbieName, description } = props
   return (
      <div className="flex flex-col justify-between p-1">
         <div>
            <Icon size={48} title={hobbieName} />
            <div>
               <h5 className="font-semibold text-slate-700 dark:text-slate-300">
                  {hobbieName}
               </h5>
               <article className="mb-2 text-slate-500">{description}</article>
            </div>
         </div>
         <a
            target="_blank"
            href={hobbieProfileUrl}
            className="text-slate group w-1/4 rounded p-1 text-slate-700 ring-1 ring-sky-600/40 hover:text-slate-900 hover:ring-2 md:w-1/2 dark:text-slate-400 dark:hover:text-slate-100"
         >
            Go to my profile
            <span className="inline-block p-1 font-bold transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
               ↗
            </span>
         </a>
      </div>
   )
}

export default HobbieCard
