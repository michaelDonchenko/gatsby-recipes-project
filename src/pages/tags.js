import React from "react"
import Layout from "../components/layout/layout"
import TagsQuery from "../graphql/TagsQuery"
import setupTags from "../utils/setupTags"
import { FlexWrapDiv } from "../styles/recipes"
import Primary from "../components/buttons/primary"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const tags = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = TagsQuery()

  const tags = setupTags(recipes)

  return (
    <Layout>
      <SEO title="Tags page" />
      <FlexWrapDiv style={{ marginTop: "1rem" }}>
        {tags.map((tag, i) => {
          return (
            <Link to={`/tags/${tag[0]}`} style={{ textDecoration: "none" }}>
              <Primary text={`${tag[0]} (${tag[1]})`} key={i}></Primary>
            </Link>
          )
        })}
      </FlexWrapDiv>
    </Layout>
  )
}

export default tags
