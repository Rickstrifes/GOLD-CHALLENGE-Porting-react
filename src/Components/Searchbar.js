import React from 'react';
import './Searchbar.css';


const Searchbar = () => {
    return (
        <div class="container booking pb-5 wow fadeIn" id="form">
                <div class="container bookingborder">
                    <div class="bg-white " style={{padding:'25px;'}}>
                            <div  iv class="row">
                                <div class="col-md-10">
                                    <div class="row">
                                        <div class="col-md-3 ">
                                            <label for="cars" class="text-styler">Nama Mobil</label>
                                            <input type="text" class="form-control customlabel" placeholder="Ketik nama/tipe mobil" />
                                        </div>
                                        <div class="col-md-3 ">
                                            <label for="cars" class="text-styler">Kategori</label>
                                            <input type="text" class="form-select customlabel" placeholder="Masukan Kapasitas Mobil" />
                                        </div>
                                        <div class="col-md-3 ">
                                            <label for="cars" class="text-styler">Harga</label>
                                            <input type="text" class="form-select customlabel" placeholder="Masukan Harga Sewa per Hari" />
                                        </div>
                                        <div class="col-md-3 ">
                                            <label for="cars" class="text-styler">Status</label>
                                            <input type="text" class="form-select customlabel" placeholder="Disewa" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 btn-customize">
                                    <a href="HasilPencarian.html" class="linkhilang">
                                    <button class="btn-customformer text-start text-white fw-bold">Cari Mobil</button></a>
                                </div>
                            </div>
                    </div>
                </div>  
        </div>
    )
};

export default Searchbar