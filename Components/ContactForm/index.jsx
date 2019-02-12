import React from 'react';
import StyledContactForm from './styled';

const ContactForm = () => (
  <StyledContactForm
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact" />
    <label>
      name
      <input required placeholder="name" name="name" type="text" id="name" />
    </label>
    <label htmlFor="email">
      email
      <input required placeholder="email" name="email" type="email" id="email" />
    </label>
    <label htmlFor="phone">
      phone (optional)
      <input placeholder="phone" name="phone" type="tel" id="phone" />
    </label>
    <label htmlFor="body">
      message
      <textarea required placeholder="message" name="body" id="body" />
    </label>
    <div data-netlify-recaptcha />
    <input type="submit" value="Send Message" />
  </StyledContactForm>
);

export default ContactForm;
