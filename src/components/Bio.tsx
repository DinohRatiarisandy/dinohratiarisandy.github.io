import myProfileImg from "../assets/profile/my-profile.jpeg"

function Bio() {
   return (
      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
         <section className="about-me flex flex-col gap-2">
            <div>
               <h1 className="text-3xl text-slate-200">Dinoh Ratiarisandy</h1>
               <h2 className="text-xl text-slate-200">
                  Software developer and Game developer
               </h2>
            </div>
            <article className="text-lg leading-6 text-slate-400">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
               distinctio vitae architecto, explicabo omnis consequuntur illo
               perspiciatis provident, quae, reprehenderit nobis sunt aliquam
               debitis labore id iure numquam ducimus? Vero.
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
