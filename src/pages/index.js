import React, { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Hero, HeroText, StyledH1, StyledH3 } from "../styles/home"
import Primary from "../components/buttons/primary"
import { Link } from "gatsby"
// import SiteMetadata from "../graphql/SiteMetadata"

const Index = () => {
  const [width, setWidth] = useState(window.innerWidth)
  // const { site } = SiteMetadata() //site metadata fetch

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Layout>
      <Hero>
        <StaticImage
          alt="meat"
          src="../images/hero-img.jpg"
          placeholder="blurred"
          layout="fullWidth"
          style={{ borderRadius: "8px" }}
        />

        <HeroText>
          {width > 600 ? (
            <StyledH1>No Fluff</StyledH1>
          ) : (
            <StyledH3>No Fluff</StyledH3>
          )}

          <StyledH3>Just Recipes</StyledH3>
        </HeroText>
      </Hero>

      <Link to="/recipes" style={{ textDecoration: "none" }}>
        <Primary text="Discover Recipes" />
      </Link>
    </Layout>
  )
}

export default Index
