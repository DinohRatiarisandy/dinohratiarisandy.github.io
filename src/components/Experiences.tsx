import Contact from "./Contact"
import Projects from "./Projects"
import Works from "./Works"

function Experiences() {
   return (
      <div className="mt-8 flex flex-col gap-2 lg:flex-row lg:gap-2">
         <Projects />
         <div className="flex flex-col gap-2 lg:w-64">
            <Works />
            <Contact />
         </div>
      </div>
   )
}

export default Experiences
