import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  padding: 0.5rem 2rem;
  border-radius: .5rem;
`
const Input = styled.input`
  background-color: transparent;
  padding: .5rem;
  font-size: 1.25rem;
  font-weight: 100;
  color: #eee;
  width: 80vw;
  max-width: 30rem;
  margin: auto;
  border: 0;
  border-bottom: .1rem solid cornflowerblue;
  outline: none;
  letter-spacing: .75px;
`
const TextArea = Input.extend`
  height: 75px;
`

const PrimaryButton = styled.button`
  background-color: cornflowerblue;
  color: #fff;
`

const Form = () => (
  <FormWrapper id='contact-form' method='post'>
    <Input type="hidden" name="form-name" value="contact" />
    <label>
      <Input type="text" name="name" placeholder="Name" required />
    </label>
    <label>
      <Input type="email" name="email" placeholder="Email" required />
    </label>
    <label>
      <TextArea name="message" placeholder="Message" required></TextArea>
    </label>
    <PrimaryButton type="submit">Send</PrimaryButton>
  </FormWrapper>
)

export default Form