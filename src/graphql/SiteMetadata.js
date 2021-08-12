import { useStaticQuery, graphql } from "gatsby"

const FetchData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        info: siteMetadata {
          author
          description
          title
        }
      }
    }
  `)
  return data
}

export default FetchData
