import './Hero.css';
import mercybg from '../Assets/mercybg.png';
import React from 'react';


const Hero = () => {
    return (
        <section id="container" className="hero">
            <div className="container mb-1 banner ">
                <div className="row custom-margin">
                    <div className="col-sm-6 margin-text">
                        <h1 className="text-styled">
                            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                        </h1>
                        <p className="text-styledd">
                            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                            Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                        </p>
                        <button type="button" className="btn btn-primaryy "><span className="style-button">Mulai Sewa Mobil</span></button>
                    </div>
                    <div className="col-sm-6 mobil">
                        <img src={mercybg} alt="mobil" className="bg  img-fluid bottom-0 end-0" />
                    </div>
                </div>
            </div>
    </section>
    );
}

export default Hero