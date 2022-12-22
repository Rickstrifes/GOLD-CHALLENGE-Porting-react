import React from 'react';
import './Ourservices.css';
import mbak from '../Assets/mbak.png';
import iconcentang from '../Assets/iconcheck.png';


const Ourservices = () => {
    return (
        <section id="services" className="ourservices">
            <div className="container pt-5 mt-5 container-mba">
            <div className="row custom-mba">
            <div className="col-sm-6 mb-5 ">
            <img src={mbak} alt="mbak" className="img-fluid ms-lg-5" />
            </div>
            <div className="col-sm-6 mt-5 services-text">
            <h2 className="mb-4 text-style-bestcar">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p className="text-style-describe-car">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi
                mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <ul className="list-icon">
                <li>
                <p className="text-style-car-check mb-2"><img src={iconcentang} alt="check" className="me-lg-3" />Sewa
                    Mobil Dengan
                    Supir di Bali 12 Jam</p>
                </li>
                <li>
                <p className="text-style-car-check mb-2"><img src={iconcentang} alt="check" className="me-lg-3" />Sewa
                    Mobil Lepas Kunci
                    di Bali 24 Jam</p>
                </li>
                <li>
                <p className="text-style-car-check mb-2"><img src={iconcentang} alt="check" className="me-lg-3" />Sewa
                    Mobil Jangka
                    Panjang Bulanan</p>
                </li>
                <li>
                <p className="text-style-car-check mb-2"><img src={iconcentang} alt="check" className="me-lg-3" />Gratis
                    Antar - Jemput
                    Mobil di Bandara</p>
                </li>
                        <li>
                        <p className="text-style-car-check mb-2"><img src={iconcentang} alt="check"
                            className="me-lg-3" />Layanan Airport
                            Transfer / Drop In Out</p>
                        </li>
                            </ul>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default Ourservices
