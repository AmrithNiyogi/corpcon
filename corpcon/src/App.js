import React from 'react';
import { Link, Element } from 'react-scroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="corpcon-logo.png" alt="CorpCon Logo" />
          <p>Empowering Tech Professionals</p>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="speakers" smooth={true} duration={500}>Speakers</Link></li>
            <li><Link to="register" smooth={true} duration={500}>Register</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            <li><button>Login/Signup</button></li>
            <li className="university-logo">
              <img src="university-logo.png" alt="University Logo" />
            </li>
          </ul>
        </nav>
      </header>
      
      <section className="hero">
        <h1>Welcome to CorpCon</h1>
        <p>Your gateway to the latest in technology and networking.</p>
        <Link to="register" smooth={true} duration={500}>
          <button className="cta-button">Register Now</button>
        </Link>
      </section>

      <main className="main">
        <Element name="about">
          <section>
            <h2>About CorpCon</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </section>
        </Element>
        <Element name="speakers">
          <section>
            <h2>Speakers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </section>
        </Element>
        <Element name="register">
          <section>
            <h2>Register</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </section>
        </Element>
        <Element name="contact">
          <section>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </section>
        </Element>
      </main>

      <footer className="footer">
        <p>&copy; 2023 CorpCon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;