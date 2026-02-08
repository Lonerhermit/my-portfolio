import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.css';

const profileImg =
  'https://drive.google.com/thumbnail?id=17j3BOC6SNp5I8imdqsps08uqITrikCcl&sz=w1000';

const cvUrl =
  'https://drive.google.com/uc?export=download&id=1TCZvv4_oVFwFByRGSdMoflJhY5gXkGGH';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ltufuen',
        'template_tm2hwdd',
        form.current,
        'os3wv41eYaYR118on'
      )
      .then(
        () => {
          setShowPopup(true);
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message.');
        }
      );
  };

  const socialLinks = {
    github: 'https://github.com/Lonerhermit',
    instagram: 'https://www.instagram.com/lone_rhermit?igsh=NDV4MDFhOHJkcjRp',
    linkedin:
      'https://www.linkedin.com/in/arefin-al-mahi-4ba524307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  };

  const projects = [
    {
      name: 'CampusCore',
      desc: 'Unified student hub with dynamic theming and routine generation.',
      link: 'https://campus-core-sandy.vercel.app/',
      tech: 'React • Logic',
    },
    {
      name: 'Gitsnap',
      desc: 'Generator for turning GitHub repositories into visual social cards.',
      link: 'https://repo-to-card.vercel.app/',
      tech: 'Vite • API',
    },
    {
      name: 'BudgetBite',
      desc: 'Minimalist financial tool for instant expense risk assessment.',
      link: 'https://budget-bite.vercel.app/',
      tech: 'Vite • UX',
    },
  ];

  const designProjects = [
    {
      name: 'Velo',
      desc: 'Visual branding & Branding Guideline design.',
      link: 'https://www.figma.com/make/HggU1kWkW42HBvEUZ3e87t/Untitled?t=26neEmMCd6e7XXEX-1',
    },
    {
      name: 'Eureka AI',
      desc: 'Modern AI Workspace UI & Design System.',
      link: 'https://www.figma.com/make/xyIg33oxjXQrUI1sOILdms/Design-CORE-AI-Workspace?t=26neEmMCd6e7XXEX-1',
    },
  ];

  return (
    <>
      <header>
        <a href="#home" className="logo">
          Arefin
        </a>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <section id="home" className="home">
          <div className="home-content">
            <h1>
              Hi, It's <span>Arefin</span>
            </h1>
            <h3 className="typing-text">
              I'm a <span></span>
            </h3>
            <p>
              I am a passionate developer dedicated to creating high-quality web
              experiences. With a focus on modern frameworks and clean design, I
              turn ideas into reality.
            </p>
            <div className="social-icons">
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="btn-group">
              <a href="#contact" className="btn">
                Hire me
              </a>
              <a href={cvUrl} className="btn" target="_blank" rel="noreferrer">
                Download CV
              </a>
            </div>
          </div>
          <div className="home-img">
            <img src={profileImg} alt="Profile" referrerPolicy="no-referrer" />
          </div>
        </section>

        <section id="services" className="services">
          <h2 className="heading">
            My <span>Services</span>
          </h2>
          <div className="services-container">
            <div className="services-box">
              <i className="fa-solid fa-laptop-code"></i>
              <h3>Web Architecture</h3>
              <p>
                Building high-performance, responsive websites using React and
                modern clean-code practices. From landing pages to complex web
                apps.
              </p>
              <button className="btn" onClick={() => setActiveService('web')}>
                Details
              </button>
            </div>
            <div className="services-box">
              <i className="fa-solid fa-pen-nib"></i>
              <h3>Brand Identity</h3>
              <p>
                Creating visual stories. I design intuitive UI/UX in Figma and
                craft professional brand assets using the Adobe Creative Suite.
              </p>
              <button className="btn" onClick={() => setActiveService('brand')}>
                Details
              </button>
            </div>
            <div className="services-box">
              <i className="fa-solid fa-chalkboard-teacher"></i>
              <h3>Tech Mentorship</h3>
              <p>
                Simplifying the complex. I provide 1-on-1 coaching and workshop
                curriculum design for aspiring developers and designers.
              </p>
              <button
                className="btn"
                onClick={() => setActiveService('mentorship')}
              >
                Details
              </button>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <h2 className="heading">
            My <span>Skills</span>
          </h2>
          <div className="skills-container">
            <div className="skills-box">
              <i className="fa-solid fa-code"></i>
              <h3>Web Development</h3>
              <p>React, JavaScript, HTML5, CSS3</p>
            </div>
            <div className="skills-box">
              <i className="fa-brands fa-figma"></i>
              <h3>UI/UX Design</h3>
              <p>Figma, Prototyping, User Research</p>
            </div>
            <div className="skills-box">
              <i className="fa-solid fa-palette"></i>
              <h3>Creative Suite</h3>
              <p>Photoshop, Illustrator, Premiere Pro</p>
            </div>
            <div className="skills-box">
              <i className="fa-solid fa-chalkboard-user"></i>
              <h3>Technical Teaching</h3>
              <p>Mentoring, Curriculum Design, Workshops</p>
            </div>
          </div>
        </section>

        <section id="education" className="education">
          <h2 className="heading">
            Academic <span>Background</span>
          </h2>
          <div className="education-timeline">
            <div className="edu-item">
              <div className="edu-dot"></div>
              <div className="edu-content">
                <span className="edu-year">Undergraduate</span>
                <h3>B.Sc. in Computer Science & Engineering</h3>
                <p>
                  <strong>AIUB:</strong> Currently deep-diving into Software
                  Engineering, Data Structures, and Modern Web Tech at American
                  International University - Bangladesh.
                </p>
                <a
                  href="https://aiub.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="edu-link"
                >
                  Visit University{' '}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="edu-item">
              <div className="edu-dot"></div>
              <div className="edu-content">
                <span className="edu-year">Higher Secondary</span>
                <h3>Science Background</h3>
                <p>
                  <strong>Notre Dame College:</strong> Focused on Physics,
                  Chemistry, and Higher Math, cultivating a strong analytical
                  mindset at the nation's premier college.
                </p>
                <a
                  href="https://ndc.edu.bd/"
                  target="_blank"
                  rel="noreferrer"
                  className="edu-link"
                >
                  Visit College{' '}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="edu-item">
              <div className="edu-dot"></div>
              <div className="edu-content">
                <span className="edu-year">Secondary School</span>
                <h3>Science Background</h3>
                <p>
                  <strong>Motijheel Govt. Boys' High School:</strong> My
                  foundational years where I first excelled in Mathematics and
                  General Science.
                </p>
                <a
                  href="https://mgbhs.edu.bd/"
                  target="_blank"
                  rel="noreferrer"
                  className="edu-link"
                >
                  Visit School{' '}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience">
          <h2 className="heading">
            Work <span>Experience</span>
          </h2>
          <div className="education-timeline">
            <div className="edu-item">
              <div className="edu-dot"></div>
              <div className="edu-content">
                <span className="edu-year">2026 - Ongoing</span>
                <h3>Teacher</h3>
                <p>
                  <strong>QED:</strong> Private University Admission Care.
                </p>
              </div>
            </div>
            <div className="edu-item">
              <div className="edu-dot"></div>
              <div className="edu-content">
                <span className="edu-year">2024 - Ongoing</span>
                <h3>Senior Graphic Designer</h3>
                <p>
                  <strong>AIUB COURSE SOLUTION - ACS:</strong> Leading visual
                  design and department content strategy.
                </p>
              </div>
            </div>
            <div className="edu-item">
              <div className="edu-dot"></div>
              <div className="edu-content">
                <span className="edu-year">2024 - 2025</span>
                <h3>Asst. Teacher</h3>
                <p>
                  <strong>Phoenix Admission Care:</strong> Supported academic
                  growth and classroom management.
                </p>
              </div>
            </div>
            <div className="edu-item">
              <div className="edu-dot"></div>
              <div className="edu-content">
                <span className="edu-year">2022 - 2024</span>
                <h3>Consultant</h3>
                <p>
                  <strong>NOTRE DAME IT CLUB:</strong> Strategy and advisory for
                  IT initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2 className="heading">
            Contact <span>Me</span>
          </h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Let's Work Together</h3>
              <p>
                I'm currently available for freelance work or full-time
                positions. Connect with me via socials or drop a message!
              </p>
              <div className="social-icons">
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href={socialLinks.github} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="input-box">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Email Address"
                  required
                />
              </div>
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Service Details Popup */}
      {activeService && (
        <div className="popup-overlay" style={{ display: 'flex' }}>
          <div className="popup-card service-details-card">
            <i
              className="fa-solid fa-xmark close-icon"
              onClick={() => setActiveService(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                cursor: 'pointer',
                fontSize: '2rem',
                color: 'var(--main-color)',
              }}
            ></i>

            {activeService === 'web' && (
              <>
                <h2>
                  Web <span>Architecture</span>
                </h2>
                <div
                  className="project-preview-container"
                  style={{
                    marginTop: '20px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '15px',
                  }}
                >
                  {projects.map((proj, i) => (
                    <div
                      key={i}
                      className="mini-project-card"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        padding: '15px',
                        borderRadius: '10px',
                        border: '1px solid var(--main-color)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <h4 style={{ fontSize: '1.4rem' }}>{proj.name}</h4>
                        <p style={{ fontSize: '1rem', margin: '5px 0' }}>
                          {proj.desc}
                        </p>
                      </div>
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                        style={{
                          fontSize: '1rem',
                          padding: '0.5rem 1rem',
                          marginTop: '10px',
                        }}
                      >
                        Visit Site
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeService === 'brand' && (
              <>
                <h2>
                  Brand <span>Identity</span>
                </h2>
                <div
                  className="project-preview-container"
                  style={{
                    marginTop: '20px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '15px',
                  }}
                >
                  {designProjects.map((proj, i) => (
                    <div
                      key={i}
                      className="mini-project-card"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        padding: '15px',
                        borderRadius: '10px',
                        border: '1px solid var(--main-color)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <h4 style={{ fontSize: '1.4rem' }}>{proj.name}</h4>
                        <p style={{ fontSize: '1rem', margin: '5px 0' }}>
                          {proj.desc}
                        </p>
                      </div>
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                        style={{
                          fontSize: '1rem',
                          padding: '0.5rem 1rem',
                          marginTop: '10px',
                        }}
                      >
                        Open Figma
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeService === 'mentorship' && (
              <>
                <h2>
                  Tech <span>Mentorship</span>
                </h2>
                <p style={{ marginTop: '20px' }}>
                  Helping students bridge the gap between theory and production.
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    marginTop: '15px',
                    textAlign: 'left',
                  }}
                >
                  <li>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: 'var(--main-color)' }}
                    ></i>{' '}
                    1-on-1 Code Reviews
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: 'var(--main-color)' }}
                    ></i>{' '}
                    Portfolio Building
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: 'var(--main-color)' }}
                    ></i>{' '}
                    Modern Stack Roadmap
                  </li>
                </ul>
              </>
            )}

            <button
              className="btn"
              style={{ marginTop: '25px' }}
              onClick={() => setActiveService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <i className="fa-solid fa-circle-check popup-icon"></i>
            <h2>Message Sent!</h2>
            <p>Thank you for your message.</p>
            <button className="btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
