import PropTypes from "prop-types"
import React from "react"

import { ContainerButton } from "./style"

export function Button({ children }) {
  return <ContainerButton>{children}</ContainerButton>
}

Button.propTypes = {
  children: PropTypes.string,
}
