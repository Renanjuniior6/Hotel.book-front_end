import { Heart, User } from "@phosphor-icons/react"
import React from "react"
import { useNavigate, useLocation } from "react-router"

import { Container, Title, ContainerLeft, ContainerRight, Links } from "./style"

export function Header() {
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
          <div className="icon">
            {" "}
            <Heart size={20} weight="fill" style={{ marginRight: 10 }} />
            Favoritos
          </div>
        </a>
        <a>Sobre</a>

        <button>
          <div className="icon">
            {" "}
            <User size={20} style={{ marginRight: 10 }} />
            Entrar
          </div>
        </button>
      </ContainerRight>
    </Container>
  )
}
