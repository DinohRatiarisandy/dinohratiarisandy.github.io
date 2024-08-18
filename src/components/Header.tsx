import SocialNetwork from "./SocialNetwork"

function Header() {
   return (
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-400/20 px-2 backdrop-blur">
         <p className="my-4 flex-[2] font-bold text-slate-400">dinoh__sandys</p>
         <SocialNetwork />
      </div>
   )
}

export default Header
