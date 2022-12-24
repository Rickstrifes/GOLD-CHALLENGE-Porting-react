import React from 'react';
import './Searchbardua.css';

const Searchbardua = () => {
    return (
        <div className="container-fluid booking pb-5 wow fadeIn">
            <div className="container bookingborder">
                <div className="bg-white " style={{padding:"25px;"}}>
                    <div className="row g-2 ms-5">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <h5 className="custom-h5-pencarian">Pencarianmu</h5>
                                <div className="col-md-3 ">
                                    <label for="cars">Nama Mobil</label>
                                    <input type="text" className="form-control" placeholder="Innova" />
                                </div>

                                <div className="col-md-3 ">
                                    <label for="cars">Kategori</label>
                                    <input type="text" className="form-select" placeholder="6 - 8 orang" />
                                </div>

                                <div className="col-md-3 ">
                                    <label for="cars">Harga</label>
                                    <input type="text" className="form-select" placeholder="Rp. 400.000 - Rp. 600.000" />
                                </div>

                                <div className="col-md-3">
                                    <label for="cars">Status</label>
                                    <input type="text" className="form-select asd" placeholder="Disewakan" />
                                </div>

                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-white btn-edit text-blue">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    };

export default Searchbardua