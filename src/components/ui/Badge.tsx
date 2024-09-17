import { ComponentPropsWithoutRef } from "react"

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
   text: string
}

function Badge(props: BadgeProps) {
   return (
      <span
         className={`${props.className} w-9 rounded-full bg-green-500/50 px-1 text-center text-xs text-black dark:text-white`}
      >
         {props.text}
      </span>
   )
}

export default Badge
