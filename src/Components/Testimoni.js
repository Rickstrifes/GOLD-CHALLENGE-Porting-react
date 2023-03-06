import React from 'react';
import './Testimoni.css';
import jhon from '../Assets/jhon.png';
import jinny from '../Assets/jinny.png';
import Rate from '../Assets/star.svg';
import Leftbutton from '../Assets/Leftbutton.png';
import Rightbutton from '../Assets/Rightbutton.png';


const Testimoni = () => {
    return (
            <section id="testi" className="testimonial">
                <div className="container mt-5 pt-3">
                    <div className="row text-center">
                        <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                            <h1 className="fw-bold">Testimonial</h1>
                            <h6 className="fw-bold">Berbagai review positif dari para pelanggan kami</h6>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row g-5 justify-content-evenly d-flex flex-lg-row flex-nowrap">
                        <div className="col-lg-6">
                            <div className="card mt-5 mb-5 custom-card-testimoni">
                                <div className="row g-0">
                                    <div className="col-2 col-md-4 mt-5 mb-5">
                                        <img src={jinny} alt="jhon"
                                        className="jhon img-fluid position-absolute top-50 start-0 translate-middle" />
                                    </div>
                                    <div className="col-6 col-md-7">
                                        <div className="card-body d-flex flex-column">
                                            <div className="h-100">
                                                <div className="rate">
                                                    <img src={Rate} alt="" />
                                                    <img src={Rate} alt="" />
                                                    <img src={Rate} alt="" />
                                                    <img src={Rate} alt="" />
                                                    <img src={Rate} alt="" />
                                                </div>
                                                <p className="fw-bold mt-1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                                </p>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                    <span id="text-name">John Dee 32, Bromo</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card mt-5 mb-5 custom-card-testimoni position-relative">
                                <div className="row g-0 customrow">
                                    <div className="col-2 col-md-4 mt-5 mb-5">
                                        <img src={jhon} alt="jhon"
                                        className="jhon jhon2 img-fluid position-absolute top-50 start-0 translate-middle" />
                                    </div>
                                    <div className="col-6 col-md-7">
                                        <div className="card-body d-flex flex-column">
                                            <div className="h-100 jalansendiri">
                                                <div className="sijhon position-relative d-lg-none d-xxl-none d-md-none d-sm-none d-xl-none">
                                                    <img src={jhon} alt="jhon" />
                                                </div>
                                                <div className="rate">
                                                    <img src={Rate} alt="" />
                                                    <img src={Rate} alt="" />
                                                    <img src={Rate} alt="" />
                                                    <img src={Rate} alt="" />
                                                    <img src={Rate} alt="" />
                                                </div>
                                                <p className="fw-bold mt-1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                                </p>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                    <span id="text-name">John Dee 32, Bromo</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card mt-5 mb-5 custom-card-testimoni">
                                <div className="row g-0">
                                    <div className="col-2 col-md-4 mt-5 mb-5">
                                        <img src={jinny} alt="jhon"
                                        className="jhon img-fluid position-absolute top-50 start-0 translate-middle" />
                                    </div>
                                    <div className="col-6 col-md-7">
                                        <div className="card-body d-flex flex-column">
                                            <div className="h-100">
                                                <div className="rate">
                                                    <img src={Rate} alt="" />
                                                    <img src={Rate} alt="" />
                                                    <img src={Rate} alt="" />
                                                    <img src={Rate} alt="" />
                                                    <img src={Rate} alt="" />
                                                </div>
                                                <p className="fw-bold mt-1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                                </p>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                    <span id="text-name">John Dee 32, Bromo</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <div className="btn di-pencet">
                        <button type="button" className="pencetKiri"><img src={Leftbutton} alt="left" /></button>
                        <button type="button" className="pencetKanan"><img src={Rightbutton} alt="right" /></button>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Testimoni