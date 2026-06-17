import "./App.css";
import profile from "./assets/samiksha1.png";

function App() {
  const skills = [
    "C",
    "C++",
    "PHP",
    "C#",
    "Java",
    "Python",
    "R Language",
    "Statistics",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
    "React",
    "GitHub",
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            SamikshaPortfolio
          </a>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item ms-3">
                <a
                  href="public\40617_6a1698be.pdf"
                  download
                  className="resume-btn"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-5">
              <div className="profile-wrapper">
                <img
                  src={profile}
                  alt="Samiksha Shinde"
                  className="profile-img"
                />
              </div>
            </div>

            <div className="col-lg-7">
              <h1 className="hero-title">
                Hi, I'm Samiksha Shinde
              </h1>

              <h3 className="hero-subtitle">
                Full Stack Developer | React & Angular Enthusiast
              </h3>

              <p>
                Entry-Level Software Developer with a strong foundation
                in Computer Science.
              </p>

              <p>
                I completed my Bachelor in Computer Science with a
                CGPA of <strong>8.82</strong>.
              </p>

              <p>
                I am passionate about building responsive web
                applications, scalable backend systems, and
                database-driven solutions that provide excellent
                user experiences.
              </p>

              <p>
                During my internship at Walstar Technologies Pvt. Ltd.,
                I worked with HTML, CSS, JavaScript and React.
              </p>

              <p>
                Developed hands-on training projects focused on HTML,
                CSS, React.js and basic Node.js concepts.
              </p>

              <div className="mt-4">
                <a
                  href="#projects"
                  className="btn btn-primary hero-btn"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="btn btn-outline-primary hero-btn contact-btn"
                >
                  Contact Me
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-4">
              <div className="stat-card">
                <h2>8.82</h2>
                <p>CGPA</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-card">
                <h2>2</h2>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-card">
                <h2>2026</h2>
                <p>BCS Graduate</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills-section">
        <div className="container">

          <div className="section-title">
            <h2>My Skills</h2>
            <p>Technologies and Tools I Work With</p>
          </div>

          <div className="row">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6"
              >
                <div className="skill-card">
                  {skill}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects-section">
        <div className="container">

          <div className="section-title">
            <h2>Projects</h2>
            <p>My Academic & Development Projects</p>
          </div>

          <div className="row g-4">

            <div className="col-lg-6">
              <div className="project-card">
                <h4>College Website</h4>

                <p className="project-tech">
                  HTML, CSS, JavaScript, React
                </p>

                <ul>
                  <li>
                    Developed a functional and responsive college
                    website focusing on usability and modern UI design.
                  </li>

                  <li>
                    Created reusable React components and implemented
                    responsive layouts using Flexbox and Grid.
                  </li>

                  <li>
                    Enhanced user experience across multiple devices.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-card">
                <h4>Mess Management System</h4>

                <p className="project-tech">
                  C#, SQL
                </p>

                <ul>
                  <li>
                    Developed a desktop-based Mess Management System
                    using C# with SQL integration.
                  </li>

                  <li>
                    Implemented data storage and management features.
                  </li>

                  <li>
                    Generated automated bills and reports efficiently.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="container">

          <div className="contact-heading">
            <h2>Let's Connect</h2>

            <p>
              I am actively seeking internship and full-time
              opportunities in Software Development, Full Stack
              Development, and React Development.
            </p>
          </div>

          <div className="contact-card">

            <h3>Ready to Work Together?</h3>

            <p>
              Feel free to contact me for internships, job
              opportunities, freelance projects, or professional
              collaborations.
            </p>

            <p>
              <strong>Email:</strong><br />
              samikshashinde779@gmail.com
            </p>

            <p>
              <strong>Phone:</strong><br />
              +91 9309999659
            </p>

            <p>
              <strong>Location:</strong><br />
              Mumbai, Maharashtra, India
            </p>

            <a
              href="https://github.com/samiksha21"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark social-btn"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/samiksha-shinde21/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-info text-white social-btn"
            >
              LinkedIn
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 Samiksha Shinde | Full Stack Developer
      </footer>
    </>
  );
}

export default App;