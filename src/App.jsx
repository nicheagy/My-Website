import "./App.css";
import ParticleBackground from "./ParticleBackground";
import GitHubProjects from "./GitHubProjects";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <NavBar />
      <header className="hero">
        <h1>Nicholas Eagy</h1>
        <p className="tagline">
          Computer Science Graduate | Software Developer
        </p>
        <a href="/My-Website/resume.pdf" download className="resume-btn">
          Download Resume
        </a>
      </header>

      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          Recent Computer Science graduate with hands-on experience building and
          testing web applications, validating APIs, and collaborating on
          team-based software delivery. I bring a structured approach to
          quality, strong attention to detail, and a focus on catching issues
          early — before they reach customers.
        </p>
      </section>

      <section className="section" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">Python</span>
          <span className="skill-tag">C++</span>
          <span className="skill-tag">C</span>
          <span className="skill-tag">SQL</span>
          <span className="skill-tag">PHP</span>
          <span className="skill-tag">HTML</span>
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">REST APIs</span>
          <span className="skill-tag">Git / GitHub</span>
          <span className="skill-tag">Linux</span>
          <span className="skill-tag">Agile Workflows</span>
        </div>
      </section>

      <section className="section" id="education">
        <h2>Education</h2>
        <div className="experience-item">
          <h3>BS in Computer Science — Liberty University</h3>
          <p className="date">Lynchburg, VA · May 2026 · GPA: 3.23</p>
        </div>
        <div className="experience-item">
          <h3>Associate's Degree — Central Piedmont Community College</h3>
          <p className="date">Matthews, NC · GPA: 3.75</p>
        </div>
      </section>

      <section className="section" id="experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Computer Science Tutor — Liberty University</h3>
          <p className="date">Lynchburg, VA · Fall 2024</p>
          <p>
            Debugged student code and explained complex concepts, reinforcing
            structured problem-solving. Translated technical issues into clear,
            actionable guidance.
          </p>
        </div>
        <div className="experience-item">
          <h3>Shift Lead — Chick-fil-A</h3>
          <p className="date">Wesley Chapel, NC · May 2021 – July 2025</p>
          <p>
            Led 10+ staff per shift in a fast-paced environment, ensuring
            quality and operational efficiency. Resolved real-time issues
            including equipment failures and scheduling changes.
          </p>
        </div>
      </section>

      <section className="section" id="projects">
        <h2>Projects</h2>
        <div className="experience-item">
          <h3>Automated Traceability Matrix App</h3>
          <p className="date">CS Practicum I & II · Fall 2025 – Spring 2026</p>
          <p>
            Validated requirements against delivered functionality; led
            stakeholder meetings and coordinated team communication.
          </p>
        </div>
        <div className="experience-item">
          <h3>Security Threat Analysis</h3>
          <p className="date">Aspects of Computer Security · Spring 2026</p>
          <p>
            Identified and documented Indicators of Compromise (IOCs) through
            structured threat analysis; assessed vulnerabilities and recommended
            mitigations.
          </p>
        </div>
        <div className="experience-item">
          <h3>Dynamic Web Application — PHP</h3>
          <p className="date">Back-End Programming in PHP · Spring 2026</p>
          <p>
            Developed and tested dynamic web applications; validated user
            workflows and resolved defects.
          </p>
        </div>
      </section>

      <section className="section" id-="github">
        <h2>GitHub Repositories</h2>
        <GitHubProjects />
      </section>

      <section className="section" id="contact">
        <h2>Contact</h2>
        <div className="contact-links">
          <a href="mailto:nicholaseagy@gmail.com">Email</a>
          <a
            href="https://github.com/nicheagy"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-eagy-9189772b2"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Nicholas Eagy</p>
      </footer>
    </div>
  );
}

export default App;
