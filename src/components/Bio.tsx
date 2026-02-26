import Code from "./ui/Code"
import myProfileImg from "../assets/profiles/my-profile.png"

function Bio() {
   return (
      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
         <section className="about-me flex flex-col gap-2">
            <div>
               <h1 className="text-3xl text-slate-800 dark:text-slate-200">
                  Dinoh Ratiarisandy
               </h1>
               <h2 className="text-xl text-slate-700 dark:text-slate-300">
                  Python Developer | Data Analyst | Software Engineer
               </h2>
            </div>
            <article className="mt-4 text-lg leading-7 text-slate-600 dark:text-slate-400">
               I specialize in backend development with <Code>Python</Code>,
               data analysis, and software engineering, while also building
               games using the <Code>Godot Engine</Code>. <br></br>
               With a background in applied computer science and artificial
               intelligence, I focus on designing scalable applications,
               intelligent systems, and interactive game experiences.<br></br>
               Currently, I am working on my SaaS project and actively
               developing my own game. <br></br>
               Based in
               <Code className="mx-1">🇲🇬 Madagascar</Code> (UTC+3).
            </article>
         </section>
         <div className="my-profil avatar m-auto">
            <div className="w-64">
               <img
                  className="rounded-full"
                  src={myProfileImg}
                  alt="Ratiarisandy's profil"
               />
            </div>
         </div>
      </div>
   )
}

export default Bio
