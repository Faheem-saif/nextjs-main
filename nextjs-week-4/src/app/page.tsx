import Image from 'next/image'
import Cardheading from './components/cardheading'
import Carddescription from './components/carddescription'
import Cardcomp from './components/cardcomp'

export default function Home() {

   let description:string= "This is the description of of card that is created by sending Data parent to child by the Props and the secon twill be proper us e of utils files"
  return (<>
   <h1>Props and Component Practice</h1>
      <div className='card'>
  
     <div className='bgcover'>
     


    <Cardcomp name="Website development" description={description}/>
    
   
    
     </div>
     <div className='bgcover'>
    <Cardcomp name="Blockchain Development" description={description}/>
     </div>
     <div className='bgcover'>
 <Cardcomp name="Metaverse development " description={description}/>
     </div>
     <div className='bgcover'>
   <Cardcomp name="Graphic designing " description={description}/>

     </div>
     <div className='bgcover'>
   <Cardcomp name="Graphic designing " description={description}/>

     </div>
     </div>
     </>
  )
}
