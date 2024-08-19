import HobbieCard from "./HobbieCard"
import ItchioIcon from "./icons/ItchioIcon"
import LeetCodeIcon from "./icons/LeetCodeIcon"
import TyperacerIcon from "./icons/TyperacerIcon"

const MY_HOBBIES = [
   {
      icon: ItchioIcon,
      hobbieProfileUrl: "https://dinoh-sandys.itch.io/",
      hobbieName: "itch.io",
      description:
         "itch.io is a website for users to host, sell and download indie video games, indie role-playing games, game assets, comics, zines and music.",
   },
   {
      icon: LeetCodeIcon,
      hobbieProfileUrl: "https://leetcode.com/u/dinoh__sandys/",
      hobbieName: "LeetCode",
      description:
         "LeetCode is an online platform for coding interview preparation. The service provides coding and algorithmic problems intended for users to practice coding.",
   },
   {
      icon: TyperacerIcon,
      hobbieProfileUrl:
         "https://data.typeracer.com/pit/profile?user=dinoh__sandys",
      hobbieName: "TypeRacer",
      description:
         "TypeRacer is a multiplayer online browser-based typing game. In TypeRacer, player complete typing tests of various texts as fast as possible.",
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
