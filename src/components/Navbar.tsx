import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const getNavLinkClass = (sectionId: string) => {
    return `nav-link ${activeSection === sectionId ? 'active' : ''}`;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#hero"><span style={{ fontFamily: 'monospace', fontSize: '2rem', fontWeight: 'bold', color: '#007bff' }}>&lt;/&gt;</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={getNavLinkClass('hero')} aria-current="page" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className={getNavLinkClass('about')} href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className={getNavLinkClass('experience')} href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className={getNavLinkClass('projects')} href="#projects">Technologies and Projects</a>
            </li>
            <li className="nav-item">
              <a className={getNavLinkClass('contact')} href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;