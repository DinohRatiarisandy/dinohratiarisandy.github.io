import { ReactNode } from "react"

type PropsCard = {
   title: string
   children: ReactNode
   className?: string
}

function Card(props: PropsCard) {
   return (
      <div
         className={`rounded border bg-slate-500/10 ${props.className ? `${props.className}` : ""}`}
      >
         <div className="border-b border-gray-200">
            <h1 className="p-3 font-semibold text-sky-600">{props.title}</h1>
         </div>
         <div className="flex flex-col gap-2 text-slate-700">
            {props.children}
         </div>
      </div>
   )
}

export default Card
