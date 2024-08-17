import Header from "./_components/Header"
import Bio from "./_components/Bio"
import Experiences from "./_components/Experiences"

function App() {
   return (
      <>
         <div className="m-auto w-[90%] bg-white p-2 text-slate-500 lg:w-3/5">
            <Header />
            <Bio />
            <Experiences />
         </div>
      </>
   )
}

export default App
