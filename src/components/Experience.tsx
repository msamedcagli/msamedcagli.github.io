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
                  <p>Description: Until August, I completed an internship where I developed various mobile application projects using the Kotlin programming language. I integrated RESTful APIs to provide dynamic content and actively applied modern software architectures along with up-to-date Android technologies. Currently, I am continuing my career as a Smart Home Systems Developer, focusing on building intelligent and connected solutions.</p>
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