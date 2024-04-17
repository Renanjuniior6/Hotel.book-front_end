import { MapPin, HeartStraight } from "@phosphor-icons/react"
import React from "react"
import { useNavigate } from "react-router-dom"

import { Header } from "../../components/Header"
import { useFavorite } from "../../hooks/FavoriteContext"
import { formatCurrency } from "../../utils/formatCurrency"
import {
  BoxHotelFavorite,
  Container,
  Info,
  Title,
  Hr,
  Delete,
  Group,
  Empty,
} from "./styles"

function Favorites() {
  const { favoriteHotels, removeFavorite } = useFavorite()

  const navigate = useNavigate()

  const getId = (hotelId) => {
    if (hotelId) {
      navigate(`/detailhotel/${hotelId}`)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Title>
          Favoritos{" "}
          <HeartStraight size={32} style={{ marginLeft: "0.625rem" }} />
        </Title>
        <Hr />
        {favoriteHotels && favoriteHotels.length > 0 ? (
          favoriteHotels.map((item) => (
            <BoxHotelFavorite key={item.id}>
              <Group onClick={() => getId(item.id)}>
                <img src={item.url} />
                <Info>
                  <h1>{item.name}</h1>
                  <p>{formatCurrency(item.price)}</p>
                  <p>
                    {" "}
                    {item.rooms > 1
                      ? `${item.rooms} quartos`
                      : `${item.rooms} quarto`}
                  </p>
                  <p>{item.squareMeters} m²</p>
                  <span>
                    Cidade - {item.city.name} <MapPin weight="fill" size={21} />
                  </span>
                </Info>
              </Group>
              <Delete onClick={() => removeFavorite(item)}>Remover</Delete>
            </BoxHotelFavorite>
          ))
        ) : (
          <Empty>
            <p>Você não possui favoritos :(</p>{" "}
          </Empty>
        )}
      </Container>
    </>
  )
}

export default Favorites
