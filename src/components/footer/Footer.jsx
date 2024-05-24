import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footerContainer">
        <div className="footerWrapper">
            <ul className="footerShareList">
                  <li><a href="#">
                      <i className="fa-brands fa-facebook"></i>
                  </a></li>
                  <li><a href="#">
                  <i className="fa-brands fa-twitter"></i>
                  </a></li>
                  <li><a href="#">
                      <i className="fa-brands fa-instagram"></i>
                  </a></li>
                  <li><a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                  </a></li>
            </ul>
            <ul className="footerList">
            <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/aboutUs'>
                        <li>About Us</li>
                    </Link>
                    <Link to='/ourServices'>
                        <li>Our Services</li>
                    </Link>
                    <Link to='/Contact'>
                        <li>Contact</li>
                    </Link>
                    <Link to='/JoinTeam'>
                        <li>Join Our Team</li>
                    </Link>
            </ul>
            <h3><i className="fa-regular fa-copyright"></i><b>2024 WEB DEV GLOBAL INNOVATION </b>| All Rights Reserved.</h3>
        </div>
    </div>
  )
}

export default Footer