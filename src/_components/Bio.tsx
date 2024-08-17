function Bio() {
   return (
      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
         <section className="about-me flex flex-col gap-2">
            <div>
               <h1 className="text-3xl text-slate-900">Dinoh Ratiarisandy</h1>
               <h2 className="text-xl text-slate-700">
                  Software developer and Game developer
               </h2>
            </div>
            <article className="text-lg leading-6">
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
                  src="src/assets/profile/my-profile.jpeg"
                  alt="Ratiarisandy's profil"
               />
            </div>
         </div>
      </div>
   )
}

export default Bio
