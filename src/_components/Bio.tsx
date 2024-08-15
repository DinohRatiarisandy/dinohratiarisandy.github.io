function Bio() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 gap-8 mt-8">
      <section className="about-me flex flex-col gap-2">
        <div>
          <h1 className="text-3xl">Dinoh Ratiarisandy</h1>
          <h2 className="text-xl">Software developer and Game developer</h2>
        </div>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum distinctio vitae architecto, explicabo omnis consequuntur illo perspiciatis provident, quae, reprehenderit nobis sunt aliquam debitis labore id iure numquam ducimus? Vero.
        </article>
      </section>
      <div className="my-profil avatar m-auto">
        <div className="w-64 mask mask-hexagon">
          <img src="src/assets/profile/my-profile.jpeg" alt="Ratiarisandy's profil" />
        </div>
      </div>
    </div>
  )
}

export default Bio