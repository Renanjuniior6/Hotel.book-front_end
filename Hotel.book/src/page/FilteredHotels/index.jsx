import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"

import CardHotels from "../../components/CardHotels"
import { Header } from "../../components/Header"
import { useUser } from "../../hooks/UserContext"
import api from "../../services/api"
import { Container, Empty } from "./styles"

function FilteredHotels() {
  const [filteredHotels, setFilteredHotels] = useState([])
  const { SearchData } = useUser()

  toast.clearWaitingQueue()

  useEffect(() => {
    async function loadLotels() {
      const { data } = await toast.promise(api.get("/hotels"), {
        pending: "Carregando",
        error: "Não foi possível carregar",
      })

      if (SearchData) {
        console.log("Oi, estou aqui")
        const result = data.filter(
          (item) =>
            item.city.name === SearchData.city &&
            item.rooms === SearchData.rooms &&
            item.price <= SearchData.price,
        )
        setFilteredHotels(result)
      }
    }
    loadLotels()
  }, [])

  return (
    <>
      <Header />
      <Container>
        {filteredHotels && filteredHotels.length > 0 ? (
          filteredHotels.map((item) => (
            <CardHotels key={item.id} hotel={item} />
          ))
        ) : (
          <Empty>
            <p>Sem resultados para a sua busca :(</p>
          </Empty>
        )}
      </Container>
    </>
  )
}

export default FilteredHotels
