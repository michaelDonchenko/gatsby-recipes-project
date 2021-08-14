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
import { useForm, ValidationError } from "@formspree/react"
import { StyledText } from "../../styles/recipes"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xeqvponn")
  if (state.succeeded) {
    return <StyledText color="green">Message sent succefully!</StyledText>
  }

  return (
    <FlexDiv>
      <Paper elevation={2}>
        <StyledForm
          action="https://formspree.io/f/xeqvponn"
          method="POST"
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <label htmlFor="email">Your Email:</label>
            <StyledInput name="email" type="email" required />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Message:</label>
            <StyledTextArea name="message" type="text" required />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </FormGroup>

          <StyledButton type="submit" disabled={state.submitting}>
            {state.submitting ? "Loading.." : "Submit"}
          </StyledButton>
        </StyledForm>
      </Paper>
    </FlexDiv>
  )
}

export default ContactForm
