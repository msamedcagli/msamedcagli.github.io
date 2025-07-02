import React, { useState } from 'react';
import linkedinLogo from '../linkedin.png';
import githubLogo from '../github.png';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setResponseMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mvgrypzb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, message })
      });

      if (response.ok) {
        setStatus('success');
        setResponseMessage('Your message has been sent successfully!');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json();
        setStatus('error');
        setResponseMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setResponseMessage('Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contact</h2>
        <div className="row justify-content-center align-items-start">
          {/* Sol Sütun: İletişim Formu */}
          <div className="col-md-5 text-start">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="yourname@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {responseMessage && (
                <div className={`mt-3 alert ${status === 'success' ? 'alert-success' : 'alert-danger'}`}>
                  {responseMessage}
                </div>
              )}
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