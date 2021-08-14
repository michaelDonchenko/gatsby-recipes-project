import React, { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Hero, HeroText, StyledH1, StyledH3 } from "../styles/home"
import Primary from "../components/buttons/primary"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Index = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  )

  const handleResize = () => {
    setWidth(typeof window !== "undefined" && window.innerWidth)
  }

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize)

    return () =>
      typeof window !== "undefined" &&
      window.removeEventListener("resize", handleResize)
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
