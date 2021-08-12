import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  box-shadow: 0px 10px 14px -7px #276873;
  background: rgb(0, 102, 204);
  background-color: rgb(0, 102, 204);
  border-radius: 8px;
  display: block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 0.8rem;
  width: 300px;
  max-width: 95%;
  margin: 1rem auto;
  text-align: center;
  text-shadow: 0px 1px 0px #3d768a;
  &:hover {
    background-color: rgb(0, 64, 128);
  }
`

const Primary = ({ text }) => {
  return <StyledButton>{text}</StyledButton>
}

export default Primary
