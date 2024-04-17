import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"

import CardHotels from "../../components/CardHotels"
import { Header } from "../../components/Header"
import api from "../../services/api"
import { Container } from "./styles"

function Hotels() {
  const [hotels, setHotels] = useState([])

  toast.clearWaitingQueue()

  useEffect(() => {
    async function loadLotels() {
      const { data } = await toast.promise(api.get("/hotels"), {
        pending: "Carregando",
        error: "Não foi possível carregar",
      })

      setHotels(data)
    }

    loadLotels()
  }, [])

  return (
    <>
      <Header />
      <Container>
        {hotels &&
          hotels.map((hotel) => <CardHotels key={hotel.id} hotel={hotel} />)}
      </Container>
    </>
  )
}

export default Hotels
