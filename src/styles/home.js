import styled from "styled-components"

export const Hero = styled.header`
  position: relative;

  height: 100%;
`

export const HeroText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  padding: 2rem;
  width: 100%;
  background: rgb(0, 0, 0, 0.4);
  height: 100%;
  border-radius: 8px;
`

export const StyledH1 = styled.h1`
  text-align: center;
  color: white;
  font-size: 4rem;
  font-weight: 700;
`

export const StyledH3 = styled.h3`
  text-align: center;
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
`
