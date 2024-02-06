import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Author() {
  return (
    <div className='author flex py-5'>
   <Image src={"/images/author/author1.jpg "} alt='Author' width={60} height={60}></Image>
      <div className='flex flex-col px-3'> 
       <Link legacyBehavior href={"/"} ><a className='text-md font-bold text-gray-500'>Flying High</a></Link>
       <span className='text-sm text-gray-500'>Founder and CEO</span>
      </div>
    </div>
  )
}

export default Author;
