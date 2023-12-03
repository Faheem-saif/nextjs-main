import { cardheadprops } from "../../../utils/cardheadprops";



export default function Cardheading(props:cardheadprops) {
  return (
    <div style={{textAlign:"center"}}>
     <h1>{props.name}</h1> 
    </div>
  )
}
