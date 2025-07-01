import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Experience</h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <ul className="list-unstyled timeline">
              <li className="mb-4">
                <div className="card p-4">
                  <h4 className="card-title">Delsa Bilgi ve Savunma Teknolojileri</h4>
                  <p className="text-muted">Mobile Application Development Intern</p>
                  <p className="text-muted">April 2025 - Present</p>
                  <p>Description: During my internship, I develop various mobile application projects using the Kotlin programming language. I provide dynamic content to applications by exchanging data with RESTful APIs. I actively use modern software architectures and up-to-date Android technologies in projects.</p>
                </div>
              </li>
              
              {/* Daha fazla deneyim eklenebilir */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;