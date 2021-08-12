import React from "react"
import setupTags from "../../utils/setupTags"
import { StyledH3, StyledText } from "../../styles/recipes"
import { Link } from "gatsby"

const TagsList = ({ recipes }) => {
  const tags = setupTags(recipes)

  return (
    <div>
      <StyledH3>Tags list</StyledH3>
      {tags.map((tag, i) => {
        const [text, value] = tag
        return (
          <Link to={`/tags/${text}`} style={{ textDecoration: "none" }}>
            <StyledText>{`${text} (${value})`}</StyledText>
          </Link>
        )
      })}
    </div>
  )
}

export default TagsList
