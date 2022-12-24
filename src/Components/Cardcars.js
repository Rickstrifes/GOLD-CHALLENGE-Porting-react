import React from 'react';
import './Cardcars.css';
import Innova from '../Assets/innova.png'

const Cardcars = () => {
    return (
        <section id="cards-car">
            <div class="container pb-5 pt-3">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100 card-luar">
                            <div class="card-body testcardcar">
                                <img src={Innova} class="card-img-top innova-img mt-5" alt="innova" />
                                <div class="mt-5 pt-3">
                                    <span class="text-black p-2 mt-5 innova-style-text-span">Innova</span>
                                    <h5 class="card-title p-2 innova-style-text-h5">Rp 500.000 / hari</h5>
                                    <p class="card-text p-2 innova-style-text-p">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <button class="btn btn-primary card-car-btn fw-bold">Pilih Mobil</button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 card-luar">
                            <div class="card-body testcardcar">
                                <img src={Innova} class="card-img-top innova-img mt-5" alt="innova" />
                                <div class="mt-5 pt-3">
                                    <span class="text-black p-2 mt-5 innova-style-text-span">Innova</span>
                                    <h5 class="card-title p-2 innova-style-text-h5">Rp 500.000 / hari</h5>
                                    <p class="card-text p-2 innova-style-text-p">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <button class="btn btn-primary card-car-btn fw-bold">Pilih Mobil</button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 card-luar">
                            <div class="card-body testcardcar">
                                <img src={Innova} class="card-img-top innova-img mt-5" alt="innova" />
                                <div class="mt-5 pt-3">
                                    <span class="text-black p-2 mt-5 innova-style-text-span">Innova</span>
                                    <h5 class="card-title p-2 innova-style-text-h5">Rp 500.000 / hari</h5>
                                    <p class="card-text p-2 innova-style-text-p">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <button class="btn btn-primary card-car-btn fw-bold">Pilih Mobil</button>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default Cardcars