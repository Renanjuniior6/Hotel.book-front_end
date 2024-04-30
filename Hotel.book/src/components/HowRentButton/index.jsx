import { ArrowRight } from "@phosphor-icons/react"
import PropTypes from "prop-types"
import React from "react"
import { useNavigate } from "react-router-dom"

import { Container } from "./styles"

export function HoWRentButton({ children, ...rest }) {
  const navigate = useNavigate()
  return (
    <Container onClick={() => navigate("/hotels")} {...rest}>
      {children} <ArrowRight size={20} style={{ marginLeft: "0.625rem" }} />
    </Container>
  )
}

HoWRentButton.propTypes = {
  children: PropTypes.string,
}
