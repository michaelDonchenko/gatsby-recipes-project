import React from "react"
import Layout from "../components/layout/layout"
import { StyledH1, StyledH2 } from "../styles/404"
import SEO from "../components/SEO"

const NotFound = () => {
  return (
    <Layout>
      <SEO title="Error (not found)" />
      <StyledH1>404</StyledH1>
      <StyledH2>Page Not Found...</StyledH2>
    </Layout>
  )
}

export default NotFound
