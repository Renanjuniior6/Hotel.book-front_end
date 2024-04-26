import PropTypes from "prop-types"
import React from "react"
import { useNavigate } from "react-router-dom"

import { useUser } from "../../hooks/UserContext"
import { Button } from "../Button"
import { Container, Content, BoxButton } from "./styles"

function Modal({ setModal }) {
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
          <Button className="btn" onClick={() => logoutUser()}>
            Sim
          </Button>
          <Button onClick={() => setModal(false)}>Não</Button>
        </BoxButton>
      </Content>
    </Container>
  )
}

export default Modal

Modal.propTypes = {
  setModal: PropTypes.bool,
}
