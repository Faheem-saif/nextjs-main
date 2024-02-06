import Image from 'next/image'
import React from 'react'

export default function DisplayBlog() {
  return (
  <section >
  <h1 className=' flex justify-center items-cente font-extrabold text-yellow-600 text-4xl m-2 p-3 '>Blogs </h1>
  <div  className='flex'>
    {blogsgrid("img2")}
    {blogsgrid("img1")}
    {blogsgrid("img2")}
    
    </div>
  </section>
  )
}


const blogsgrid=(image:any) => {
return( 
<div className='flex flex-col m-2 p-2 border-4 border-purple-950 bg-purple-300 rounded-3xl justify-center items-center'>
<Image className='bg-red-700  rounded-3xl' width={300} height={200} src={`/images/${image}.jpg`} alt='noImage'/>
<h1 className=' font-bold text-2xl text-orange-700 flex justify-center'>Title of the Blog</h1>
<p className='text-xl '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, amet ab dolor id mollitia reprehenderit?</p>
</div>
)
}