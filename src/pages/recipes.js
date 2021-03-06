import React, { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import RecipesQuery from "../graphql/RecipesQuery"
import RecipesList from "../components/recipes/RecipesList"
import TagsList from "../components/recipes/TagsList"
import { Main, StyledH1, RecipesDiv, TagsDiv } from "../styles/recipes"
import SEO from "../components/SEO"

const Recipes = () => {
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

  const {
    allContentfulRecipe: { nodes: recipes },
  } = RecipesQuery()

  return (
    <Layout>
      <SEO title="Recipes page" />

      <StyledH1>All Recipes</StyledH1>
      <Main width={width}>
        <TagsDiv width={width}>
          <TagsList recipes={recipes} />
        </TagsDiv>

        <RecipesDiv width={width}>
          <RecipesList recipes={recipes} />
        </RecipesDiv>
      </Main>
    </Layout>
  )
}

export default Recipes
