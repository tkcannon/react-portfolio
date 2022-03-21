import React, { useState } from "react";
import validateEmail from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState)
    }
  }

  const handleChange = (event) => {
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage('Must provide valid email.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required`)
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
      console.log('Handle Form', formState);
    }
  }

  return (
    <section>
      <h2>Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange}></input>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}></textarea>
        </div>
        {errorMessage &&
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        }
      </form>
      <button type="submit">Send</button>
    </section>
  )
}

export default Contact;