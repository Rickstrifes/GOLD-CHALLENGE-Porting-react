import React from 'react';
import './Calltoaction.css';
import { useNavigate } from "react-router-dom";

const Calltoaction = () => {
    const navigate = useNavigate();

    const handleNavigateToCariMobilPage = () => {
    navigate('/carimobil')
    };

    return (
        <section id="CTA" className="calltoaction">
            <div className="container cta pt-5 mt-5 mb-5">
                <div className="row pt-3 ">
                    <div className="col-lg-12 col-sm-4">
                        <h1 className="text-center text-white">Sewa Mobil di (Lokasimu) Sekarang</h1>
                        <p className="text-center text-white pt-2 fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            <br />eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div className="row justify-content-center pt-5 mb-5">
                            <div className="col-lg-2 col-sm-3 custom-btn overflow-hidden">
                            <button type="button" className="btn btn-success fw-bold" onClick={handleNavigateToCariMobilPage}>Mulai SewaMobil</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calltoaction