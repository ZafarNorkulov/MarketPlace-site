import Image from 'next/image'
import React from 'react'
import phone from "../../assets/phone.png"
import clock from "../../assets/clock.png"
import konditsioner from "../../assets/konditsioner.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,  Autoplay, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/swiper-bundle.css"
const Hero = () => {
  return (
    <div className='hero grid grid-cols-12 gap-x-6 mt-12'>
 <div className='col-span-12'>
 <Swiper navigation loop={true}   pagination={true}  modules={[Navigation, Pagination, Autoplay]} >
      <SwiperSlide className='rounded-xl overflow-hidden'>
        <Image src={phone} className='w-full max-h-[500px]' alt='' />
      </SwiperSlide>

      <SwiperSlide className='rounded-xl overflow-hidden'>
        <Image src={clock} className='w-full max-h-[500px]' alt='' />
      </SwiperSlide>

      <SwiperSlide className='rounded-xl overflow-hidden'>
        <Image src={konditsioner} className='w-full max-h-[500px]' alt='' />
      </SwiperSlide>
     </Swiper>
 </div>
    </div>
  )
}

export default Hero
