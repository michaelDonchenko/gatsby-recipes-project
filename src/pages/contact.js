import React, { useEffect, useState } from "react"
import ContactForm from "../components/contanct-form/ContactForm"
import Layout from "../components/layout/layout"
import { StyledH1, Main, ColumnDiv, StyledText } from "../styles/contact"
import SEO from "../components/SEO"

const Contact = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  )

  const handleResize = () => {
    setWidth(typeof window !== "undefined" && window.innerWidth)
  }

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize)

    return () =>
      typeof window !== "undefined" &&
      window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Layout>
      <SEO title="Contact page" />
      <Main width={width}>
        <ColumnDiv width={width}>
          <StyledH1>Want to get in touch?</StyledH1>

          <StyledText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </StyledText>

          <StyledText>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </StyledText>

          <StyledText>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </StyledText>
        </ColumnDiv>

        <ColumnDiv width={width}>
          <ContactForm />
        </ColumnDiv>
      </Main>
    </Layout>
  )
}

export default Contact
