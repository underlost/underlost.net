import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import styles from '@/styles/components/ClientSlider.module.css'

const ClientSlider = () => (
  <div className="clients-list max-w-md" id="clients">
    <Swiper modules={[Autoplay]} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 1000, disableOnInteraction: false }} loop={true}>
      <SwiperSlide className="my-auto image-logo-wrapper">
        <Image src="/images/logos/frs-clipper.png" alt="FRS Clipper" className={`my-auto ${styles.imageLogo}`} width={320} height={58} />
      </SwiperSlide>
      <SwiperSlide className="my-auto image-logo-wrapper">
        <Image src="/images/logos/gettyimages.webp" alt="Getty Images" className={`my-auto ${styles.imageLogo}`} width={250} height={41} />
      </SwiperSlide>
      <SwiperSlide className="my-auto image-logo-wrapper">
        <Image src="/images/logos/graham-and-walker.png" alt="Graham & Walker" className={`my-auto ${styles.imageLogo}`} width={190} height={60} />
      </SwiperSlide>
      <SwiperSlide className="my-auto image-logo-wrapper">
        <Image src="/images/logos/meta.png" alt="Meta" className={`my-auto ${styles.imageLogo}`} width={210} height={42} />
      </SwiperSlide>
      <SwiperSlide className="my-auto image-logo-wrapper">
        <Image src="/images/logos/modernden.png" alt="Modern Den Real Estate & Development" className={`my-auto ${styles.imageLogo}`} width={300} height={50} />
      </SwiperSlide>
      <SwiperSlide className="my-auto image-logo-wrapper">
        <Image src="/images/logos/parks-rec.webp" alt="Seattle Parks & Recreation" className={`my-auto ${styles.imageLogo}`} width={300} height={88} />
      </SwiperSlide>
      <SwiperSlide className="my-auto image-logo-wrapper">
        <Image src="/images/logos/pinterest.webp" alt="Pinterest" className={`my-auto ${styles.imageLogo}`} width={250} height={60} />
      </SwiperSlide>
      <SwiperSlide className="my-auto image-logo-wrapper">
        <Image src="/images/logos/puget-sound-clean-air-agency.png" alt="Puget Sound Clean Air Agency" className={`my-auto ${styles.imageLogo}`} width={150} height={102} />
      </SwiperSlide>
      <SwiperSlide className="my-auto image-logo-wrapper">
        <Image src="/images/logos/watson-adventures.png" alt="Watson Adventures" className={`my-auto ${styles.imageLogo}`} width={350} height={50} />
      </SwiperSlide>
      <SwiperSlide className="my-auto image-logo-wrapper">
        <Image src="/images/logos/williams_kastner.png" alt="Williams Kastner" className={`my-auto ${styles.imageLogo}`} width={310} height={48} />
      </SwiperSlide>
    </Swiper>
  </div>
)

export default ClientSlider
