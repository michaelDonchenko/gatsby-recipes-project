import React from "react"
import { Helmet } from "react-helmet"
import FetchData from "../graphql/SiteMetadata"

const SEO = ({ title }) => {
  const { site } = FetchData()

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.info.title}`}
      meta={[
        {
          name: "description",
          content: site.info.description,
        },
        {
          name: "author",
          content: site.info.author,
        },
      ]}
    ></Helmet>
  )
}

export default SEO
