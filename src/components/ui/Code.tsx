import { ComponentPropsWithoutRef } from "react"

function Code({ className = "", ...props }: ComponentPropsWithoutRef<"span">) {
   return (
      <span
         className={`${className} rounded border border-slate-300/20 bg-slate-200/10 px-1 text-slate-200`}
         {...props}
      />
   )
}

export default Code
