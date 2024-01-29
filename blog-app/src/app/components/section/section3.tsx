import React from 'react'
import Image from "next/image"
export default function Section3() {
  return (

  <section>
  =<h1 className=' flex justify-center items-cente font-extrabold text-yellow-600 text-4xl m-2 p-3'>Blogs </h1>
  <div  className='flex'>
    {bloglatest("img2")}
    {bloglatest("img2")}
    {bloglatest("img1")}
    
    </div>
    </section>
  )
}
   
const bloglatest=(image) => {
  return( 
  <div className='flex flex-col  m-2 p-2'>
  <Image className='bg-red-700 ' width={300} height={200} src={`/images/${image}.jpg`} alt='noImage'/>
  <h1 className=' font-bold text-2xl text-orange-700 flex justify-center'>Title of the Blog</h1>
  <p className='text-xl '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, amet ab dolor id mollitia reprehenderit?</p>
  </div>
  )
  }