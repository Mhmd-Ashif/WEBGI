import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './home.css'
import headerImage from '../../assets/header.jpg'
import d1 from '../../assets/d1.jpeg'
import d2 from '../../assets/d2.png'
import d3 from '../../assets/d3.jpg'
import d4 from '../../assets/d4.jpg'
import d5 from '../../assets/d5.jpg'


function Home() {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="homeNavbar">
          <Navbar></Navbar>
        </div>
        <div className="homeSlogan">
          <h3>Connect - Create - Conquer</h3>
        </div>
        <div className="homeHeader">
          <div className="homeHeaderLeft">
            <h1>
            Unlock the Power of Tamil Nadu's Finest Web Experts
            </h1>
            <h3>Start Your Journey With Us.</h3>
            <h4>OUR SERVICES</h4>
          </div>
          <div className="homeHeaderRight">
            <img src={headerImage} alt="" />
          </div>
        </div>
        <div className="homeBody">
          <h1>WEBGI FREELANCERS’ COMMUNITY</h1>
          <h3>Let’s create something amazing together!</h3>
        </div>
        <div className="homeSubBody">
          <h1>WHAT WE CAN DO FOR YOU?</h1>
          <div className="cards">
          <div className="card">
            <img src={d1} alt="" />
            <h2>Consultation and Discovery</h2>
          </div>
          <div className="card">
          <img src={d2} alt="" />
            <h2>Custom Web Design and Development</h2>
          </div>
          <div className="card">
          <img src={d3} alt="" />
            <h2>Digital Marketing Strategy</h2>
          </div>
          <div className="card">
          <img src={d4} alt="" />
            <h2>Ongoing Support and Maintenance</h2>
          </div>
          <div className="card">
          <img src={d5} alt="" />
            <h2>Analytics and Optimization</h2>
          </div>
          </div>
        </div>
        <div className="homeFooter">
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default Home