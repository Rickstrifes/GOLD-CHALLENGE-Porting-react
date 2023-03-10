import React from 'react';
import './Footer.css';
import FbIcon from '../Assets/icon_facebook.png';
import IgIcon from '../Assets/icon_instagram.png';
import TwtIcon from '../Assets/icon_twitter.png';
import MailIcon from '../Assets/icon_mail.png';
import TwcIcon from '../Assets/icon_twitch.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-8">
            <div className="address">
              <h4>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h4>
              <h4>binarcarrental@gmail.com</h4>
              <h4>081-233-334-808</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <ul className="nav-footer">
              <li>
                <a href="our-services">Our Services</a>
              </li>
              <li>
                <a href="why-us">Why Us</a>
              </li>
              <li>
                <a href="testimonial">Testimonial</a>
              </li>
              <li>
                <a href="faq">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-8">
            <div className="info-binar">
              <h4>Connect with us</h4>
              <a href="https://www.facebook.com/binaracademy/">
                <img src={FbIcon} alt="" />
              </a>
              <a href="https://www.instagram.com/academybinar/">
                <img src={IgIcon} alt="" />
              </a>
              <a href="https://twitter.com/academybinar">
                <img src={TwtIcon} alt="" />
              </a>
              <a href="info@binar.co.id">
                <img src={MailIcon} alt="" />
              </a>
              <a href="https://m.twitch.tv/">
                <img src={TwcIcon} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="copyright">
              <h4>&copy; Copyright Binar 2022</h4>
              <p className="brand-logo m-auto"></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;