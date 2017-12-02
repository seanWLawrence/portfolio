import React from 'react'

import '../styles/components/form.scss'

const Form = () => (
  <form id='contact-form' name='contact' action='https://seanlawrence.co/thank-you' method="post" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
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
      className='primary'
      type="submit"
    >
      Send
    </button>
  </form>
)

export default Form