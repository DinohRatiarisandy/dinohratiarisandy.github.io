import Card from "./Card"
import WorkCard from "./WorkCard"

const WORKS = [
   {
      entrepriseImage: "src/assets/profile/my-profile.jpeg",
      entrepriseName: "METFP",
      entrepriseWebsite: "/",
      myPost: "developer REACTJS",
      year: "2021",
   },
   {
      entrepriseImage: "src/assets/profile/my-profile.jpeg",
      entrepriseName: "Syscomad",
      entrepriseWebsite: "/",
      myPost: "developer Odoo",
      year: "2024",
   },
]

function Works() {
   return (
      <div>
         <Card title="Works">
            {WORKS.map(function (work) {
               return <WorkCard key={work.entrepriseName} {...work} />
            })}
         </Card>
      </div>
   )
}

export default Works
