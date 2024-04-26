import React from "react"

import { Container, Logo, Text, Rights } from "./styles"

function Footer() {
  return (
    <Container>
      <Logo>
        <b>H</b>otel.Book
      </Logo>
      <Text>
        Este é apenas um projeto-piloto de uma hotelaria fictícia com fins de
        aprendizado. Nenhuma das informações deste site são reais.
      </Text>
      <hr />
      <Rights>
        Copyrights © 2024 Desenvolvido por <b>Renan Junior</b> e{" "}
        <b>Pedro Rafael</b>
      </Rights>
    </Container>
  )
}

export default Footer
