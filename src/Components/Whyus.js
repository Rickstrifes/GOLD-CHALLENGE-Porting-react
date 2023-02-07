import './Whyus.css';
import React from 'react';
import icon_price from '../Assets/icon_price.png';
import icon_complete from '../Assets/icon_complete.png';
import icon_waktu from '../Assets/icon_waktu.png';
import icon_professional from '../Assets/icon_professional.png';


const Whyus = () => {
  return (
    <section id="whyus" className="card-whyus">
        <div className="container pt-5 mt-5 mb-5 pb-5">
            <div className="row">
                <div className="col-12 text-start">
                    <h2 className="fw-bold fs-2">Why Us</h2>
                    <span className="sub-title fw-bolder">Mengapa harus pilih Binar Car Rental?</span>
                </div>
                <div className="row mt-4 d-flex flex-row justify-content-evenly">
                    <div className="col-sm-3 customcardbodyy">
                        <div className="card h-100 customcardbody">
                        <div className="card-body customcardbodyyy">
                            <h5 className="card-title"><img src={icon_price} alt="iconcomplete" /></h5>
                            <p className="card-text mt-3 fw-bold">Mobil Lengkap</p>
                            <span className="card-texty">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3 customcardbodyy">
                        <div className="card h-100 customcardbody">
                        <div className="card-body customcardbodyyy">
                            <h5 className="card-title"><img src={icon_complete} alt="iconcomplete" /></h5>
                            <p className="card-text mt-3 fw-bold">Harga Murah</p>
                            <span className="card-texty">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil
                            lain</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3 customcardbodyy">
                        <div className="card h-100 customcardbody">
                        <div className="card-body customcardbodyyy">
                            <h5 className="card-title"><img src={icon_waktu} alt="iconcomplete" /></h5>
                            <p className="card-text mt-3 fw-bold">Layanan 24 Jam</p>
                            <span className="card-texty">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir
                            minggu</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3 customcardbodyy">
                        <div className="card h-100 customcardbody">
                        <div className="card-body customcardbodyyy">
                            <h5 className="card-title"><img src={icon_professional} alt="iconcomplete" /></h5>
                            <p className="card-text mt-3 fw-bold">Sopir Professional</p>
                            <span className="card-texty">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
                            waktu</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
  )
}

export default Whyus


