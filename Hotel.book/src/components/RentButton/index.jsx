import PropTypes from "prop-types"
import React from "react"
import { useNavigate } from "react-router-dom"

import { Container } from "./styles"

export function RentButton({ children, ...rest }) {
  const navigate = useNavigate()
  return (
    <Container onClick={() => navigate("/hotels")} {...rest}>
      {children}
    </Container>
  )
}

RentButton.propTypes = {
  children: PropTypes.string,
}
