import styled from "styled-components"
import { css } from "styled-components"

export const Main = styled.div`
  display: flex;
  flex-direction: ${props => (props.width > 800 ? "row" : "column")};
  ${props =>
    props.width < 800 &&
    css`
      justify-content: center;
    `}
`

export const StyledH1 = styled.h1`
  text-align: center;
  font-weight: 600;
  margin-bottom: 1.2rem;
`

export const ColumnDiv = styled.div`
  width: ${props => (props.width > 800 ? "50%" : "100%")};
  padding: 1rem 0.8rem;
`

export const StyledText = styled.p`
  font-size: 16px;
  text-align: center;
  color: black;
`
