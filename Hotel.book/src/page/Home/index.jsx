import { yupResolver } from "@hookform/resolvers/yup"
import {
  MapPin,
  Money,
  Bed,
  ArrowRight,
  Lightning,
} from "@phosphor-icons/react"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import * as Yup from "yup"

import execWoman from "../../../images/img-executive-woman.webp"
import woman from "../../../images/img-woman-home.webp"
import sofa from "../../../images/sofa-img.png"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { useUser } from "../../hooks/UserContext"
import api from "../../services/api"
import { formatCurrency } from "../../utils/formatCurrency"
import {
  Container,
  SearchBox,
  Title,
  Label,
  Container2,
  BoxPetsImg,
  BoxPets,
  ButtonSeeHotels,
  ButtonHowRentHotel,
  BoxImage,
  BoxBuyHotel,
  Container3,
  Container4,
  Icon,
} from "./styles"

function Home() {
  const { setSearchData } = useUser()
  const navigate = useNavigate()
  const [city, setCity] = useState()

  useEffect(() => {
    const loadCities = async () => {
      const { data } = await api.get("/cities")

      setCity(data)
    }

    loadCities()
  }, [])

  const schema = Yup.object().shape({
    city: Yup.string().required(),
    price: Yup.string().required(),
    rooms: Yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    data.rooms = parseInt(data.rooms)
    const formatedPrice = data.price
    data.price = formatedPrice
      .replace(/,/g, "")
      .replace(/\./g, "")
      .replace(/'R$'/g, "")
      .replace("R$", "")
    data.price = parseInt(data.price)
    data.price = data.price / 100

    setSearchData(data)
    navigate("/filtro-hotéis")
  }

  const prices = [1000, 2000, 3000, 4000, 5000]

  return (
    <>
      <Header />
      <Container>
        <SearchBox noValidate onSubmit={handleSubmit(onSubmit)}>
          <Title>Encontre o Hotel ideal para você </Title>
          <Label>
            <Icon>
              <MapPin size={20} /> Cidade
            </Icon>
            <select {...register("city")}>
              {!city && <option>Manaus</option>}
              {city &&
                city.map((item) => <option key={item.id}>{item.name}</option>)}
            </select>
          </Label>
          <Label>
            <Icon>
              <Money size={20} /> Valor total até
            </Icon>
            <select {...register("price")}>
              {prices.map((item) => (
                <option key={item}>{formatCurrency(item)}</option>
              ))}
            </select>
          </Label>
          <Label>
            <Icon>
              <Bed size={20} /> Quartos
            </Icon>
            <select {...register("rooms")}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </Label>
          <Button type="submit">Buscar Hotéis</Button>
        </SearchBox>
      </Container>

      <Container2>
        <BoxPets>
          <div>
            <h1>Alugar bem, sem complicação e fiador</h1>
            <p>
              Selecione os imóveis do seu jeito, agende visitas online, negocie
              sem intermédios e assine o contrato digitalmente
            </p>
            <ButtonSeeHotels onClick={() => navigate("/hotels")}>
              Ver imóveis para alugar
            </ButtonSeeHotels>
            <ButtonHowRentHotel>
              Como alugar no Hotel.Book{" "}
              <ArrowRight size={20} style={{ marginLeft: 10 }} />
            </ButtonHowRentHotel>
          </div>
          <img src={sofa} />
        </BoxPets>
        <BoxPetsImg>
          <div>
            <h1>Aceita pet</h1>
            <p>
              Pet também é família Imóveis para você levar toda sua família com
              você
            </p>
            <ButtonHowRentHotel>
              Ver imóveis para alugar{" "}
              <ArrowRight size={20} style={{ marginLeft: 30 }} />
            </ButtonHowRentHotel>
          </div>
        </BoxPetsImg>
      </Container2>

      <Container3>
        <BoxImage>
          <div>
            <h1>Sol pra que te quero</h1>
            <p>
              Imóveis com luz natural e que recebem aquele sol gostoso de manhã
            </p>
            <ButtonHowRentHotel>
              Ver imóveis para comprar{" "}
              <ArrowRight size={20} style={{ marginLeft: 30 }} />
            </ButtonHowRentHotel>
          </div>
        </BoxImage>
        <BoxBuyHotel>
          <div>
            <h1>Comprar seu imóvel e ter um cantinho só seu</h1>
            <p>
              Conte com nossos consultores para conseguir as melhores taxas de
              financiamento e tirar todas as suas dúvidas durante todo o
              processo.
            </p>
            <ButtonSeeHotels>Ver imóveis para comprar</ButtonSeeHotels>
            <ButtonHowRentHotel>
              Como comprar no Hotel.Book{" "}
              <ArrowRight size={20} style={{ marginLeft: 18 }} />
            </ButtonHowRentHotel>
          </div>
          <img src={woman} />
        </BoxBuyHotel>
      </Container3>

      <Container4>
        <div className="Box1">
          <hr />
          <p>No Hotel.Book você fecha um negócio rápido.</p>
          <hr />
        </div>
        <div className="Box2">
          <div>
            <p>Fechamos um contrato de aluguel a cada 4 minutos</p>

            <Lightning size={120} weight="fill" style={{ marginLeft: 40 }} />
          </div>

          <div className="LearnMore">
            <ButtonHowRentHotel>
              Saiba Mais <ArrowRight size={20} style={{ marginLeft: 10 }} />
            </ButtonHowRentHotel>
            <img src={execWoman} />
          </div>
        </div>
      </Container4>
    </>
  )
}

export default Home
