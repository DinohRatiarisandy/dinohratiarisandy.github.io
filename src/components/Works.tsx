import Card from "./Card"
import WorkCard from "./WorkCard"
import carImg from "../assets/icon/car-logo.png"
import metfpImg from "../assets/icon/metfp-logo.png"

const WORKS = [
   {
      entrepriseImage: metfpImg,
      entrepriseName: "M.E.T.F.P",
      entrepriseWebsite: "https://www.metfp.gov.mg",
      myPost: "Developer ReactJS",
      year: "2021",
   },
   {
      entrepriseImage: carImg,
      entrepriseName: "Cabinet C.A.R",
      entrepriseWebsite: "http://cartaxaudit.com",
      myPost: "Developer Odoo",
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
