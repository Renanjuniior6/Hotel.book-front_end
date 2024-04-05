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

import { Button } from "../../components/Button"
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

  const hotelId = parseInt(id)

  useEffect(() => {
    async function loadHotels() {
      const { data } = await api.get("hotels")

      const value = data.filter((item) => item.id === hotelId)

      setHotel(value)
    }

    loadHotels()
  }, [hotelId])

  function isActive(fill) {
    const value = fill

    setValue(value)
  }

  return (
    <Container>
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
                <div>
                  <HeartStraight
                    weight={value}
                    onClick={() => isActive("fill")}
                    className="Heart"
                    size={32}
                  />
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
  )
}

export default DetailHotel
