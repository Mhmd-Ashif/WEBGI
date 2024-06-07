import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import dev1 from '../../assets/unknown-person.jpg'; // Replace with actual images of developers
import dev2 from '../../assets/unknown-person.jpg'; // Replace with actual images of developers
import dev3 from '../../assets/unknown-person.jpg'; // Replace with actual images of developers
import './join.css';

const Join = () => {
  return (
    <div className="joinContainer">
      <Navbar />
      <div className="joinWrapper">
        <h2>Join Our Team</h2>
        <p>Meet our web development experts</p>
        <div className="developerCards">
          <div className="developerCard">
            <img src={dev1} alt="Developer 1" />
            <h3>BASKARAN M S</h3>
            <p>CEO & Full Stack Developer</p>
            <div className="developerDetails">
              <p>Baskaran is a passionate full-stack developer with a knack for creating dynamic and responsive web applications. He has a solid understanding of both frontend and backend technologies and leads the team with a vision for innovation.</p>
            </div>
          </div>
          <div className="developerCard">
            <img src={dev2} alt="Developer 2" />
            <h3>MOHAMED ASHIF</h3>
            <p>Project Manager, React Expert & UX/UI Designer</p>
            <div className="developerDetails">
              <p>Mohamed Ashif excels in managing projects and designing user interfaces. His expertise in React and design ensures that our projects are both functional and aesthetically pleasing.</p>
            </div>
          </div>
          <div className="developerCard">
            <img src={dev3} alt="Developer 3" />
            <h3>HALISH RICHARD</h3>
            <p>CTO & Data Analyst</p>
            <div className="developerDetails">
              <p>Halish Richard is our chief technical officer and a data enthusiast. He brings analytical rigor to our projects, ensuring that our solutions are data-driven and efficient.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="teamfotter"></div>
      <Footer />
    </div>
  );
};

export default Join;
