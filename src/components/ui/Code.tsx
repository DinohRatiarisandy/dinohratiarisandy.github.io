import { ComponentPropsWithoutRef } from "react"

function Code({ className = "", ...props }: ComponentPropsWithoutRef<"span">) {
   return (
      <span
         className={`${className} rounded border border-slate-700/20 bg-slate-400/20 px-1 text-slate-900 dark:border-slate-300/20 dark:bg-slate-200/10 dark:text-slate-200`}
         {...props}
      />
   )
}

export default Code
