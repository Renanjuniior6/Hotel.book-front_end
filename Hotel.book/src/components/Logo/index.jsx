import React from "react"

import { Container } from "./styles"

export function Logo({ ...rest }) {
  return (
    <Container {...rest}>
      <b>H</b>otel.Book
    </Container>
  )
}
