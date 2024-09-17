import SocialNetwork from "./SocialNetwork"

function Footer() {
   return (
      <div className="mt-8 flex flex-col gap-2 border-t border-slate-900/20 p-2 dark:border-slate-400/20">
         <SocialNetwork />
         <p className="text-sm text-slate-900/70 dark:text-slate-300/50">
            Built with ReactJS ∙ Tailwind and ❤️ by dinoh__sandys
         </p>
      </div>
   )
}

export default Footer
