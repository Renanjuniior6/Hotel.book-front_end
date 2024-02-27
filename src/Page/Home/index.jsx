import React from "react"

import { Container, SearchBox, Title, Label } from "./styles"

function Home() {
  return (
    <>
      <Container>
        <SearchBox>
          <Title>Encontre o hotel ideal para você</Title>
          <Label>
            Cidade
            <select>
              <option>Rio de Janeiro</option>
              <option>São Paulo</option>
              <option>Minas Gerais</option>
              <option>Manaus</option>
            </select>
          </Label>
          <Label>
            Valor total até
            <select>
              <option>R$ 1000,00</option>
              <option>R$ 2000,00</option>
              <option>R$ 3000,00</option>
            </select>
          </Label>
          <Label>
            Quartos
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </Label>
        </SearchBox>
      </Container>
    </>
  )
}

export default Home
