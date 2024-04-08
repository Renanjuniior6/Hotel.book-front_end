import {
  MapPin,
  Money,
  Bed,
  ArrowRight,
  Lightning,
} from "@phosphor-icons/react"
import React from "react"
import { useNavigate } from "react-router"

import execWoman from "../../../images/img-executive-woman.webp"
import woman from "../../../images/img-woman-home.webp"
import sofa from "../../../images/sofa-img.png"
import { Button } from "../../components/Button"
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
  const navigate = useNavigate()

  return (
    <>
      <Container>
        <SearchBox>
          <Title>Encontre o Hotel ideal para você </Title>
          <Label>
            <Icon>
              <MapPin size={20} /> Cidade
            </Icon>
            <select>
              <option>Rio de Janeiro</option>
              <option>São Paulo</option>
              <option>Minas Gerais</option>
              <option>Manaus</option>
            </select>
          </Label>
          <Label>
            <Icon>
              <Money size={20} /> Valor total até
            </Icon>
            <select>
              <option>R$ 1000,00</option>
              <option>R$ 2000,00</option>
              <option>R$ 3000,00</option>
            </select>
          </Label>
          <Label>
            <Icon>
              <Bed size={20} /> Quartos
            </Icon>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </Label>
          <Button>Buscar Hotéis</Button>
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
