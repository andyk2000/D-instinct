import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/Logo-letters.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton()
    })

    window.addEventListener('resize', showButton);

    const Changebackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        }else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', Changebackground)

  return (
    <>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div className='navbar-container'>
                <Link to="/" className="logo-container" onClick={closeMobileMenu}>
                    <img src={logo} alt='' className='logo'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                            ABOUT
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Articles' className='nav-links' onClick={closeMobileMenu}>
                            ARTICLES
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                            CONTACT
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                            SUPPORT
                        </Link>
                    </li>
                </ul>
                <button className='sign-up'>SIGN UP</button>
            </div>
        </nav>
    </>
  )
}

export default Navbar;