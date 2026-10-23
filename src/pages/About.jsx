import { Doodle, Sketch } from '../components/Illustrations.jsx';

export default function About() {
  return (
            <section className="inner-page">
              <div className="section-heading"><span className="kicker">03 / THE HUMAN BEHIND THE SCREEN</span><h1>A little <em>about me.</em></h1></div>
              <div className="about-layout"><div className="about-prose">
                <p className="about-lead">I like figuring out <em>how things work</em>  and asking whether there's a better way to make them.</p>
                <p>I'm completing a BEng (Hons) in Software Engineering at Staffordshire University. My projects have taken me from building Java game engines and cybersecurity applications to researching machine learning for clinical decision support.</p>
                <p>I'm equally interested in the thinking around the technology: exploring data, understanding requirements, explaining findings and making complicated ideas feel approachable.</p>
                <p>And outside the screen? Usually a book, the ocean, or a café I haven't tried yet.</p>
              </div><div className="interests"><div className="interests-title">OFF THE CLOCK <Doodle type="loop" /></div>
                <div className="interest-item"><span className="interest-icon"><Sketch type="reading" /></span><div><strong>Reading</strong><small>For the stories, ideas and rabbit holes.</small></div></div>
                <div className="interest-item"><span className="interest-icon"><Sketch type="ocean" /></span><div><strong>The ocean</strong><small>My favourite place to clear my head.</small></div></div>
                <div className="interest-item"><span className="interest-icon"><Sketch type="coffee" /></span><div><strong>Café hopping</strong><small>Always up for finding a new little spot.</small></div></div>
                <div className="interest-footer">COLLECTING SMALL MOMENTS, TOO. ↗</div>
              </div></div>
            </section>
  );
}
