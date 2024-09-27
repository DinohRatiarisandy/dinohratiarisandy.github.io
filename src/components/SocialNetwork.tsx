import GithubIcon from "./icons/GithubIcon"
import FacebookIcon from "./icons/FacebookIcon"
import LinkedInIcon from "./icons/LinkedInIcon"

function SocialNetwork() {
   return (
      <div className="flex items-center gap-2">
         <button className="rounded p-1 ring-1 ring-slate-900/20 transition-colors hover:bg-slate-500/20 hover:text-slate-900 dark:ring-gray-800">
            <a
               target="_blank"
               href="https://www.linkedin.com/in/dinoh-ratiarisandy/"
            >
               <LinkedInIcon size={18} title="Linkedin" />
            </a>
         </button>
         <button className="rounded p-1 ring-1 ring-slate-900/20 transition-colors hover:bg-slate-500/20 hover:text-slate-800 dark:ring-gray-800">
            <a target="_blank" href="https://github.com/DinohRatiarisandy">
               <GithubIcon size={18} title="GitHub" />
            </a>
         </button>
         <button className="rounded p-1 ring-1 ring-slate-900/20 transition-colors hover:bg-slate-500/20 hover:text-slate-900 dark:ring-gray-800">
            <a target="_blank" href="https://facebook.com/ratiarisandy">
               <FacebookIcon size={18} title="Facebook" />
            </a>
         </button>
      </div>
   )
}

export default SocialNetwork
