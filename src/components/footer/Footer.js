import React from "react"
import { Container, StyledP } from "./styles"

const Footer = () => {
  return (
    <Container>
      <StyledP>
        &copy; {new Date().getFullYear()}, By Michael Donchenko{" "}
      </StyledP>
    </Container>
  )
}

export default Footer
