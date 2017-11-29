import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  padding: 0.5rem 2rem;
  border-radius: .5rem;
  @media (max-width: 1325px) {
    width: 100%;
    align-items: flex-start;
    padding: 0;
  }
  @media (max-width: 750px) {
    margin-bottom: 100px;
  }
`

const Input = styled.input`
  background-color: transparent;
  padding: 8px;
  font-size: 22px;
  font-weight: 200;
  color: #eee;
  width: 500px;
  max-width: 30rem;
  margin: 15px 0;
  border: 0;
  border-bottom: 2px solid #2D9CDB;
  outline: 0;
  letter-spacing: 1.5px;
  border-radius: 0;
  @media (max-width: 1325px) {
    width: 70vw;
  }
`
const inputStyles = Input.withComponent('textarea')

const TextArea = inputStyles.extend`
  height: 75px;
`

const PrimaryButton = styled.button`
  background-color: #2D9CDB;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`

const Form = () => (
  <FormWrapper id='contact-form' name='contact' action='/thank-you' method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="contact" value="contact" />
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