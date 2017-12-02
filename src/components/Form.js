import React from 'react'

const Form = () => (
  <form id='contact_form' name='contact' action='https://seanlawrence.co/thank-you' method="post" data-netlify="true" data-netlify-honeypot="bot-field" >
    <input type="hidden" name="contact" value="contact" />
    <label>
      <input type="text" name="name" placeholder="Name" required />
    </label>
    <label>
      <input type="email" name="email" placeholder="Email" required />
    </label>
    <label>
      <textarea name="message" placeholder="Message" required></textarea>
    </label>
    <button
      className='button_primary'
      type="submit"
    >
      Send
    </button>
  </form>
)

export default Form