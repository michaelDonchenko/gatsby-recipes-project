import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FlexWrapDiv, RecipeDiv, StyledText } from "../../styles/recipes"

const RecipesList = ({ recipes = [] }) => {
  return recipes.length === 0 ? (
    <p>No recipes found</p>
  ) : (
    <FlexWrapDiv>
      {recipes?.map(recipe => {
        const { id, title, image, cookTime, prepTime } = recipe
        return (
          <Link
            to={`/${title}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <RecipeDiv key={id}>
              <GatsbyImage alt={title} image={image?.gatsbyImageData} />
              <h3>{title}</h3>
              <StyledText color="gray">{`Cook time: ${cookTime}min | Prep time: ${prepTime}min`}</StyledText>
            </RecipeDiv>
          </Link>
        )
      })}
    </FlexWrapDiv>
  )
}

export default RecipesList
