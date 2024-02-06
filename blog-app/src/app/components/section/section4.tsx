'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Author from '../_child/author';
function Section4() {
  return (
  <section className='container mx-ato md:px-20 py-20'>
    <div className='grid lg:grid-cols-2 '>
        <div className='item'>

        <h1 className='font-bold text-4xl py-12 '>Business</h1>
        <div className='flex flex-col gap-6'>
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
        </div>

        </div> 
    
        <div className='item'>
        <h1 className='font-bold text-4xl py-12 '>Travel</h1>
        <div className='flex flex-col gap-6'>
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
        </div>

            </div> 
    
    
    </div>
  </section>
  )
}

export default Section4;


function Post(){

 return(
    <div className='flex gap-5'>
        <div className='flex flex-col justify-start '>
        <Link legacyBehavior href={"#"}><a>
              <Image  src={"/images/img1.jpg"} width={300} height={250} className='rounded' alt='heroimage'></Image></a></Link>
        </div>
        <div className='info flex justify-center  flex-col'>
        <div className="dtae ">
              <Link  legacyBehavior href={"/"}><a className='text-orange-500 hover:text-orange-600  '>
             Business, Travel</a></Link>  
              <Link  legacyBehavior href={"/"}><a className='text-gray-500 hover:text-gray-600  '>
             -July 20,2023</a></Link>  
              </div>
              <div className='title'>
              <Link  legacyBehavior href={"/"}><a className='text-xl   font-bold text-gray-700 hover:text-gray-900 '>
                     Your most Unhappy customers are your greatest source of learning</a></Link>  
  
              </div>
              <Author/>
        </div>
       
    </div>
 )
}
