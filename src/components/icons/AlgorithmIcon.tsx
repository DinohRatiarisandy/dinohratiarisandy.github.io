import { IconTypeProps } from "./iconTypeProps"

function AlgorithmIcon(props: IconTypeProps) {
   return (
      <svg
         viewBox="0 0 60 60"
         stroke-width="1"
         stroke="currentColor"
         fill="currentColor"
         width={props.size}
         height={props.size}
      >
         <title>{props.title}</title>
         <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
         <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
         ></g>
         <g id="SVGRepo_iconCarrier">
            <circle cx="34.52" cy="11.43" r="5.82"></circle>
            <circle cx="53.63" cy="31.6" r="5.82"></circle>
            <circle cx="34.52" cy="50.57" r="5.82"></circle>
            <circle cx="15.16" cy="42.03" r="5.82"></circle>
            <circle cx="15.16" cy="19.27" r="5.82"></circle>
            <circle cx="34.51" cy="29.27" r="4.7"></circle>
            <line x1="20.17" y1="16.3" x2="28.9" y2="12.93"></line>
            <line x1="38.6" y1="15.59" x2="49.48" y2="27.52"></line>
            <line x1="50.07" y1="36.2" x2="38.67" y2="46.49"></line>
            <line x1="18.36" y1="24.13" x2="30.91" y2="46.01"></line>
            <line x1="20.31" y1="44.74" x2="28.7" y2="48.63"></line>
            <line x1="17.34" y1="36.63" x2="31.37" y2="16.32"></line>
            <line x1="20.52" y1="21.55" x2="30.34" y2="27.1"></line>
            <line x1="39.22" y1="29.8" x2="47.81" y2="30.45"></line>
            <line x1="34.51" y1="33.98" x2="34.52" y2="44.74"></line>
         </g>
      </svg>
   )
}

export default AlgorithmIcon