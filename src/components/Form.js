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
        id='contact_form'
        name="contact"
        method="post"
        action="/thank-you/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input name="bot-field" hidden />
        <input
          name="name"
          placeholder='Name'
          type="text"
          onChange={this.handleChange} required />
        <input
          name="email"
          placeholder='Email'
          type="email"
          onChange={this.handleChange} required />
        <textarea
          name="message"
          placeholder='Message'
          onChange={this.handleChange} required />
        <button
          type="submit"
          className='button_primary'
        >
          Send
          </button>
      </form>
    );
  }
}