import HobbieCard from "./HobbieCard"
import { HOBBIES } from "../constants/hobbies"

function Hobbies() {
   return (
      <div className="mt-8 flex flex-col gap-2 rounded border border-slate-400/20 p-2">
         <h5 className="text-2xl text-slate-200">Some of my hobbies...</h5>
         <div className="flex flex-col justify-between gap-3 lg:flex-row">
            {HOBBIES.map(function (hobbie) {
               return <HobbieCard {...hobbie} />
            })}
         </div>
      </div>
   )
}

export default Hobbies
