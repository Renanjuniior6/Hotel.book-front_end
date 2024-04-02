import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import api from "../../services/api"
import { Container } from "./styles"

function DetailHotel() {
  const [hotel, setHotel] = useState()
  const { id } = useParams()

  useEffect(() => {
    async function loadHotels() {
      const { data } = await api.get("hotels")

      setHotel(data[id - 3])
    }

    loadHotels()
  }, [])

  console.log(hotel)

  return <Container>{hotel && <p>{hotel.name}</p>}</Container>
}

export default DetailHotel
