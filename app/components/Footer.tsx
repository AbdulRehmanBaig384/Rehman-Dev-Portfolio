import { ArrowUpRight, ArrowUp, Github, Linkedin } from "lucide-react";
export default function Footer() {
  return <footer className="site-footer"><div className="footer-aura" aria-hidden="true" /><div className="shell">
    <div className="footer-top"><a href="#hero" className="footer-signature">Abdul Rehman<span>Engineer by discipline. Creative by nature.</span></a><div className="footer-links"><a href="https://github.com/AbdulRehmanBaig384" target="_blank" rel="noopener noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/abdul-rehman-baig-/" target="_blank" rel="noopener noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} /></a><a href="https://www.kaggle.com/rehamanengineer" target="_blank" rel="noopener noreferrer">Kaggle <ArrowUpRight size={13} /></a></div></div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} Abdul Rehman Baig</p><p>Built with curiosity. Crafted with care.</p><a href="#hero">Back to top <ArrowUp size={14} /></a></div>
  </div></footer>;
}
