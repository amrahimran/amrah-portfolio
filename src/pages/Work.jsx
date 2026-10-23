import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

const featuredIds = new Set(['hepatoai', 'ludo', 'bastion', 'bookstore', 'extension']);

export default function Work({ openProject }) {
  return (
            <section className="inner-page">
              <div className="section-heading"><span className="kicker">02 / THE THINGS I MAKE</span><h1>Selected <em>work.</em></h1><p>Research experiments, software projects and things I learned by making them. Pick a postcard to explore the story.</p></div>
              <div className="collection-heading"><span className="kicker">01 / FEATURED CASE STUDIES</span><span>SELECTED HIGHLIGHTS</span></div>
                <div className="project-grid">{projects.filter((project) => featuredIds.has(project.id)).map((project) => <ProjectCard key={project.id} project={project} onOpen={openProject} />)}</div>
                <div className="collection-heading collection-heading--archive"><span className="kicker">02 / MORE FROM THE COLLECTION</span><span>SMALLER PROJECTS & EXPERIMENTS</span></div>
                <div className="project-grid">{projects.filter((project) => !featuredIds.has(project.id)).map((project) => <ProjectCard key={project.id} project={project} onOpen={openProject} />)}</div>
            </section>
  );
}
