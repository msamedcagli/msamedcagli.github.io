import React from 'react';
import linkedinLogo from '../linkedin.png';
import githubLogo from '../github.png';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contact</h2>
        <div className="row justify-content-center align-items-start">
          {/* Sol Sütun: İletişim Formu */}
          <div className="col-md-5 text-start">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="yourname@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea className="form-control" id="message" rows={5} placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
            </form>
          </div>

          {/* Sağ Sütun: Sosyal Medya Linkleri */}
          <div className="col-md-3 offset-md-1 d-flex flex-column justify-content-center align-items-center mt-5 mt-md-0">
            <h6 className="mt-5 mb-2 text-center">Social Media</h6>
            <ul className="list-unstyled social-links mb-4">
              <li className="mb-2 text-center">
                <a href="https://linkedin.com/in/msamedcagli" target="_blank" rel="noopener noreferrer" className="text-white d-block">
                  <img src={linkedinLogo} alt="LinkedIn" className="me-2" style={{ verticalAlign: 'middle', width: '24px', height: '24px' }} />
                  LinkedIn Profile
                </a>
              </li>
              <li className="mb-2 text-center">
                <a href="https://github.com/msamedcagli" target="_blank" rel="noopener noreferrer" className="text-white d-block">
                  <img src={githubLogo} alt="GitHub" className="me-2" style={{ verticalAlign: 'middle', width: '24px', height: '24px' }} />
                  GitHub Profile
                </a>
              </li>
            </ul>
            <p className="mb-0 text-center">Email: <a href="mailto:your_email@example.com" className="text-white">msamedcagli@gmail.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;