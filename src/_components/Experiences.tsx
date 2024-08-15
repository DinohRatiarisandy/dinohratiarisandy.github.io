import Contact from "./Contact"
import Projects from "./Projects"
import Works from "./Works"

function Experiences() {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-2">
      <Projects />
      <div className="flex flex-col lg:w-[256px] gap-2">
        <Works />
        <Contact />
      </div>
    </div>
  )
}

export default Experiences