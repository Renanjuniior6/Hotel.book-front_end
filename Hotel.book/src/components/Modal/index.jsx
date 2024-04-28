import PropTypes from "prop-types"
import React from "react"
import { useNavigate } from "react-router-dom"

import { useUser } from "../../hooks/UserContext"
import { Button } from "../Button"
import { Container, Content, BoxButton } from "./styles"

export function Modal({ setModal }) {
  const { logout } = useUser()
  const navigate = useNavigate()

  const logoutUser = () => {
    logout()
    navigate("/")
    location.reload()
  }
  return (
    <Container onClick={() => setModal(false)}>
      <Content>
        <p>
          Tem certeza que deseja sair? Você perderá todos os dados da sua conta
        </p>
        <BoxButton>
          <Button onClick={() => setModal(false)}>Não</Button>
          <Button className="btn" onClick={() => logoutUser()}>
            Sim
          </Button>
        </BoxButton>
      </Content>
    </Container>
  )
}

Modal.propTypes = {
  setModal: PropTypes.bool,
}
