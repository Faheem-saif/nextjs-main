import Image from 'next/image'
import Mynavbar from './components/mynavbar'
import Herosection from './components/herosection'
import Aboutme from './components/aboutme'
import ContactForm from './components/contactForm'

export default function Home() {
  return (
   <>
   <div className={`flex w-full items-center bg-white dark:bg-dark`}> portfolio website
   <Mynavbar/>
   <Herosection/>
   <Aboutme/>
  <ContactForm/>
  </div>
   </>
  )
}
