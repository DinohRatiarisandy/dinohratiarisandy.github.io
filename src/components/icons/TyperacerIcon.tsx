import TRImage from "../../assets/icon/typeracer-icon.png"
import { IconTypeProps } from "./iconTypeProps"

function TyperacerIcon(props: IconTypeProps) {
   return (
      <img src={TRImage} alt={props.title} className="h-12 object-contain" />
   )
}

export default TyperacerIcon
