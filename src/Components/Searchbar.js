import React from 'react';
import './Searchbar.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const initialValues = {
    namaMobil: "",
    kategoriMobil: "default",
    hargaMobil: "default",
    statusMobil: false,
};

const Searchbar = () => {
    const [values, setValues] = useState(initialValues);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/hasilpencarian', { state: { namaMobil: values.namaMobil, kategoriMobil: values.kategoriMobil,hargaMobil: values.hargaMobil, statusMobil: values.statusMobil } });
    };
    

    return (
        <section className="booking pb-5 wow fadeIn" id="form">
                <div className="container bookingborder">
                    <div className="bg-white " >
                            <div  iv className="row">
                                <div className="col-lg-12">
                                    <form className="row g-2" onSubmit={handleSubmit}>
                                        <div className="col-lg">
                                            <label htmlFor="namaMobil" className="text-styler">Nama Mobil</label>
                                            <input id="namaMobil" name="namaMobil" defaultValue={values.namaMobil} onChange={handleInputChange}  type="text" className="form-control customlabel" placeholder="Ketik nama/tipe mobil" />
                                        </div>
                                        <div className="col-lg">
                                            <label htmlFor="kategoriMobil" className="text-styler">Kategori</label>
                                            <select id="kategoriMobil" name="kategoriMobil" defaultValue={values.kategoriMobil} onChange={handleInputChange} className="form-select customlabel">
                                                <option value="default" disabled>Masukan Kapasitas Mobil</option>
                                                <option value="small">2 - 4 orang</option>
                                                <option value="medium">4 - 6 orang</option>
                                                <option value="large">6 - 8 orang</option>
                                            </select>
                                        </div>
                                        <div className="col-lg">
                                            <label htmlFor="hargaMobil" className="text-styler">Harga</label>
                                            <select id="hargaMobil" name="hargaMobil" defaultValue={values.kategoriMobil} onChange={handleInputChange} className="form-select customlabel" placeholder="Masukan Harga Sewa per Hari">
                                                <option value="default" disabled>Masukan Harga Sewa per Hari</option>
                                                <option value="dibawah400">&#60; Rp. 400.000</option>
                                                <option value="400600">Rp. 400.000 - Rp. 600.000</option>
                                                <option value="diatas400">&#62; Rp. 400.000</option>
                                            </select>
                                        </div>
                                        <div className="col-lg">
                                            <label htmlFor="statusMobil" className="text-styler">Status</label>
                                            <select id="statusMobil" name="statusMobil" defaultValue={values.statusMobil} onChange={handleInputChange} className="form-select customlabel" placeholder="Disewa">
                                                <option value={true}>Disewakan</option>
                                                <option value={false}>Free</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-1 btn-customize">
                                            <button className="btn-customformer text-center text-white fw-bold" type="submit">Cari Mobil</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </div>
                </div>  
        </section>
    )
};

export default Searchbar