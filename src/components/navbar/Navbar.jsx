import './navbar.css'
import { Link } from 'react-router-dom'
import webGiLogo from '../../assets/webgi_logo.jpg'
import { useEffect, useState } from 'react'

function Navbar() {

    const [ collapsed, setCollapsed ] = useState(true);

    //useEffect to handle the error caused by the toggle elements when the window is resized
    useEffect(()=>{

        const handleResize = ()=>{
            if(window.innerWidth > 1060 ){
                setCollapsed(true);
            }
        }
        window.addEventListener('resize', handleResize);

        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    },[])

  return (
    <div className="navBarContainer">
        <div className="navBarWrapper">
            <div className="navBarTitle">
                <img src={webGiLogo} alt="webgi_logo" />
                <h2>WebGi</h2>
            </div>
            <div className="navBarElements">
                <ul className="navBarList">
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
            </div>
            <div className="navBarCollapse">
            <i className="fa-solid fa-bars" onClick={()=>setCollapsed(!collapsed)}></i>
            </div>
        </div>

        <div className="navBarCollapsedElements" style={ !collapsed ? {
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center'
        } : {}}>
                <ul className="navBarCollapsedList">
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
        </div>


    </div>
)
}

export default Navbar