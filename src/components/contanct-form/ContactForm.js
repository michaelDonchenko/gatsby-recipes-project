import React from "react"
import { Paper } from "@material-ui/core"
import {
  StyledButton,
  StyledForm,
  StyledInput,
  FlexDiv,
  FormGroup,
  StyledTextArea,
} from "./styles"

const ContactForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <FlexDiv>
      <Paper elevation={2}>
        <StyledForm onSubmit={handleSubmit}>
          <FormGroup>
            <label for="email">Your Email:</label>
            <StyledInput name="email" type="email" required />
          </FormGroup>

          <FormGroup>
            <label for="message">Message:</label>
            <StyledTextArea name="message" type="text" required />
          </FormGroup>

          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </Paper>
    </FlexDiv>
  )
}

export default ContactForm
