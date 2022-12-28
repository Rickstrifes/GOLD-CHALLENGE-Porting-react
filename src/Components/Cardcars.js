import React from 'react';
import './Cardcars.css';
import { useNavigate } from 'react-router-dom';

const Cardcars = (props) => {
    const carID = props.carID;

    const navigate = useNavigate();
    const handlePilihMobil = (idMobil) => {
        navigate('/detailpaketsewa', { state: { idMobil: idMobil } });
    };

    return (
            <div className="col-lg-4 pt-5">
                <div className="card">
                    <div className="card-body testcardcar">
                        <img src={props.image} className="card-img-top innova-img mt-5" alt="innova" />
                        <div className="mt-5 pt-3">
                            <span className="text-black p-2 mt-5 innova-style-text-span" key={carID}>{props.name}</span>
                                <h5 className="card-title p-2 innova-style-text-h5" key={carID}>{props.price} / hari</h5>
                                <p className="card-text p-2 innova-style-text-p">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                        </div>
                    </div>
                        <button className="btn btn-primary card-car-btn fw-bold" onClick={() => handlePilihMobil(carID)}>Pilih Mobil</button>
                </div>
            </div>
    )
}

export default Cardcars