import Card from "./ui/Card"
import WorkCard from "./WorkCard"
import { WORKS } from "../constants/works"

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
