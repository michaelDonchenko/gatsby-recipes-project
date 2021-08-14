import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import { StyledH1 } from "../styles/recipes"
import RecipesList from "../components/recipes/RecipesList"
import SEO from "../components/SEO"

const TagTemplate = props => {
  const {
    pageContext: { tag },
  } = props

  return (
    <Layout>
      <SEO title={tag} />
      <StyledH1>{tag}</StyledH1>
      <RecipesList recipes={props.data.allContentfulRecipe.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query getRecipeByTag($tag: String) {
    allContentfulRecipe(filter: { content: { tags: { eq: $tag } } }) {
      nodes {
        image {
          gatsbyImageData(
            placeholder: TRACED_SVG
            layout: CONSTRAINED
            width: 600
          )
        }
        prepTime
        cookTime
        title
        id
      }
    }
  }
`

export default TagTemplate
