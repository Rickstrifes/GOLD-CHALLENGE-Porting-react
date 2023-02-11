import React from 'react';
import './CardCarDetail.css';
import kategori from '../Assets/kategori.png';

const CardCarDetail = (props) => {
    
    const carID = props.carID

    
    return (
        <section id="hasilpencarian" className="hasilpencarianmobil">
            <div className="container mb-5 pb-5">
                <div className="row">
                        <div className="col-lg-7">
                            <div className="card h-100 style-detail-sewa-card">
                                <div className="card-body">
                                    <div className="mt-2 ms-2">
                                        <h5 className="stylepaket-text">Tentang Paket</h5>
                                    </div>
                                    <div className="mt-2 ms-2">
                                        <h5 className="stylepaket-text">Include</h5>
                                        <div className="ms-2 text-muted style-paket-list">
                                            <li className="bi bi-dot">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                            <li className="bi bi-dot">Sudah termasuk bensin selama 12 jam</li>
                                            <li className="bi bi-dot">Sudah termasuk Tiket Wisata</li>
                                            <li className="bi bi-dot">Sudah termasuk pajak</li>
                                        </div>
                                    </div>
                                    <div className="mt-2 ms-2">
                                        <h5 className="stylepaket-text">Exclude</h5>
                                        <div className="ms-2 text-muted style-paket-list">
                                            <li className="bi bi-dot">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li className="bi bi-dot">Jika Overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li className="bi bi-dot">Tidak termasuk akomodasi penginapan</li>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mt-2 ms-2">
                                            <h5 className="stylepaket-text">Refund, Reschedule, Overtime</h5>
                                        <div className="ms-2 text-muted style-paket-list">
                                            <li className="bi bi-dot">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li className="bi bi-dot">Jika Overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li className="bi bi-dot">Tidak termasuk akomodasi penginapan</li>
                                            <li className="bi bi-dot">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li className="bi bi-dot">Jika Overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li className="bi bi-dot">Tidak termasuk akomodasi penginapan</li>
                                            <li className="bi bi-dot">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li className="bi bi-dot">Jika Overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li className="bi bi-dot">Tidak termasuk akomodasi penginapan</li>
                                        </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="card style-detail-sewa-card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-center d-sm-flex justify-content-sm-center">
                                        <img src={props.image} alt="inimobil" />
                                    </div>
                                    <div className="mt-5 ms-3">
                                        <h5 className="stylepaket-text" key={carID}>{props.name}</h5>
                                        <img src={kategori} alt="inimobil" />
                                        <p key={carID}>{props.category}</p>
                                    </div>
                                    <div className="mt-5 mb-5  ms-3 d-flex justify-content-between">
                                        <h5 className="stylepaket-text">Total</h5>
                                        <h5 className="stylepaket-text me-1" key={carID}>{props.price}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>    
            </div>
        </section>
    )
}

export default CardCarDetail