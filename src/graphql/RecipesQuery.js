import { useStaticQuery, graphql } from "gatsby"

const RecipesQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulRecipe(sort: { fields: title, order: ASC }) {
        nodes {
          title
          id
          prepTime
          cookTime
          content {
            tags
            ingredients
          }
          image {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              width: 300
            )
          }
        }
      }
    }
  `)

  return data
}

export default RecipesQuery
