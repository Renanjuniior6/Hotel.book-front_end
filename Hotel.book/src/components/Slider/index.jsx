import React from "react"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import hotel1 from "../../../images/ht-1.jpeg"
import hotel2 from "../../../images/ht-3.jpeg"
import hotel3 from "../../../images/ht19.jpeg"
import hotel4 from "../../../images/ht20.jpeg"
import { Container } from "./style"

export function Slider() {
  return (
    <Container>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={hotel1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hotel2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hotel3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hotel4} />
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}
