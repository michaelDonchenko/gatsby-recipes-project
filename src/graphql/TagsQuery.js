import { useStaticQuery, graphql } from "gatsby"

const TagsQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulRecipe {
        nodes {
          id
          content {
            tags
          }
        }
      }
    }
  `)

  return data
}

export default TagsQuery
