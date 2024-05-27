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
  Building,
} from "@phosphor-icons/react"
import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { Button, Calendario, Header, OfferSlider } from "../../components"
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

export function DetailHotel() {
  const [hotel, setHotel] = useState([])
  const [value, setValue] = useState()
  const { id } = useParams()
  const { putInFavorites } = useFavorite()

  const hotelId = parseInt(id)
  const navigate = useNavigate()

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
    const user = localStorage.getItem("hotelbook:userData")

    if (!user) {
      navigate("/login")
    } else if (fill === value) {
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

  const showToast = () => {
    toast.success("Agendamento efetuado!", { autoClose: 2000 })
  }

  return (
    <Container>
      <Header />
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
                  <h3>
                    Aluguel:{" "}
                    {item.offer
                      ? formatCurrency(item.offerPrice)
                      : formatCurrency(item.price)}
                  </h3>
                  {item.offer ? (
                    <h4>Aluguel: {formatCurrency(item.price)}</h4>
                  ) : (
                    ""
                  )}
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
                      {item.bathroom && item.bathroom > 1
                        ? `${item.bathroom} Banheiros`
                        : `${item.bathroom} Banheiro`}
                    </span>
                    <span>
                      <Car size={32} /> {item.garage ? "Garagem" : "Não possui"}
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
                      <Subway size={32} />
                      {item.nearMetro ? "Metro próx." : "Não possui"}
                    </span>
                    <span>
                      <Building size={32} />{" "}
                      {item.floor ? `Até ${item.floor}º andar` : "Não possui"}
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
                  <Button onClick={() => showToast()}>
                    Agendar Hospedagem
                  </Button>
                </TotalValue>
              </RightBox>
            </Content2>
            <OfferSlider />
          </>
        ))}
    </Container>
  )
}
