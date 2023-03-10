import React from 'react';
import icon_price from '../Assets/icon_price.png';
import icon_complete from '../Assets/icon_complete.png';
import icon_waktu from '../Assets/icon_waktu.png';
import icon_professional from '../Assets/icon_professional.png';
import './Whyus.css';

const WhyUs = () => {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="why-head">
          <h3>Why Us?</h3>
          <h4>Mengapa harus pilih Binar Car Rental?</h4>
        </div>
        
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="why-border">
              <div className="why-content">
                <img src={icon_complete} alt="" />
                <h4>Mobil Lengkap</h4>
                <h5>
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="why-border">
              <div className="why-content">
                <img src={icon_price} alt="" />
                <h4>Harga Murah</h4>
                <h5>
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="why-border">
              <div className="why-content">
                <img src={icon_waktu} alt="" />
                <h4>Layanan 24 Jam</h4>
                <h5>
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="why-border">
              <div className="why-content">
                <img src={icon_professional} alt="" />
                <h4>Sopir Profesional</h4>
                <h5>
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default WhyUs;
