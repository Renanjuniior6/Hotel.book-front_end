import {
  faLocationDot,
  faMoneyBill,
  faBed,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

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
} from "./styles"

function Home() {
  return (
    <>
      <Container>
        <SearchBox>
          <Title>Encontre o Hotel ideal para você </Title>
          <Label>
            <FontAwesomeIcon icon={faLocationDot} /> Cidade
            <select>
              <option>Rio de Janeiro</option>
              <option>São Paulo</option>
              <option>Minas Gerais</option>
              <option>Manaus</option>
            </select>
          </Label>
          <Label>
            <FontAwesomeIcon icon={faMoneyBill} /> Valor total até
            <select>
              <option>R$ 1000,00</option>
              <option>R$ 2000,00</option>
              <option>R$ 3000,00</option>
            </select>
          </Label>
          <Label>
            <FontAwesomeIcon icon={faBed} /> Quartos
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
            <ButtonSeeHotels>Ver imóveis para alugar</ButtonSeeHotels>
            <ButtonHowRentHotel>
              Como alugar no Hotel.Book{" "}
              <FontAwesomeIcon
                style={{ marginLeft: 30, height: 16 }}
                icon={faArrowRight}
              />
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
            <button>
              Ver imóveis para alugar{" "}
              <FontAwesomeIcon
                style={{ marginLeft: 30, height: 16 }}
                icon={faArrowRight}
              />
            </button>
          </div>
        </BoxPetsImg>
      </Container2>
    </>
  )
}

export default Home
