import TRImage from "../../assets/thumbnails/typeracer-icon.png"
import { IconPropsType } from "./icon-props-type"

function TyperacerIcon(props: IconPropsType) {
   return (
      <img src={TRImage} alt={props.title} className="h-12 object-contain" />
   )
}

export default TyperacerIcon
