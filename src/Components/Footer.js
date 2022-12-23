import React from 'react';
import IconFacebook from '../Assets/icon_facebook.png';
import IconInstagram from '../Assets/icon_instagram.png';
import IconTwitter from '../Assets/icon_twitter.png';
import IconMail from '../Assets/icon_mail.png';
import IconTitch from '../Assets/icon_twitch.png';
import './Footer.css';
import { Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer class=" pt-5 pb-4">
        <div class="container text-center text-sm-start text-sm-left">
            <div class="row text-center text-sm-left">
                <div class="col-md-3 col-lg-3 col-xl-3  mt-3">
                    <p class="text-lg-start text-sm-start text-footer">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p class="text-lg-start text-footer">binarcarrental@gmail.com</p>
                    <p class="text-lg-start text-footer">081-233-334-808</p>
                </div>
                <div class="col-sm-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <p>
                        <Nav.Link className="text-black text-footer1">Our services</Nav.Link>
                    </p>
                    <p>
                        <Nav.Link className="text-black text-footer1">Why Us</Nav.Link>
                    </p>
                    <p>
                        <Nav.Link className="text-black text-footer1">Testimonial</Nav.Link>
                    </p>
                    <p>
                        <Nav.Link className="text-black text-footer1">FAQ</Nav.Link>
                    </p>
                </div>
                <div class="col-sm-4 col-lg-4 col-xl-3 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 text-footer2">Connect with us</h5>
                    <img src={IconFacebook} alt="facebook" />
                    <img src={IconInstagram} alt="instagram" />
                    <img src={IconTwitter} alt="twitter" />
                    <img src={IconMail} alt="mail" />
                    <img src={IconTitch} alt="twitch" />
                </div>
                <div class="col-sm-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <p class="text-uppercase mb-4 text-footer2">Copyright Binar 2022</p>
                    <p class="brand-logo m-auto"></p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer