import { ArrowUpRight } from 'lucide-react';
import { Doodle } from '../components/Illustrations.jsx';

export default function Home({ navigate }) {
  return (
            <section className="landing">
              <div className="eyebrow-row"><span>AN INTRODUCTION, OF SORTS.</span><span>NO. 001 — EST. 2026</span></div>
              <div className="landing-grid">
                <div className="landing-copy">
                  <span className="kicker">HELLO, YOU'VE FOUND MY CORNER OF THE INTERNET.</span>
                  <h1>Part code.<br /><em>Part curiosity.</em><br />All me<span className="period">.</span></h1>
                  <p>I'm Amrah, a software engineering undergraduate who enjoys building useful things, investigating interesting questions and finding the story behind a solution.</p>
                  <button className="pill-button" onClick={() => navigate('work')}>Explore My Projects <ArrowUpRight size={18} /></button>
                </div>
                <div className="hero-art" aria-label="Illustrated paper collage">
                  <div className="hero-art-card art-card-blue"><span>NOTES FROM<br />SOMEWHERE<br /><i>IN BETWEEN.</i></span><Doodle type="star" /><small>VOL. 01 / 2026</small></div>
                  <div className="hero-art-card art-card-coral"><span>MAKE<br />THINGS<br />MATTER.</span><Doodle type="wave" /></div>
                  <div className="hero-art-stamp">A LITTLE BIT<br />OF EVERYTHING ↗</div>
                </div>
              </div>
              <div className="landing-bottom"><span>DEVELOPMENT / AI / ANALYSIS / LITTLE ADVENTURES</span><span>FLIP THROUGH THE INDEX ↗</span></div>
            </section>
  );
}
