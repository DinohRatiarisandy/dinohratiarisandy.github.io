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
      <div className="p-1">
         <Icon size={48} title={hobbieName} />
         <div>
            <h5 className="font-semibold text-slate-300">{hobbieName}</h5>
            <article className="mb-2 text-slate-500">{description}</article>
         </div>
         <a
            target="_blank"
            href={hobbieProfileUrl}
            className="group rounded p-1 text-sm ring-1 ring-sky-600/40 hover:text-slate-300 hover:ring-2"
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
