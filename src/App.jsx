
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Mail,
  Menu,
  X,
  Sparkles,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  ExternalLink,
} from "lucide-react";
import "./App.css";

const personal = {
  name: "Amrah Imran",
  email: "fathimaamrahimran@gmail.com",
  github: "https://github.com/amrahimran",
  linkedin: "https://www.linkedin.com/in/amrah-imran-879807219",
};

const phrases = [
  "Creative Problem Solver",
  "Curious Technologist",
  "Digital Storyteller",
  "Lifelong Learner",
];

const projects = [
  {
    number: "01",
    title: "HepatoAI",
    category: "Artificial Intelligence / Healthcare",
    description:
      "My final-year research project exploring how machine learning can support fluid responsiveness assessment during liver transplant surgery. The project investigates physiological time-series data and compares predictive models as part of a clinical decision-support prototype.",
    tags: ["Python", "Machine Learning", "React", "Healthcare AI"],
    status: "In Development",
    featured: true,
    symbol: "✳",
    color: "purple",
  },
  {
    number: "02",
    title: "Bastion",
    category: "Cybersecurity / Software Development",
    description:
      "A desktop application designed to make system security assessments more accessible. Bastion brings together twelve types of vulnerability scans and simulations of common cyberattacks within a unified interface.",
    tags: ["Laravel", "Python", "Nmap", "AI Integration"],
    status: "University Project",
    featured: true,
    symbol: "⌘",
    color: "pink",
  },
  {
    number: "03",
    title: "LUDO-T",
    category: "Java / Software Architecture",
    description:
      "A Java-based Ludo game engine built around object-oriented programming, SOLID principles and design patterns. The system uses automated testing to validate game rules, movement logic and architectural behaviour.",
    tags: ["Java", "OOP", "SOLID", "JUnit"],
    status: "Completed",
    featured: true,
    symbol: "✦",
    color: "blue",
  },
  {
    number: "04",
    title: "E-commerce Bookstore",
    category: "Mobile Application Development",
    description:
      "A responsive Android bookstore application featuring light and dark themes, interactive interfaces, device-feature integration and local data storage.",
    tags: ["Flutter", "Dart", "SQLite", "Android"],
    status: "University Project",
    featured: false,
    symbol: "◈",
    color: "peach",
  },
  {
    number: "05",
    title: "Car Booking System",
    category: "Desktop Application Development",
    description:
      "A GUI-based car booking application demonstrating object-oriented programming, database integration and structured application development.",
    tags: ["C#", "MySQL", "OOP"],
    status: "University Project",
    featured: false,
    symbol: "◇",
    color: "mint",
  },
];

const skillGroups = [
  {
    title: "Development",
    symbol: "01",
    skills: [
      "JavaScript",
      "React",
      "HTML & CSS",
      "Tailwind CSS",
      "PHP / Laravel",
      "Python",
      "C#",
      "Java",
      "Flutter",
    ],
  },
  {
    title: "Databases & APIs",
    symbol: "02",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "RESTful APIs",
    ],
  },
  {
    title: "Tools & Practices",
    symbol: "03",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Object-Oriented Programming",
      "SOLID Principles",
      "Agile Development",
      "Software Testing",
    ],
  },
  {
    title: "Exploring",
    symbol: "04",
    skills: [
      "Machine Learning",
      "Artificial Intelligence",
      "Business Analysis",
      "UI/UX",
      "Technical Communication",
      "Creative Problem-Solving",
    ],
  },
];

const stars = Array.from({ length: 35 }, (_, i) => ({
  left: `${(i * 37.7 + 13) % 100}%`,
  top: `${(i * 23.9 + 7) % 100}%`,
  delay: `${(i % 9) * 0.45}s`,
  size: i % 5 === 0 ? 3 : 2,
}));

function useTyping() {
  const [word, setWord] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = phrases[index];
    const finished = word === target;
    const empty = word === "";

    const delay =
      finished && !deleting ? 1800 : deleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (finished && !deleting) {
        setDeleting(true);
      } else if (empty && deleting) {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setWord(
          target.slice(0, word.length + (deleting ? -1 : 1))
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [word, index, deleting]);

  return word;
}

function SectionHeading({ number, eyebrow, title, accent }) {
  return (
    <div className="section-heading">
      <span className="section-label">
        {number} / {eyebrow}
      </span>
      <h2>
        {title} <em>{accent}</em>
      </h2>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      className={`project-card ${
        project.featured ? "featured-project" : ""
      }`}
    >
      <div className={`project-visual ${project.color}`}>
        <span className="project-visual-symbol">
          {project.symbol}
        </span>
        <span className="project-visual-number">
          {project.number} / 05
        </span>
        <span className="project-visual-caption">
          {project.category}
        </span>
      </div>

      <div className="project-details">
        <div className="project-meta">
          <span>{project.category}</span>
          <span className="project-status">{project.status}</span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function App() {
  const typed = useTyping();
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarHappy, setAvatarHappy] = useState(false);

  const navigation = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Experience",
    "Contact",
  ];

  return (
    <div className="site">
      <div className="stars" aria-hidden="true">
        {stars.map((star, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* NAVIGATION */}
      <header className="navbar">
        <a className="logo" href="#home">
          <span className="logo-icon">✳</span>
          amrah<span className="logo-dot">.</span>
        </a>

        <nav
          className={`nav-links ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <a className="nav-contact" href="#contact">
          Let's connect <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-sparkle">✦</span>
              HELLO, WORLD! I'M
            </div>

            <h1>
              Amrah
              <br />
              <span>Imran.</span>
            </h1>

            <div className="role">
              <span>Software Engineering Student</span>
              <span className="role-second">
                &amp; <em>{typed}</em>
                <span className="cursor">|</span>
              </span>
            </div>

            <p className="hero-description">
              Somewhere between logic and imagination is where
              I feel most at home. I'm a curious technologist
              exploring software, AI, business thinking and
              creative ideas — turning interesting problems
              into thoughtful digital solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore my work <ArrowUpRight size={18} />
              </a>

              <a href="#about" className="btn btn-secondary">
                More about me
              </a>
            </div>

            <div className="socials">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-text-icon"
              >
                GH
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-text-icon"
              >
                in
              </a>

              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>

              <span className="social-note">
                find me around the internet ↗
              </span>
            </div>
          </div>

          <div className="hero-art">
            <div className="avatar-orbit" aria-hidden="true" />

            <span className="decor decor-one" aria-hidden="true">
              ✧
            </span>
            <span className="decor decor-two" aria-hidden="true">
              ✦
            </span>
            <span className="decor decor-three" aria-hidden="true">
              ✳
            </span>

            <button
              className={`avatar-button ${
                avatarHappy ? "happy" : ""
              }`}
              onClick={() => setAvatarHappy(!avatarHappy)}
              aria-label="Interact with illustrated avatar"
            >
              <img
                src="/avatar.png"
                alt="Hand-drawn chibi illustration of Amrah"
                className="avatar"
              />
            </button>

            <div className="avatar-message" aria-live="polite">
              {avatarHappy
                ? "made of code & curiosity ✦"
                : "a little more than pixels ✧"}
            </div>

            <div className="art-caption">
              <Sparkles size={15} />
              a little imagination goes a long way
            </div>
          </div>

          <div className="hero-bottom">
            <a href="#about">
              SCROLL TO EXPLORE <ArrowDown size={14} />
            </a>
            <span className="bottom-quote">
              made with curiosity & a little stardust ✳
            </span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="content-section about-section" id="about">
          <SectionHeading
            number="01"
            eyebrow="THE PERSON BEHIND THE CODE"
            title="A little about"
            accent="me."
          />

          <div className="about-layout">
            <div className="about-main">
              <p className="about-lead">
                I'm a Software Engineering undergraduate who
                enjoys the intersection of logic, creativity
                and meaningful problem-solving.
              </p>

              <p>
                I love understanding how things work — whether
                that's the architecture behind an application,
                the reasoning behind an algorithm, or the
                little design decisions that make a digital
                experience feel intuitive.
              </p>

              <p>
                My interests extend beyond writing code.
                I enjoy storytelling, explaining complex
                concepts in simple ways, and exploring how
                technology can turn interesting ideas into
                practical solutions.
              </p>

              <p>
                I'm naturally curious, adaptable and always
                eager to learn. I'm especially interested in
                opportunities that connect software
                development, artificial intelligence,
                analytical thinking and business needs.
              </p>
            </div>

            <aside className="about-aside">
              <div className="about-fact">
                <span>BASED IN</span>
                <strong>
                  <MapPin size={15} />
                  Sri Lanka
                </strong>
              </div>

              <div className="about-fact">
                <span>CURRENTLY STUDYING</span>
                <strong>BEng (Hons) Software Engineering</strong>
              </div>

              <div className="about-fact">
                <span>UNIVERSITY</span>
                <strong>Staffordshire University</strong>
              </div>

              <div className="about-fact">
                <span>INTERESTS</span>
                <strong>
                  Software · AI · Business · Creativity
                </strong>
              </div>
            </aside>
          </div>

          <div className="about-quote">
            <span>✳</span>
            <p>
              I believe the best ideas happen when curiosity
              meets the courage to try something new.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="content-section projects-section" id="projects">
          <SectionHeading
            number="02"
            eyebrow="SELECTED WORK"
            title="Things I've"
            accent="built."
          />

          <p className="section-intro">
            A collection of university projects, technical
            experiments and ideas that have helped shape
            the way I think and build.
          </p>

          <div className="featured-grid">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              ))}
          </div>

          <div className="more-projects-heading">
            <h3>More explorations</h3>
            <span>THE LEARNING NEVER REALLY STOPS ✦</span>
          </div>

          <div className="secondary-grid">
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="content-section skills-section" id="skills">
          <SectionHeading
            number="03"
            eyebrow="MY TOOLKIT"
            title="Skills &"
            accent="curiosities."
          />

          <p className="section-intro">
            A mix of technologies I've worked with,
            concepts I've explored and areas I'm
            continuing to develop.
          </p>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <div className="skill-group-heading">
                  <span>{group.symbol}</span>
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills-note">
            <Code2 size={19} />
            <span>
              Always learning. Always experimenting.
              Never quite done exploring.
            </span>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          className="content-section experience-section"
          id="experience"
        >
          <SectionHeading
            number="04"
            eyebrow="MY JOURNEY"
            title="Experience &"
            accent="education."
          />

          <div className="journey-grid">
            <div className="journey-column">
              <div className="journey-heading">
                <BriefcaseBusiness size={20} />
                <h3>Experience & Involvement</h3>
              </div>

              <div className="timeline-item">
                <span className="timeline-date">
                  MAR — OCT 2024
                </span>
                <h4>Freelance Web Development Tutor</h4>
                <p>
                  Supported learners in understanding web
                  development concepts, strengthening
                  programming fundamentals and translating
                  technical ideas into practical knowledge.
                </p>
              </div>

              <div className="timeline-item">
                <span className="timeline-date">
                  STUDENT INVOLVEMENT
                </span>
                <h4>Full Stack Computing Society</h4>
                <p>
                  Member of the computing society at APIIT,
                  engaging with a community interested in
                  software development and technology.
                </p>
              </div>
            </div>

            <div className="journey-column">
              <div className="journey-heading">
                <GraduationCap size={21} />
                <h3>Education & Learning</h3>
              </div>

              <div className="timeline-item">
                <span className="timeline-date">
                  2024 — PRESENT
                </span>
                <h4>BEng (Hons) Software Engineering</h4>
                <p>
                  Staffordshire University
                </p>
                <p>
                  Studying software development, programming,
                  system design and computing principles,
                  alongside my final-year research into
                  AI-based clinical decision support.
                </p>
              </div>

              <div className="timeline-item">
                <span className="timeline-date">
                  2024
                </span>
                <h4>Agile Project Management Learning</h4>
                <p>
                  Completed Agile-related learning through
                  LinkedIn Learning, as listed on my CV.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="content-section contact-section"
          id="contact"
        >
          <span className="section-label">
            05 / LET'S CONNECT
          </span>

          <div className="contact-layout">
            <div>
              <h2>
                Have an idea?
                <br />
                <em>Let's talk.</em>
              </h2>

              <p>
                Whether it's a project, an opportunity,
                a collaboration or simply a conversation
                about technology and creative ideas,
                I'd love to connect.
              </p>

              <a
                className="btn btn-primary"
                href={`mailto:${personal.email}`}
              >
                Say hello <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="contact-links">
              <a href={`mailto:${personal.email}`}>
                <span>
                  <Mail size={19} />
                  Email
                </span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <Code2 size={19} />
                  GitHub
                </span>
                <ExternalLink size={17} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <BriefcaseBusiness size={19} />
                  LinkedIn
                </span>
                <ExternalLink size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Amrah Imran</span>
        <span>Thoughtfully coded, creatively imagined ✳</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
