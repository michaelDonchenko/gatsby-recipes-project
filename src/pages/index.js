import React, { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Hero, HeroText, StyledH1, StyledH3 } from "../styles/home"
import Primary from "../components/buttons/primary"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Index = () => {
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
      <SEO title="Home Page" />
      <Hero>
        <StaticImage
          alt="meat"
          src="../images/hero-img.jpg"
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
