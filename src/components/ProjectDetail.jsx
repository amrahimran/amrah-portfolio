import { ArrowLeft, Code2, ExternalLink } from 'lucide-react';
import { Motif } from './Illustrations.jsx';
import { contact } from '../data/contact.js';

export default function ProjectDetail({ project, onBack }) {
  return (
    <div className="detail">
      <button className="text-button" onClick={onBack}><ArrowLeft size={17} /> All projects</button>
      <div className={`detail-banner ${project.color}`}>
        <div className="detail-banner-meta"><span>PROJECT FILE / {project.no}</span><span>{project.year}</span></div>
        <Motif type={project.motif} />
      </div>
      <div className="detail-grid">
        <div className="detail-intro">
          <span className="kicker">{project.kind}</span>
          <h1>{project.title}<span className="period">.</span></h1>
          <p className="detail-lead">{project.intro}</p>
          {project.github ? (
            <a className="github-cta" href={project.github} target="_blank" rel="noopener noreferrer">
              <Code2 size={20} aria-hidden="true" /> View on GitHub <ExternalLink size={17} aria-hidden="true" />
            </a>
          ) : (
            <a className="github-cta github-cta--secondary" href={contact.github} target="_blank" rel="noopener noreferrer" title="Direct repository link not yet verified">
              <Code2 size={20} aria-hidden="true" /> Browse my GitHub <ExternalLink size={17} aria-hidden="true" />
            </a>
          )}
          {!project.github && <p className="github-note">Direct repository link pending verification.</p>}
        </div>
        <div className="detail-copy"><span className="kicker">THE STORY</span><p>{project.story}</p>
          <span className="kicker">WHAT I WORKED ON</span><ul>{project.details.map((item) => <li key={item}>{item}</li>)}</ul>
          <span className="kicker">TOOLS & METHODS</span><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <p className="detail-status">{project.status}</p>

        </div>
      </div>
    </div>
  );
}
