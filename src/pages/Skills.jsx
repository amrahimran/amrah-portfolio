import { skillGroups } from '../data/skills.js';

export default function Skills() {
  return (
            <section className="inner-page"><div className="section-heading"><span className="kicker">04 / MY TOOLKIT</span><h1>Things I <em>work with.</em></h1><p>A mix of technologies, approaches and tools I've used across projects.</p></div>
              <div className="skills-table">{skillGroups.map((group, index) => <div className="skills-row" key={group.name}><span>0{index + 1}</span><h3>{group.name}</h3><p>{group.items}</p></div>)}</div>
              <div className="experience-strip"><span className="kicker">ALSO PART OF THE STORY</span><div><h3>Freelance web development tutor</h3><p>March – October 2024 · Helping learners understand web development through practical explanations.</p></div><div><h3>Scrum project roles</h3><p>Bastion · User stories, backlog management, project coordination and development using Trello and ClickUp.</p></div></div>
            </section>
  );
}
