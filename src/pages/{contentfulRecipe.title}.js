import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import { Grid } from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  StyledH1,
  StyledH3,
  StyledText,
  FlexWrapDiv,
  FlexColumn,
} from "../styles/recipes"
import { BsAlarm, BsPeopleFill } from "react-icons/bs"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const RecipeTemplate = ({ data: { contentfulRecipe: recipe } }) => {
  const {
    title,
    description: { description },
    image,
    cookTime,
    prepTime,
    servings,
    content,
  } = recipe
  const { ingredients, tags, instructions } = content

  const imagePath = getImage(image)

  return (
    <Layout>
      <SEO title={title} />
      <Grid container style={{ margin: "2rem 0" }}>
        <Grid item xs={12} md={6}>
          <GatsbyImage
            image={imagePath}
            alt={title}
            style={{ borderRadius: "8px" }}
          />
        </Grid>

        <Grid item xs={12} md={6} style={{ padding: "1rem" }}>
          <StyledH1>{title}</StyledH1>
          <StyledText>{description}</StyledText>

          <FlexWrapDiv>
            <FlexColumn>
              <BsAlarm style={{ fontSize: "22px", marginBottom: "1rem" }} />
              <StyledText>Prep time</StyledText>
              <StyledText color="gray">{prepTime} min</StyledText>
            </FlexColumn>

            <FlexColumn>
              <BsAlarm style={{ fontSize: "22px", marginBottom: "1rem" }} />
              <StyledText>Coock time</StyledText>
              <StyledText color="gray">{cookTime} min</StyledText>
            </FlexColumn>

            <FlexColumn>
              <BsPeopleFill
                style={{ fontSize: "22px", marginBottom: "1rem" }}
              />
              <StyledText>Servings</StyledText>
              <StyledText color="gray">{servings} people</StyledText>
            </FlexColumn>
          </FlexWrapDiv>

          <div>
            <span>Tags:</span>
            {tags.map((tag, i) => (
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  margin: "0 0.4rem",
                }}
                to={`/${tag}`}
                key={i}
              >
                {tag},
              </Link>
            ))}
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sm={12} md={6}>
          <StyledH1>Instructions</StyledH1>
          {instructions.map((item, i) => {
            return (
              <div key={i}>
                <StyledH3>Step {i + 1}</StyledH3>
                <hr />
                <StyledText>{item}</StyledText>
              </div>
            )
          })}
        </Grid>

        <Grid item sm={12} md={6}>
          <StyledH1>Ingredients</StyledH1>
          {ingredients.map((item, i) => (
            <div key={i}>
              <StyledText>{item}</StyledText>
            </div>
          ))}
        </Grid>
      </Grid>
    </Layout>
  )
}

export const singleRecipe = graphql`
  query singleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      description {
        description
      }
      cookTime
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
      prepTime
      servings
      content {
        ingredients
        instructions
        tags
      }
    }
  }
`

export default RecipeTemplate
