const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Get in touch with us.</p>

      <div className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your Email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="5" placeholder="Your Message"></textarea>
        </div>

        <button className="submit-button">Send Message</button>
      </div>

      <div className="contact-info">
        <h2>Other Ways to Reach Us</h2>
        <p>Email: learn@reactrouter.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Learning Street, Knowledge City</p>
      </div>
    </div>
  )
}

export default Contact
