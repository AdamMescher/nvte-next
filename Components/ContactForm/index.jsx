import React from 'react';
import StyledContactForm from './styled';

const ContactForm = () => (
    <StyledContactForm>
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
            <textarea required placeholder="message" name="body" id="body"></textarea>
        </label>
        <div data-netlify-recaptcha></div>
        <input type="submit" value="Send Message" />
    </StyledContactForm>
)

export default ContactForm;
