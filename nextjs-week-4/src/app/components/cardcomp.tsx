import React from 'react'
import Carddescription from './carddescription'
import Cardheading from './cardheading'
import { cardcompprops } from '../../../utils/carcompprops'

export default function Cardcomp(props:cardcompprops) {
    let description:string= "This is the description of of card that is created by sending Data parent to child by the Props "
  return (
    <div>
    <Cardheading name={props.name} ></Cardheading>
      <Carddescription description={props.description} 
     ></Carddescription>
    </div>
  )
}
