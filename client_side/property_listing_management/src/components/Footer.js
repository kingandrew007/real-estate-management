import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
function Footer() {
  return (
    <div style={{marginTop:"100px"}}>
      <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><Link className="social-icon__link" to="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </Link></li>
      <li className="social-icon__item"><Link className="social-icon__link" to="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </Link></li>
      <li className="social-icon__item"><Link className="social-icon__link" to="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </Link></li>
      <li className="social-icon__item"><Link className="social-icon__link" to="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </Link></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><Link className="menu__link" to={'/'}>Home</Link></li>
      <li className="menu__item nav-item">
                <HashLink to='#about' className="menu__link nav-link active text-light" aria-current="page">About</HashLink>
              </li>
      {/* <li className="menu__item"><Link className="menu__link" to="#">Services</Link></li> */}
      {/* <li className="menu__item"><Link className="menu__link" to="#">Team</Link></li> */}
      <li className="menu__item"><Link  className="menu__link" to={'/contact'}>Contact</Link></li>

    </ul>
    <p>&copy;2024 Andrew Hudson | All Rights Reserved</p>
  </footer>

    </div>
  )
}

export default Footer;
