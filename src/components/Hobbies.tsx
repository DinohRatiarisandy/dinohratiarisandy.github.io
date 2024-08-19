import HobbieCard from "./HobbieCard"
import FacebookIcon from "./icons/FacebookIcon"
import ItchioIcon from "./icons/ItchioIcon"
import LeetCodeIcon from "./icons/LeetCodeIcon"

const MY_HOBBIES = [
   {
      icon: ItchioIcon,
      hobbieProfileUrl: "/",
      hobbieName: "itch.io",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
   },
   {
      icon: LeetCodeIcon,
      hobbieProfileUrl: "/",
      hobbieName: "LeetCode",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
   },
   {
      icon: FacebookIcon,
      hobbieProfileUrl: "/",
      hobbieName: "Typeracer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
   },
]

function Hobbies() {
   return (
      <div className="mt-8 flex flex-col gap-2 rounded border border-slate-400/20 p-2">
         <h5 className="text-2xl text-slate-200">Some of my hobbies...</h5>
         <div className="flex flex-col justify-between gap-3 lg:flex-row">
            {MY_HOBBIES.map(function (techno) {
               return <HobbieCard {...techno} />
            })}
         </div>
      </div>
   )
}

export default Hobbies
