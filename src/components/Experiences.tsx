import Works from "./Works"
import Contacts from "./Contacts"
import Projects from "./Projects"

function Experiences() {
   return (
      <div className="mt-8 flex flex-col gap-2 lg:flex-row lg:gap-2">
         <Projects />
         <div className="flex flex-col gap-2 lg:w-64">
            <Works />
            <Contacts />
         </div>
      </div>
   )
}

export default Experiences
