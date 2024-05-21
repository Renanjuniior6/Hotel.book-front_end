import React, { useState, useEffect } from "react"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import { CardHotels } from ".."

import api from "../../services/api"
import { Container } from "./style"

export function OfferSlider() {
  const [offer, setOffer] = useState()

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get("/hotels")

      const filteredHotels = data.filter((item) => item.offer === true)

      setOffer(filteredHotels)
    }

    loadOffers()
  }, [])

  return (
    <Container>
      <h2>Hotéis em oferta</h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {offer &&
          offer.map((item) => (
            <SwiperSlide key={item.id}>
              <CardHotels offer={true} hotel={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}
