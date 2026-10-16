
import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, Menu, X, Sparkles } from "lucide-react";
import "./App.css";

const phrases = [
  "Creative Developer",
  "Curious Problem Solver",
  "Digital Storyteller",
];

const stars = Array.from({ length: 36 }, (_, i) => ({
  left: `${(i * 37.7 + 13) % 100}%`,
  top: `${(i * 23.9 + 7) % 100}%`,
  delay: `${(i % 9) * 0.45}s`,
  size: i % 5 === 0 ? 4 : 2,
}));

function useTyping() {
  const [word, setWord] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = phrases[index];
    const finished = word === target;
    const empty = word === "";

    const delay = finished && !deleting ? 1700 : deleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (finished && !deleting) {
        setDeleting(true);
      } else if (empty && deleting) {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setWord(target.slice(0, word.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [word, index, deleting]);

  return word;
}

function App() {
  const typed = useTyping();
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarHappy, setAvatarHappy] = useState(false);

  const nav = ["Home", "About", "Projects", "Skills", "Contact"];

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

      <header className="navbar">
        <a className="logo" href="#home">
          <span className="logo-icon">✳</span>
          amrah<span className="logo-dot">.</span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {nav.map((item) => (
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
          Let's talk <ArrowUpRight size={16} />
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
              I find joy in the space where logical code meets creative
              imagination. I love building thoughtful digital experiences,
              exploring new ideas, and turning curiosity into something real.
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
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <span className="social-text-icon">GH</span>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <span className="social-text-icon">in</span>
              </a>

              <a href="mailto:hello@example.com" aria-label="Email">
                <Mail size={20} />
              </a>

              <span className="social-note">
                find me around the internet ↗
              </span>
            </div>
          </div>

          <div className="hero-art">
            <div className="avatar-orbit" aria-hidden="true" />
            <span className="decor decor-one" aria-hidden="true">✧</span>
            <span className="decor decor-two" aria-hidden="true">✦</span>
            <span className="decor decor-three" aria-hidden="true">✳</span>

            <button
              className={`avatar-button ${avatarHappy ? "happy" : ""}`}
              onClick={() => setAvatarHappy(!avatarHappy)}
              aria-label="Say hello to Amrah's illustrated character"
            >
              <img
                src="/avatar.png"
                alt="Cute standing chibi illustration of Amrah"
                className="avatar"
              />
            </button>

            <div className="avatar-message" aria-live="polite">
              {avatarHappy
                ? "nice to meet you. ✳"
                : "the human behind the code ↗"}
            </div>

            <div className="art-caption">
              <Sparkles size={15} />
              a little imagination goes a long way
            </div>
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE <span className="down-arrow">↓</span></span>
            <span className="bottom-quote">made with curiosity & a little stardust ✳</span>
          </div>
        </section>

        <section className="content-section" id="about">
          <div className="section-label">01 / THE PERSON BEHIND THE CODE</div>
          <h2>A little about <em>me.</em></h2>
          <p>
            I'm a Software Engineering student who enjoys combining structured
            problem-solving with imagination. I'm quick to learn, curious by
            nature, and interested in how technology can turn meaningful ideas
            into experiences people enjoy.
          </p>
        </section>

        <section className="content-section" id="projects">
          <div className="section-label">02 / THINGS I'VE BUILT</div>
          <h2>Selected <em>projects.</em></h2>
          <p>Some of my favourite experiments, ideas, and projects will live here.</p>
          <div className="coming-soon">Projects are being prepared ✦</div>
        </section>

        <section className="content-section" id="skills">
          <div className="section-label">03 / MY TOOLKIT</div>
          <h2>Skills & <em>curiosities.</em></h2>
          <p>React · JavaScript · Python · Java · SQL · UI Design · Problem Solving</p>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="section-label">04 / SAY HELLO</div>
          <h2>Let's make something <em>lovely.</em></h2>
          <p>Have an idea, an opportunity, or just want to connect?</p>
          <a className="btn btn-primary" href="mailto:hello@example.com">
            Get in touch <ArrowUpRight size={18} />
          </a>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Amrah Imran · Built with imagination ✦</footer>
    </div>
  );
}

export default App;
