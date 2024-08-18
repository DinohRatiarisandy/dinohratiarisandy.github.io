import Header from "./_components/Header"
import Bio from "./_components/Bio"
import Experiences from "./_components/Experiences"
import Skills from "./_components/Skills"
import Hobbies from "./_components/Hobbies"
import Footer from "./_components/Footer"

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
