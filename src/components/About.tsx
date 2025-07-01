import React from 'react';
import profileImage from '../profile.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <img
              src={profileImage}
              alt="Profil Resmi"
              className="img-fluid rounded-circle mb-4"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h2 className="mb-4">Hello, I'm Muhammed Samed!</h2>
            <p style={{ textAlign: 'justify' }}>
              As a 3rd-year Computer Engineering student at Istanbul Atlas University, I am constantly striving to advance myself in the ever-evolving world of software development. I develop Android applications with Kotlin and create real-time, data-driven projects using RESTful APIs.
            </p>
            <p style={{ textAlign: 'justify' }}>
              I enjoy creating innovative solutions, delving into the depths of systems, and simplifying complex structures to make them meaningful. On this journey, I am firmly committed to both traditional software principles and modern technologies.
            </p>
            <p style={{ textAlign: 'justify' }}>
              In my free time, I research system programming, cybersecurity, and new software architectures. I also develop automation and analysis projects with Python libraries that simplify life, providing solutions to real-world problems. With every line of code, I strive to master more and explore the limits of software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;