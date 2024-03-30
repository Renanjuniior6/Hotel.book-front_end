import React, { useEffect, useState } from "react"

import CardHotels from "../../components/CardHotels"
import api from "../../services/api"
import { Container } from "./styles"

function Hotels() {
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    async function loadLotels() {
      const { data } = await api.get("/hotels")

      setHotels(data)
    }

    loadLotels()
  }, [])

  console.log(hotels)

  return (
    <Container>
      {hotels &&
        hotels.map((hotel) => <CardHotels key={hotel.id} hotel={hotel} />)}
    </Container>
  )
}

export default Hotels
