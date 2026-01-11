import profileImg from "./assets/shaurya.png";
import Antigravity from "./components/Antigravity";
import LaserFlow from "./components/LaserFlow";
import realEstateImg from "./assets/REAL ESTATE WEB.png";
import businessImg from "./assets/fourth-project.png";



import { useState } from "react";
function App() {
  const [activeCard, setActiveCard] = useState(null);

  return (

    <div className="main">
      {/* Cursor background effect */}
      <div className="cursor-bg">
        <Antigravity
          count={250}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#D4AF37"
          autoAnimate={true}
          particleVariance={1}
        />
      </div>
      <main className="website">
        <nav>
          <div className="links">

            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

          </div>
        </nav>
        <div className="home" id="home">
          <div className="home-content">

            <h1>Hi, it's <span style={{ color: "#d4af37" }}>Shaurya</span></h1>
            <h3>Frontend Web Developer</h3>
            <p>I create modern, responsive websites with a strong focus on clean design, smooth interactions, and user-friendly layouts. I enjoy turning ideas into visually appealing and functional web experiences.</p>
          </div>
          <div className="home-image">
            <img src={profileImg} alt="profile" />
          </div>
        </div>
        <div className="about" id="about">
          <div className="about-content">
            <h1>Who I Am?</h1>
            <p>I’m a frontend web developer who enjoys building modern, responsive, and visually engaging websites. I focus on clean design, smooth interactions, and creating user-friendly experiences. Currently, I’m improving my skills in React and exploring creative UI effects.</p>
          </div>
          <div className={`about-cards ${activeCard !== null ? "has-active" : ""}`}>

            <div
              className={`card top ${activeCard === 0 ? "active" : ""}`}
              onClick={() => setActiveCard(activeCard === 0 ? null : 0)}
            >

              <h1>Skills</h1>

              <div className="card-body">
                <h3>Frontend Development</h3>
                <p>HTML5 – Semantic, accessible structure</p>
                <p>CSS3 – Flexbox, Grid, animations, responsive layouts</p>
                <p>JavaScript (ES6+) – DOM manipulation, events, logic</p>
                <br />
                <br />
                <h3>Libraries & Tools</h3>
                <p>React (Learning) – Components, props, basic hooks</p>
                <p>Vite – Fast development setup</p>
                <p>Git & GitHub – Version control & deployment</p>
                <br />
                <br />
                <h3>UI & Design</h3>
                <p>Responsive Web Design (Mobile-first)</p>
                <p>Smooth UI animations & hover effects</p>
                <p>Modern layouts & clean visual hierarchy</p>
              </div>

              <span className="expand-hint">
                {activeCard === 0 ? "click to collapse" : "click to expand"}
              </span>
            </div>


            <div
              className={`card middle ${activeCard === 1 ? "active" : ""}`}
              onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
            >

              <h1>Education</h1>

              <div className="card-body">
                <h3>-Bachelor’s in Applied AI & Data Science (Ongoing)</h3>
                <h3>-Diploma in Engineering – Strong technical foundation</h3>
                <p>-Hands-on academic projects and practical learning</p>
                <p>-Solid understanding of programming concepts</p>
                <p>-Self-driven learning alongside formal education</p>
              </div>

              <span className="expand-hint">
                {activeCard === 1 ? "click to collapse" : "click to expand"}
              </span>
            </div>


            <div
              className={`card bottom ${activeCard === 2 ? "active" : ""}`}
              onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
            >

              <h1>Goals</h1>

              <div className="card-body">
                <p>-Become a strong and creative frontend engineer</p>
                <p>-Master React, animations, and modern UI patterns</p>
                <p>-Build production-ready, real-world web applications</p>
                <p>-Create smooth, interactive, and user-friendly experiences</p>
                <p>-Continuously grow as a developer through learning & building</p>
              </div>

              <span className="expand-hint">
                {activeCard === 2 ? "click to collapse" : "click to expand"}
              </span>
            </div>

          </div>


        </div>
        <div className="projects" id="projects">
          <h1>My Work</h1>
          <h3 className="h3-heading">Projects</h3>
          <div className="proj-cards">
            <div className="project-card">
              <a href="https://python-app--shauryaofficia2.replit.app"><h1>Indian Real Estate</h1></a>
              <div className="project-para">
                <p>- A full-stack real estate web application designed to deliver a smooth and modern user experience.</p>
                <p>- It features a fully responsive interface with dedicated buyer and dealer dashboards for easy property management.</p>
                <p>- The platform supports real-time listings, user-friendly navigation, and clean UI interactions.</p>
                <p>- Built with performance and scalability in mind to handle real-world real estate workflows effectively.</p>
              </div>
              <div className="card-img">
                <img src={realEstateImg} alt="Indian Real Estate Project" />
              </div>

              <a href="https://python-app--shauryaofficia2.replit.app" className="project-cta">View Project →</a>
            </div>
            <div className="project-card">
              <a href="https://resilient-beijinho-2b9518.netlify.app/"><h1>Bussiness Landing Page</h1></a>
              <div className="project-para">
                <p>- A modern and visually appealing landing page created to help businesses establish a strong online presence.</p>
                <p>- The design focuses on clear messaging, responsive layouts, and smooth scrolling interactions.</p>
                <p>- Optimized for conversions with well-placed CTAs and mobile-first design principles.</p>
                <p>- Perfect for showcasing services, building trust, and engaging potential customers.</p>
              </div>
              <div className="card-img">
                <img src={businessImg} alt="Business Landing Page" />
              </div>
              <a href="https://resilient-beijinho-2b9518.netlify.app/" className="project-cta second-proj-link">View Project →</a>
            </div>
          </div>
        </div>
        <div className="contact" id="contact">
          <div className="contact-section">
            <div className="contact-card">

              {/* Animation layer - MUST be inside contact-card */}
              <div className="contact-animation">
                <LaserFlow
                  color="#dfc15d"
                  horizontalBeamOffset={0.1}
                  verticalBeamOffset={-0.48}

                  // ULTRA MASSIVE VERSION
                  horizontalSizing={3}       // Even wider
                  verticalSizing={8}        // Even taller

                  wispDensity={2}
                  wispSpeed={15}
                  wispIntensity={6}         // Maximum brightness

                  fogIntensity={1}           // Maximum glow
                  fogScale={0.10}            // Even larger coverage
                  decay={0.6}                // Minimal decay
                  falloffStart={3}           // Maximum spread

                  flowStrength={0.5}         // Very pronounced pulse
                />
              </div>

              {/* Content layer */}
              <div className="contact-content">
                <h3>Let's Connect</h3>
                <p>Email: <br />shauryaofficial06@gmail.com</p>
                <p>Phone number: <br /> 91+ 93196-49564</p>
                <div className="social">
                  <a href="https://www.instagram.com/shaurya_ojha_19/" title="Instagram" aria-label="Instagram">
                    <svg width="30" height="30" fill="none" stroke="gold" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/shaurya-ojha/" title="LinkedIn" aria-label="LinkedIn">
                    <svg width="30" height="30" fill="none" stroke="gold" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </main>
      <footer>
        <div class="footer-content">

          <div class="footer-brand">
            <h2>Shaurya</h2>
            <p>Frontend Web Developer specializing in modern, responsive, and visually engaging websites with clean design and smooth interactions.</p>
            <div class="footer-social">
              <a href="https://www.instagram.com/shaurya_ojha_19/" title="Instagram" aria-label="Instagram">
                <svg fill="none" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/shaurya-ojha/" title="LinkedIn" aria-label="LinkedIn">
                <svg fill="none" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://github.com/shauryacode-design" title="GitHub" aria-label="GitHub">
                <svg fill="none" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>


          <div class="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>


          <div class="footer-contact">
            <h3>Get In Touch</h3>
            <p><strong>Email:</strong><br /><a href="mailto:shauryaofficial06@gmail.com">shauryaofficial06@gmail.com</a></p>
            <p><strong>Phone:</strong><br /><a href="tel:+919319649564">+91 93196-49564</a></p>
          </div>
        </div>


        <div class="footer-bottom">
          <p>&copy; 2025 Shaurya. All rights reserved.</p>

        </div>
      </footer>
    </div>

  )

}

export default App
