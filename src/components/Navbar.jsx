import { useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolio } from "../data/portfolio";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#" className="logo">
          <span>&lt;</span>
          {portfolio.name.split(" ")[0]}
          <span>/&gt;</span>
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noreferrer"
          className="nav-resume"
        >
            Resume
        </a>

        <a
          href={portfolio.social.github}
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          GitHub
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {isOpen && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;