import FacebookIcon from "./icons/FacebookIcon"
import GithubIcon from "./icons/GithubIcon"

function Header() {
   return (
      <div className="sticky top-0 flex items-center justify-between border-b border-gray-300 px-2 backdrop-blur">
         <p className="my-4 flex-[2] font-bold text-slate-500">dinoh__sandys</p>
         <div className="my-4 flex items-center gap-4">
            <button className="rounded p-1 ring-1 ring-gray-300 transition-colors hover:bg-slate-200 hover:text-slate-900">
               <a target="_blank" href="https://github.com/DinohRatiarisandy">
                  <GithubIcon size={18} title="GitHub" />
               </a>
            </button>
            <button className="rounded p-1 ring-1 ring-gray-300 transition-colors hover:bg-slate-200 hover:text-slate-900">
               <a target="_blank" href="https://facebook.com/ratiarisandy">
                  <FacebookIcon size={18} title="Facebook" />
               </a>
            </button>
         </div>
      </div>
   )
}

export default Header
