import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"

import { CardHotels, Header } from "../../components"
import api from "../../services/api"
import { Container } from "./styles"

export function Hotels() {
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
          hotels.map((item) => <CardHotels key={item.id} hotel={item} />)}
      </Container>
    </>
  )
}
