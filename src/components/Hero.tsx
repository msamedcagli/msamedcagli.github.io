import React from 'react';
import TypingEffect from './TypingEffect.tsx';

const Hero: React.FC = () => {
  const professions = ["I'm a Software Developer","I'm a Computer Engineering Student"];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="d-flex align-items-center justify-content-center text-center vh-100">
      <div className="container">
        <h1 className="display-1 fw-bold mb-3">Hello, I'm Samed</h1>
        <p className="lead fs-3 mb-5">
          <TypingEffect words={professions} />
        </p>
        <button className="btn btn-primary btn-lg" onClick={scrollToAbout}>
          About Me <img src="/arrow-down.svg" alt="Down Arrow" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} className="ms-2" />
        </button>
      </div>
    </section>
  );
};

export default Hero;