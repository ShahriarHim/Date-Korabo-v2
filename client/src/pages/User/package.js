import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

const Package = () => {
  return (
    <div>
      <Header />

      <section className="story-section padding-tb bg-img">
        <div className=" container">
          <div className="section-header">
            <h4>Love in Faith Success Stories</h4>
            <h2>Sweet Reviews Restaurants From Our Clients</h2>
          </div>
          <div className="section-wrapper">
            {/* <div className="row justify-content-center g-4">
              <div className="col-lg-4 col-md-6 col-12"> */}
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 col-12">
                <div className="story-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="assets/images/story/01.jpg" alt="img" />
                    </div>
                    <div className="lab-content">
                      <h4>
                        <a href="blog-single.html">Sweet & Simple</a>
                      </h4>
                      <p>
                        Seamlesly evolve unique web-readiness with Collabors
                        atively fabricate best of breed and apcations through{" "}
                      </p>
                      <Link to={`/pkg_details?type=finedine`} className="lab-btn">
                          <i className="icofont-circled-right" />
                          BOOK
                        </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 col-12">
                <div className="story-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="assets/images/story/02.jpg" alt="img" />
                    </div>
                    <div className="lab-content">
                      <h4>
                        <a href="blog-single.html">Enchantia</a>
                      </h4>
                      <p>
                        Seamlesly evolve unique web-readiness with Collabors
                        atively fabricate best of breed and apcations through{" "}
                      </p>
                      <Link to={`/pkg_details?type=rooftop`} className="lab-btn">
                          <i className="icofont-circled-right" />
                          BOOK
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-12">
                <div className="story-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="assets/images/story/03.jpg" alt="img" />
                    </div>
                    <div className="lab-content">
                      <h4>
                        <a href="blog-single.html">Dreamy Delights</a>
                      </h4>
                      <p>
                        Seamlesly evolve unique web-readiness with Collabors
                        atively fabricate best of breed and apcations through{" "}
                      </p>
                      <Link to={`/pkg_details?type=cafe`} className="lab-btn">
                          <i className="icofont-circled-right" />
                          BOOK
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-12">
                <div className="story-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="assets/images/story/03.jpg" alt="img" />
                    </div>
                    <div className="lab-content">
                      <h4>
                        <a href="blog-single.html">Custom Pack</a>
                      </h4>
                      <p>
                        Seamlesly evolve unique web-readiness with Collabors
                        atively fabricate best of breed and apcations through{" "}
                      </p>
                      <a href="/customPack" className="lab-btn">
                        <i className="icofont-circled-right" />
                        Customize{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Package;
