import { ReactNode } from "react"

type PropsCard = {
  title: string,
  children: ReactNode
}

function Card(props: PropsCard) {
  return (
    <div className="bg-gray-800 rounded">
      <div className="border-b border-gray-600">
        <h1 className="p-4 text-lg">{props.title}</h1>
      </div>
      <div className="flex flex-col gap-2 p-2 overflow-scroll">
        {props.children}
      </div>
    </div>
  )
}

export default Card