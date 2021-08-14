import React, { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ColumnDiv, Main, StyledText, StyledH1 } from "../styles/about"
import Primary from "../components/buttons/primary"
import SEO from "../components/SEO"

const About = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Layout>
      <SEO title="About page" />
      <Main width={width}>
        <ColumnDiv width={width}>
          <StyledH1>About us</StyledH1>

          <StyledText>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </StyledText>
          <StyledText>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </StyledText>

          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Primary text={"Contact"} />
          </Link>
        </ColumnDiv>

        <ColumnDiv width={width}>
          <StaticImage
            src="../images/about-img.jpg"
            placeholder="blurred"
            alt="about"
            style={{ borderRadius: "8px" }}
          />
        </ColumnDiv>
      </Main>
    </Layout>
  )
}

export default About
