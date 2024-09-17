import HobbieCard from "./HobbieCard"
import { HOBBIES } from "../constants/hobbies"

function Hobbies() {
   return (
      <div className="mt-8 flex flex-col gap-2 rounded border border-slate-900/20 p-2 dark:border-slate-400/20">
         <h5 className="text-2xl text-slate-800 dark:text-slate-200">
            Some of my hobbies...
         </h5>
         <div className="flex flex-col justify-between gap-3 lg:flex-row">
            {HOBBIES.map(function (hobbie) {
               return <HobbieCard key={hobbie.hobbieProfileUrl} {...hobbie} />
            })}
         </div>
      </div>
   )
}

export default Hobbies
