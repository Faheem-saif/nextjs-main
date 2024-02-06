import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from '../_child/author'

function Section2() {
  return (
  <section className='container mx-auto md:px-20 py-20'>
    <h1 className='font-bold text-4xl py-12 text-center'>Latest Post</h1>
  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
   
   {Post()}
   {Post()}
   {Post()}
   {Post()}
   {Post()}
   {Post()}
  </div>
  </section>
  )
}

export default Section2;


function Post() {

return(
  <div className='item'>
    <div className="image">
    <Link legacyBehavior href={"#"}><a>
            <Image className='rounded' src={"/images/img1.jpg"} width={500} height={350} alt='heroimage'></Image></a></Link>
    </div>
    <div className="title flex justify-center flex-col py-4">
    <div className="dtae ">
            <Link  legacyBehavior href={"/"}><a className='text-orange-500 hover:text-orange-600  '>
           Business, Travel</a></Link>  
            <Link  legacyBehavior href={"/"}><a className='text-gray-500 hover:text-gray-600  '>
           -July 20,2023</a></Link>  
            </div>
            <div className='title'>
            <Link  legacyBehavior href={"/"}><a className='text-xl  font-bold text-gray-700 hover:text-gray-900 '>
                   Your most Unhappy customers are your greatest source of learning</a></Link>  

            </div>
            <p className='text-gray-500  py-3'>
            Your most Unhappy customers are your greatest source of learning. So review your product for the intense cure of that thingn and this will elevate your intance of learning .Your most Unhappy customers are your greatest source of learning.
            </p>
                <Author/>
    </div>

  </div>
)
}