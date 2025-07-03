import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-4">
      <div className="container">
        {/* Teknolojiler Bölümü */}
        <h2 className="text-center mb-4 mt-4">Technologies</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-4">
          {/* Yazılım Dilleri Kartı */}
          <div className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center mb-3">Programming Languages</h5>
                <div className="mb-3">
                  <h6 className="mb-1">Java</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="mb-1">Kotlin</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>90%</div>
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="mb-1">Python</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>70%</div>
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="mb-1">JavaScript</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>60%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Web&Mobil Teknolojileri Kartı */}
          <div className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center mb-3">Web & Mobile Technologies</h5>
                <div className="mb-3">
                  <h6 className="mb-1">HTML&CSS</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>65%</div>
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="mb-1">Node.js/Express.js</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>60%</div>
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="mb-1">XML and Jetpack Compose</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%</div>
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="mb-1">RESTful APIs</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>70%</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* Araçlar ve Altyapı Kartı */}
          <div className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center mb-3">Tools & Infrastructure</h5>
                <div className="mb-3">
                  <h6 className="mb-1">Git & Github</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>90%</div>
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="mb-1">Firebase</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="mb-1">AWS (EC2, S3)</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>60%</div>
                  </div>
                </div>
              </div> {/* Closes card-body */}
            </div> {/* Closes card */}
          </div> {/* Closes col */}
        </div> {/* Closes row for technologies */}

        <h2 className="text-center mb-4">Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-4">
          {/* Proje Kartı 1 */}
          <div className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Kitap Önerilerim</h5>
                <p className="card-text">This app focuses on personalized book recommendations, helping users discover new reads tailored to their interests. Users can browse, search, add favorites, and explore curated lists. *The project is still under development.*</p>
                <div className="mt-auto ms-3">
                  <a href="#" className="btn btn-loading-gray me-2">Loading..</a>
                </div>
              </div>
            </div>
          </div>

          {/* Proje Kartı 2 */}
          <div className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Pinterest Clone</h5>
                <p className="card-text">Real-time Android app using Firebase and Unsplash API. Users can register, log in, upload photos, and download images to their devices.</p>
                <div className="mt-auto ms-3">
                  <a href="https://github.com/msamedcagli/PinterestApp" className="btn btn-outline-light">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Proje Kartı 3 */}
          <div className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Whatsapp Clone</h5>
                <p className="card-text">This project is a real-time messaging app built with modern Android technologies and Firebase. Users can register, log in, start conversations, and send messages.</p>
                <div className="mt-auto ms-3">
                  <a href="https://github.com/msamedcagli/ChatGPT_Clone" className="btn btn-outline-light">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Daha fazla proje eklenebilir */}
        </div>
      </div>
    </section>
  );
};

export default Projects;