import {
  faLocationDot,
  faMoneyBill,
  faBed,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

import { Button } from "../../components/Button"
import { Container, SearchBox, Title, Label } from "./styles"

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
    </>
  )
}

export default Home
