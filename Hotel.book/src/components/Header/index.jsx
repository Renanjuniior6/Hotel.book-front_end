import { Heart, User } from "@phosphor-icons/react"
import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router"

import { useUser } from "../../hooks/UserContext"
import { Logo } from "../Logo"
import { Modal } from "../Modal"
import {
  Container,
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
          <Logo />
          <Links onClick={() => navigate("/")} isactive={pathname === "/"}>
            Home
          </Links>
          <Links
            onClick={() => navigate("/hotels")}
            isactive={pathname === "/hotels"}
          >
            Hotéis
          </Links>
        </ContainerLeft>

        <ContainerRight>
          <a onClick={() => navigate("/favoritos")}>
            <div className="icon">
              {" "}
              <Heart
                size={22}
                weight="fill"
                style={{ marginRight: "0.625rem" }}
              />
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
                  <User size={23} style={{ marginRight: "0.625rem" }} />
                  <UserName>Olá, {userData.name}!</UserName>
                </Group>
              </Border>
              <Logout onClick={() => setModal(true)}>Sair</Logout>
            </>
          ) : (
            <ProfileButton onClick={() => navigate("/cadastro")}>
              <div className="icon">
                {" "}
                <User size={20} style={{ marginRight: "0.625rem" }} />
                Entrar
              </div>
            </ProfileButton>
          )}
        </ContainerRight>
      </Container>
    </>
  )
}
