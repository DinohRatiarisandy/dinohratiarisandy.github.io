import React from "react"
import { IconTypeProps } from "./icons/iconTypeProps"

type SkillCardProps = {
   icon: React.ComponentType<IconTypeProps>
   technoName: string
   description: string
}

function SkillCard(props: SkillCardProps) {
   const { icon: Icon, technoName, description } = props
   return (
      <div className="p-1">
         <Icon size={48} title={technoName} />
         <div>
            <h5 className="font-semibold text-slate-300">{technoName}</h5>
            <article className="text-slate-500">{description}</article>
         </div>
      </div>
   )
}

export default SkillCard
