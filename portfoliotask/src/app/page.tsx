import Image from 'next/image'
import Mynavbar from './components/mynavbar'
import Herosection from './components/herosection'
import Aboutme from './components/aboutme'
import ContactForm from './components/contactForm'

export default function Home() {
  return (
   <>
   <div > portfolio website
   <Mynavbar/>
   <Herosection/>
   <Aboutme/>
  <ContactForm/>
  </div>
   </>
  )
}
