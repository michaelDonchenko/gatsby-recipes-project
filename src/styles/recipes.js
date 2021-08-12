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

export const StyledH3 = styled.h3`
  text-align: center;
  font-weight: 600;
  margin-bottom: 1.2rem;
`

export const RecipesDiv = styled.div`
  width: ${props => (props.width > 800 ? "70%" : "100%")};
  padding: 1rem 0.8rem;
`

export const TagsDiv = styled.div`
  width: ${props => (props.width > 800 ? "30%" : "100%")};
  padding: 1rem 0.8rem;
`

export const StyledText = styled.p`
  margin-top: 0;
  font-size: 16px;
  text-align: center;
  color: ${props => (props.color ? props.color : "black")};
`

export const FlexWrapDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const RecipeDiv = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
