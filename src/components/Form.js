import React, { Component } from 'react'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends Component {
  state = {}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => window.location = '/thank-you')
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
        <form
          name="contact"
          method="post"
          action="/thank-you/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          id='contact_form'
        >
          <input name="bot-field" hidden/>
          <input 
            type="text" 
            name="name" 
            placeholder='Name'
            onChange={this.handleChange} />
          <input 
            type="email" 
            name="email" 
            placeholder='Email'
            onChange={this.handleChange} />
          <textarea 
            name="message" 
            placeholder='Message'
            onChange={this.handleChange} />
          <button
            className='button_primary'
            type="submit">
              Send
          </button>
        </form>
    );
  }
}