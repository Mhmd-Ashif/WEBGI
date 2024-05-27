import Navbar from "../../components/navbar/Navbar";
import "./about.css";
import aboutus from "../../assets/aboutus.jpeg";
import solve from "../../assets/solve.png";
import Footer from "../../components/footer/Footer";
import blog from "../../assets/blog.png";
import portfolio from "../../assets/portfolio.png";
import booking from "../../assets/booking.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="wave-top-left"></div>
      <div className="wave-bottom-right"></div>
      <Navbar />
      <div className="weContainer">
        <div className="weContainerLeft">
          <h2 className="aboutus">About Us</h2>
          <p>
            Our story begins with a simple idea: that the web is not just a
            place to connect, but a canvas for innovation and growth. With this
            belief at our core, we set out on a mission to redefine what it
            means to create impactful online experiences. From the cobblestone
            alleys of Chennai to the lush landscapes of Coimbatore, our journey
            has taken us far and wide, shaping the digital footprint of Tamil
            Nadu and leaving a trail of success in our wake.
          </p>
          <p>
            But our story is not just about us it's about you, our valued
            clients, who entrust us with your dreams and aspirations. Whether
            you're a budding entrepreneur with a vision or an established
            business looking to evolve, we're here to be your partners in
            progress, guiding you every step of the way on your journey to
            success.
          </p>
        </div>
        <div className="weContainerRight">
          <img src={aboutus} alt="about us vector art" />
        </div>
      </div>
      <br></br>
      <div className="section-outer">
        <h2 className="section-title">What We Solve</h2>
        <p className="section-paragraph">
          At Webgi, we specialize in providing top-tier tech solutions using the
          MERN stack (MongoDB, Express.js, React, Node.js) and other popular
          technologies. Our goal is to deliver innovative and effective
          web-based solutions that cater to the unique needs of both startups
          and established businesses. Whether you're an aspiring startup looking
          to establish a strong online presence or a running business aiming to
          enhance your digital footprint, Webgi is here to assist you. Our wide
          range of services includes
        </p>
        <div className="section-container">
          <div className="image-container">
            <img src={solve} alt="About Us" className="about-image" />
          </div>
          <div className="content-container">
            <ul className="solve-list">
              <li>Custom web application development</li>
              <li>Responsive and user-friendly website design</li>
              <li>Backend API development and integration</li>
              <li>Scalable cloud solutions</li>
              <li>E-commerce platform development</li>
              <li>Real-time application development</li>
              <li>Maintenance and support services</li>
            </ul>
          </div>
        </div>
        <p className="section-paragraph">
          We take pride in transforming your vision into reality with our
          cutting-edge technology and client-centric approach. Partner with
          Webgi to navigate the complexities of the digital world and achieve
          your business goals seamlessly.
        </p>
      </div>
      <div className="service-container">
        <h2 className="aboutus service-title">Our Services</h2>
        <p className="section-paragraph service-paragraph">
          " Explore Our Various Services and Find One that Matches your Need ,
          Hence we Solve multiple Problems There are products that we can Build{" "}
          "
        </p>
        <div className="carousel-bs">
          <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={blog} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Blog Site Creation</h5>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={portfolio} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Company Portfolio Website</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img src={booking} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Booking Websites</h5>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="link-container">
          <Link to="/ourServices" className="link">
            See More →
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
