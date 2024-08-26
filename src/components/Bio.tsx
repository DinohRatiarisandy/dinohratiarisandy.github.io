import myProfileImg from "../assets/profile/my-profile.jpeg"
import Code from "./Code"
import ReactIcon from "./icons/ReactIcon"

function Bio() {
   return (
      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
         <section className="about-me flex flex-col gap-2">
            <div>
               <h1 className="text-3xl text-slate-200">Dinoh Ratiarisandy</h1>
               <h2 className="text-xl text-slate-300">
                  Front-end developer and Game developer
               </h2>
            </div>
            <article className="mt-4 text-lg leading-7 text-slate-400">
               I specialize in front-end development with{" "}
               <Code>
                  <ReactIcon size={18} title="ReactIcon" className="inline" />{" "}
                  ReactJS
               </Code>{" "}
               and am a game development enthusiast using the{" "}
               <Code>Godot Engine</Code>. <br /> I have a background in applied
               computer science and artificial intelligence. Currently, I'm
               working on my SaaS project and my game. I live in
               <Code className="mx-1">🇲🇬 Madagascar</Code>.
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
