import React from 'react';
import './Searchbar.css';
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
    const navigate = useNavigate();

    const handleNavigateToHasilPencarianPage = () => {
        navigate ('/hasilpencarian')
    }

    return (
        <div className="container booking pb-5 wow fadeIn" id="form">
                <div className="container bookingborder">
                    <div className="bg-white " style={{padding:'25px;'}}>
                            <div  iv className="row">
                                <div className="col-md-10">
                                    <div className="row">
                                        <div className="col-md-3 ">
                                            <label for="cars" className="text-styler">Nama Mobil</label>
                                            <input type="text" className="form-control customlabel" placeholder="Ketik nama/tipe mobil" />
                                        </div>
                                        <div className="col-md-3 ">
                                            <label for="cars" className="text-styler">Kategori</label>
                                            <input type="text" className="form-select customlabel" placeholder="Masukan Kapasitas Mobil" />
                                        </div>
                                        <div className="col-md-3 ">
                                            <label for="cars" className="text-styler">Harga</label>
                                            <input type="text" className="form-select customlabel" placeholder="Masukan Harga Sewa per Hari" />
                                        </div>
                                        <div className="col-md-3 ">
                                            <label for="cars" className="text-styler">Status</label>
                                            <input type="text" className="form-select customlabel" placeholder="Disewa" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 btn-customize">
                                    <button className="btn-customformer text-start text-white fw-bold" onClick={handleNavigateToHasilPencarianPage}>Cari Mobil</button>
                                </div>
                            </div>
                    </div>
                </div>  
        </div>
    )
};

export default Searchbar