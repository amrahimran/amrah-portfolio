import { ArrowUpRight, Code2, BriefcaseBusiness, Mail, ExternalLink } from 'lucide-react';
import { contact } from '../data/contact.js';

export default function Contact() {
  return (
            <section className="contact-page"><span className="kicker">05 / LEAVE A NOTE</span><h1>Let's make<br /><em>something good.</em></h1><p>An opportunity, a collaboration or an interesting conversation , my inbox is open !</p>
              <a className="contact-cta" href={`mailto:${contact.email}`}>Say hello <ArrowUpRight size={23} /></a>
              <div className="social-links"><a href={contact.github} target="_blank" rel="noopener noreferrer"><Code2 size={17} /> GitHub <ExternalLink size={13} /></a><a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><BriefcaseBusiness size={17} /> LinkedIn <ExternalLink size={13} /></a><a href={`mailto:${contact.email}`}><Mail size={17} /> Email <ExternalLink size={13} /></a></div>
            </section>
  );
}
