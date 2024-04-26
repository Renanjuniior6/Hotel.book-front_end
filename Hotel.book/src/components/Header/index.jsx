import { Heart, User } from "@phosphor-icons/react"
import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router"

import { useUser } from "../../hooks/UserContext"
import { Modal } from "../Modal"
import {
  Container,
  Title,
  ContainerLeft,
  ContainerRight,
  Links,
  ProfileButton,
  UserName,
  Group,
  Logout,
  Border,
  About,
} from "./style"

export function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { userData } = useUser()
  const [modal, setModal] = useState(false)

  return (
    <>
      {modal === true && <Modal setModal={setModal} />}
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
          <a onClick={() => navigate("/favoritos")}>
            <div className="icon">
              {" "}
              <Heart size={22} weight="fill" style={{ marginRight: 10 }} />
              Favoritos
            </div>
          </a>
          <About>
            <a href="#down">Sobre</a>
          </About>

          {userData && userData.name ? (
            <>
              <Border>
                <Group>
                  <User size={23} style={{ marginRight: 10 }} />
                  <UserName>Olá, {userData.name}!</UserName>
                </Group>
              </Border>
              <Logout onClick={() => setModal(true)}>Sair</Logout>
            </>
          ) : (
            <ProfileButton onClick={() => navigate("/cadastro")}>
              <div className="icon">
                {" "}
                <User size={20} style={{ marginRight: 10 }} />
                Entrar
              </div>
            </ProfileButton>
          )}
        </ContainerRight>
      </Container>
    </>
  )
}
