import Header from "./components/Header"
import Bio from "./components/Bio"
import Experiences from "./components/Experiences"
import Skills from "./components/Skills"
import Hobbies from "./components/Hobbies"
import Footer from "./components/Footer"

function App() {
   return (
      <div className="bg-slate-950">
         <div className="m-auto w-[95%] bg-slate-950 p-2 text-slate-400 lg:w-3/5">
            <Header />
            <Bio />
            <Experiences />
            <Skills />
            <Hobbies />
            <Footer />
         </div>
      </div>
   )
}

export default App
