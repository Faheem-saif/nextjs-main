import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function HeroSection() {
  return (
   <section  className='flex p-5 justify-between m-3 '>
     {/* <div className="grid md:grid-cols-2">
            <div className="image">
                  <Link legacyBehavior  href={"/"}><a><Image src={"/images/img1.jpg"} width={600} height={600} alt='Image' /></a></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                      <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                      <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div>
                <div className="title">
                      <Link legacyBehavior  href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <h1>author</h1>
            </div>

        </div> */}
        
         <div>
            <Link href={"#"}>
                  <Image src={"/images/img1.jpg"} width={600} height={600} alt='Hero Image'/>
            </Link>
         </div>
         <div className='items-center justify-center  '>
            <div className='flex gap-3 m-4'>
            <Image className=' rounded-full ' src={"/images/img1.jpg"} width={45} height={45} alt='Hero Image'/>

            <div className='text-red-600 font-extrabold text-xl'>Muhammad Faheem </div>
             </div>
             <div className='m-4 p-3'>
             <div>
                   <h1 className='text-yellow-600 font-extrabold text-2xl' >Heading of the Blog</h1>
             </div>
             <div>
                    <p className='font-xl
                      font-extrabold text-neutral-800 '>Lorem ipsum dolor sit amet consectetur </p>
             </div>
             </div>
        </div>

   </section>
  )
}

export default HeroSection;
