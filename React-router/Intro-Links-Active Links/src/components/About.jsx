import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <p>We are a company dedicated to creating amazing web experiences using modern technologies like React and React Router.</p>

      <div className="about-content">
        <h2>Our Mission</h2>
        <p>To make web development learning accessible and practical for everyone.</p>

        <h2>What We've Covered</h2>
        <ul>
          <li>React Router Installation and Setup</li>
          <li>Configuring Routes</li>
          <li>Creating Navigation Links</li>
          <li>Active Link Styling</li>
        </ul>

        <div className="cta-section">
          <p>Want to learn more about what we do?</p>
          <Link to="/contact" className="cta-button">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
