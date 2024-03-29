'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Author from '../_child/author';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{} from 'swiper';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function HeroSection() {
 SwiperCore.use([Autoplay])
 const bg={
  background:"url('/images/banner.png') no-repeat",
  backgroundPosition:"right"
 }
  return (
 
   <section className='py-16' style={bg}>
      <div className=' container mx-auto md:px-20 '> 
            <h1 className='text-center text-4xl pb-12 font-bold '> Trending</h1>
     <Swiper
      
      slidesPerView={1}
      autoplay={{
        delay:2000
      }}
        >
     <SwiperSlide>
     {slides()}
     </SwiperSlide>
     <SwiperSlide>
     {slides()}
     </SwiperSlide>
     <SwiperSlide>
     {slides()}
     </SwiperSlide>
     <SwiperSlide>
     {slides()}
     </SwiperSlide>
     <SwiperSlide>
     {slides()}
     </SwiperSlide>
     <SwiperSlide>
     {slides()}
     </SwiperSlide>
     <SwiperSlide>
     {slides()}
     </SwiperSlide>
     <SwiperSlide>
     {slides()}
     </SwiperSlide>
     <SwiperSlide>
     {slides()}
     </SwiperSlide>
     <SwiperSlide>
     {slides()}
     </SwiperSlide>
     </Swiper>
      

      </div>

   </section>
  
  )
  }

export default HeroSection;





function slides() {
  return (
   <div className='grid md: grid-cols-2'>
      <div className="image">
            <Link legacyBehavior href={"#"}><a>
            <Image src={"/images/img1.jpg"} width={600} height={600} alt='heroimage'></Image></a></Link>
     
      </div>
      <div className='info flex justify-center flex-col'>
            <div className="dtae ">
            <Link  legacyBehavior href={"/"}><a className='text-orange-500 hover:text-orange-600  '>
           Business, Travel</a></Link>  
            <Link  legacyBehavior href={"/"}><a className='text-gray-500 hover:text-gray-600  '>
           -July 20,2023</a></Link>  
            </div>
            <div className='title'>
            <Link  legacyBehavior href={"/"}><a className='text-3xl md:text-6xl font-bold text-gray-700 hover:text-gray-900 '>
                   Your most Unhappy customers are your greatest source of learning</a></Link>  

            </div>
            <p className='text-gray-500 text-3xl py-3'>
            Your most Unhappy customers are your greatest source of learning. So review your product for the intense cure of that thingn and this will elevate your intance of learning .Your most Unhappy customers are your greatest source of learning.
            </p>
                <Author/>

               
      </div>



   </div>
  )
}
