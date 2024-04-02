import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { useNavigate, useLocation } from "react-router"

import { Container, Title, ContainerLeft, ContainerRight, Links } from "./style"

function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Container>
      <ContainerLeft>
        <Title>
          <b>H</b>otel.Book
        </Title>

        <Links onClick={() => navigate("/")} isActive={pathname === "/"}>
          Home
        </Links>
        <Links
          onClick={() => navigate("/hotels")}
          isActive={pathname === "/hotels"}
        >
          Hotéis
        </Links>
      </ContainerLeft>

      <ContainerRight>
        <a>
          {" "}
          <FontAwesomeIcon style={{ marginRight: 10 }} icon={faHeart} />
          Favoritos
        </a>
        <a>Sobre</a>

        <button>
          {" "}
          <FontAwesomeIcon style={{ marginRight: 10 }} icon={faUser} />
          Entrar
        </button>
      </ContainerRight>
    </Container>
  )
}

export default Header