import {
  HeartStraight,
  MapPin,
  Ruler,
  Bed,
  Bathtub,
  Car,
  PawPrint,
  Couch,
  Subway,
} from "@phosphor-icons/react"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

import { Button } from "../../components/Button"
import Calendario from "../../components/Calendar"
import { Header } from "../../components/Header"
import { useFavorite } from "../../hooks/FavoriteContext"
import api from "../../services/api"
import { formatCurrency } from "../../utils/formatCurrency"
import {
  Container,
  DetailsGroup,
  Content,
  ImageBox,
  Info,
  Total,
  Content2,
  LeftBox,
  RightBox,
  Group,
  Map,
  IconsGroup,
  TotalValue,
} from "./styles"

function DetailHotel() {
  const [hotel, setHotel] = useState([])
  const [value, setValue] = useState()
  const { id } = useParams()
  const { putInFavorites } = useFavorite()

  const hotelId = parseInt(id)

  toast.clearWaitingQueue()

  useEffect(() => {
    async function loadHotels() {
      const { data } = await toast.promise(api.get("hotels"), {
        pending: "Carregando",
        error: "Erro ao carregar",
      })

      const valor = data.filter((item) => item.id === hotelId)

      setHotel(valor)
    }

    loadHotels()
  }, [])

  function isActive(fill) {
    if (fill === value) {
      setValue("regular")
    } else {
      setValue(fill)
    }
  }

  setTimeout(() => {
    const favoriteInfo = localStorage.getItem("hotelbook:favoriteInfo")

    const index = hotel.findIndex((item) => item.id === hotelId)

    const hotelInfo = hotel[index]

    if (favoriteInfo.includes(`"name":"${hotelInfo.name}"`)) {
      setValue("fill")
    } else {
      setValue("regular")
    }
  }, 200)

  return (
    <>
      <Header />
      <Container key={hotelId}>
        {hotel &&
          hotel.map((item) => (
            <>
              <Content key={item.id}>
                <DetailsGroup>
                  <Info>
                    <h1>{item.name}</h1>
                    <p>{item.squareMeters}m²</p>
                    <p>
                      {" "}
                      {item.rooms > 1
                        ? `${item.rooms} quartos`
                        : `${item.rooms} quarto`}
                    </p>
                  </Info>
                  <Total>
                    <h3>Aluguel: {formatCurrency(item.price)}</h3>
                  </Total>
                </DetailsGroup>
                <ImageBox>
                  <div
                    onClick={() => {
                      isActive("fill")
                      putInFavorites(item, "fill")
                    }}
                  >
                    <HeartStraight className="Heart" size={32} weight={value} />
                  </div>
                  <img src={item.url} />
                </ImageBox>
              </Content>
              <Content2>
                <LeftBox>
                  <Group>
                    <Map>
                      <div>
                        <span>
                          {item.city.name} <MapPin weight="fill" size={32} />
                        </span>
                      </div>
                    </Map>
                    <IconsGroup>
                      <span>
                        <Ruler size={32} /> {item.squareMeters}m²
                      </span>
                      <span>
                        <Bed size={32} />{" "}
                        {item.rooms > 1
                          ? `${item.rooms} quartos`
                          : `${item.rooms} quarto`}
                      </span>
                      <span>
                        <Bathtub size={32} />{" "}
                        {item.bathroom ? "Banheiro" : "Sem banheiro"}
                      </span>
                      <span>
                        <Car size={32} /> {item.garage ? "Garagem" : "-"}
                      </span>
                      <span>
                        <PawPrint size={32} />{" "}
                        {item.pets ? "Aceita" : "Não aceita"}
                      </span>
                      <span>
                        <Couch size={32} />{" "}
                        {item.furniture ? "Mobiliado" : "Não mobiliado"}{" "}
                      </span>
                      <span>
                        <Subway size={32} />{" "}
                        {item.nearMetro ? "Metro próx." : "-"}
                      </span>
                    </IconsGroup>
                  </Group>
                </LeftBox>
                <Calendario />
                <RightBox>
                  <div className="container">
                    <p className="rent">Aluguel:</p>
                    <p className="rent-price">{formatCurrency(item.price)}</p>
                    <p className="serviceTax">Taxa de Serviço: </p>
                    <p className="serviceTax-price">
                      {formatCurrency(item.serviceTax)}
                    </p>
                    <p className="fireEnsurance">Seguro Incêndio: </p>
                    <p className="fireEnsurance-price">
                      {formatCurrency(item.fireEnsurance)}
                    </p>
                  </div>
                  <TotalValue>
                    <hr />
                    <div>
                      <h3>Total:</h3>
                      <p>
                        {formatCurrency(
                          item.price + item.serviceTax + item.fireEnsurance,
                        )}
                      </p>
                    </div>
                    <Button>Alugar Hospedagem</Button>
                  </TotalValue>
                </RightBox>
              </Content2>
            </>
          ))}
      </Container>
    </>
  )
}

export default DetailHotel
