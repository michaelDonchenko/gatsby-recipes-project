import styled from "styled-components"

export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledForm = styled.form`
  padding: 0.8rem;
  width: 300px;
  max-width: 100%;
`

export const FormGroup = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1.5rem auto;
`

export const StyledButton = styled.button`
  box-shadow: 0px 10px 14px -7px #276873;
  background: rgb(0, 102, 204);
  background-color: rgb(0, 102, 204);
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 13px 32px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  &:hover {
    background-color: rgb(0, 64, 128);
  }
`

export const StyledInput = styled.input`
  padding: 5px;
  font-size: 16px;
  border-width: 1px;
  border-color: rgb(0, 102, 204);
  background-color: #ffffff;
  color: #000000;
  border-style: solid;
  border-radius: 7px;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);
`

export const StyledTextArea = styled.textarea`
  padding: 5px;
  font-size: 16px;
  border-width: 1px;
  border-color: rgb(0, 102, 204);
  background-color: #ffffff;
  color: #000000;
  border-style: solid;
  border-radius: 7px;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);
  max-width: 100%;
`
