import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"

import CardHotels from "../../components/CardHotels"
import { Header } from "../../components/Header"
import { useUser } from "../../hooks/UserContext"
import api from "../../services/api"
import { Container, EmptyBox } from "./styles"

function FilteredHotels() {
  const [filteredHotels, setFilteredHotels] = useState([])
  const [empty, setEmpty] = useState(false)
  const { SearchData } = useUser()

  toast.clearWaitingQueue()

  useEffect(() => {
    async function loadLotels() {
      const { data } = await toast.promise(api.get("/hotels"), {
        pending: "Carregando",
        error: "Não foi possível carregar",
      })
      if (SearchData) {
        const result = data.filter(
          (item) =>
            item.city.name === SearchData.city &&
            item.rooms >= SearchData.rooms &&
            item.price <= SearchData.price,
        )

        if (!result.length > 0) {
          setEmpty(true)
        }
        setFilteredHotels(result)
      }
    }
    loadLotels()
  }, [])

  return (
    <>
      <Header />
      <Container>
        {filteredHotels &&
          filteredHotels.map((item) => (
            <CardHotels key={item.id} hotel={item} />
          ))}
        {empty && (
          <EmptyBox>
            <p>Sem resultados para a sua busca :(</p>
          </EmptyBox>
        )}
      </Container>
    </>
  )
}

export default FilteredHotels
