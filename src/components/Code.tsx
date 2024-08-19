import { ComponentPropsWithoutRef } from "react"

function Code({ className, ...props }: ComponentPropsWithoutRef<"span">) {
   return (
      <span
         className={`${className ? `${className}` : ""} rounded border border-slate-500/20 bg-slate-500/10 px-1 text-slate-200`}
         {...props}
      />
   )
}

export default Code
