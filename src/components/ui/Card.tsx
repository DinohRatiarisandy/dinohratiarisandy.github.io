import { PropsWithChildren } from "react"

type CardProps = PropsWithChildren & {
   title: string
   className?: string
}

function Card({ className = "", ...props }: CardProps) {
   return (
      <div className={`${className} rounded border border-slate-400/20`}>
         <div className="border-b border-slate-400/20 bg-slate-900/30">
            <h1 className="p-3 text-lg font-semibold text-slate-200">
               {props.title}
            </h1>
         </div>
         <div className="flex flex-col gap-2 text-slate-700">
            {props.children}
         </div>
      </div>
   )
}

export default Card
