import React from "react";

function Contact() {
  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <label>Name</label>
        <input></input>
        <label>Email</label>
        <input></input>
        <label>Message</label>
        <textarea rows={5}></textarea>
      </form>
      <button>Send</button>
    </section>
  )
}

export default Contact;