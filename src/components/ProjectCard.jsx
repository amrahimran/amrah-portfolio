import { ArrowUpRight } from 'lucide-react';
import { Motif } from './Illustrations.jsx';

export default function ProjectCard({ project, onOpen }) {
  return (
    <button className={`postcard ${project.color}`} onClick={() => onOpen(project.id)}>
      <div className="postcard-top"><span>FIELD NOTE / {project.no}</span><span>{project.year}</span></div>
      <div className="postcard-art"><Motif type={project.motif} /><span className="postmark">A.I.<br />✳</span></div>
      <div className="postcard-body">
        <span className="kicker">{project.kind}</span>
        <div className="postcard-title-row"><h3>{project.title}</h3><ArrowUpRight size={22} /></div>
        <p>{project.intro}</p>
      </div>
    </button>
  );
}
