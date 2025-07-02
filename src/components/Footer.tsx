import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>Muhammed Samed Çağlı &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
