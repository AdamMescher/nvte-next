import React from 'react';
import StyledContactForm from './styled';

const ContactForm = () => (
    <StyledContactForm>
        <label>
            name
            <input required placeholder="name" name="name" type="text" id="name" />
        </label>
        <label class="contact-form-label" for="email">
            email
            <input required placeholder="email" name="email" type="email" id="email" />
        </label>
        <label class="contact-form-label" for="phone">
            phone (optional)
            <input class="contact-form-input" placeholder="phone" name="phone" type="tel" id="phone" />
        </label>
        <label for="body">
            message
            <textarea required class="contact-form-input" placeholder="message" name="body" id="body"></textarea>
        </label>
        <div data-netlify-recaptcha></div>
        <input type="submit" value="Send Message" />
    </StyledContactForm>
)

export default ContactForm;
