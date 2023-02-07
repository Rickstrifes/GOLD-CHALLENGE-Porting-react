import React from 'react';
import './Faqaccordion.css';


const Faqaccordion = () => {
    return (
        <section id="faq" className="frequentlyquestion">
            <div className="container mb-5">
                <div className="row mt-5 pt-5">
                        <div className="col-lg-6 col-sm-6">
                            <h1 className="faq-texty">Frequently Asked Question</h1>
                            <p className="faq-textyy">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit</p>
                        </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="accordion" id="accordionExamples">
                            <div className="accordion-item mb-2">
                                <h2 className="accordion-header mb-0">
                                    <button type="button" className="accordion-button collapsed accordion-text" data-bs-toggle="collapse"
                                    data-bs-target="#accordion-one">Apa saja syarat yang dibutuhkan?
                                    </button>
                                </h2>
                                <div id="accordion-one" className="accordion-collapse collapse" data-bs-parent="#accordionExamples">
                                    <div className="accordion-body">
                                    <p>kosong</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item mb-2 border">
                                <h2 class="accordion-header mb-0">
                                    <button type="button" class="accordion-button collapsed accordion-text" data-bs-toggle="collapse"
                                    data-bs-target="#accordion-two">Berapa hari minimal sewa mobil lepas kunci?
                                    </button>
                                </h2>
                                <div id="accordion-two" class="accordion-collapse collapse" data-bs-parent="#accordionExamples">
                                    <div class="accordion-body">
                                    <p>kosong</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item mb-2 border">
                                <h2 class="accordion-header mb-0">
                                    <button type="button" class="accordion-button collapsed accordion-text" data-bs-toggle="collapse"
                                    data-bs-target="#accordion-three">Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                    </button>
                                </h2>
                                <div id="accordion-three" class="accordion-collapse collapse" data-bs-parent="#accordionExamples">
                                    <div class="accordion-body">
                                    <p>kosong</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item mb-2 border">
                                <h2 class="accordion-header mb-0">
                                    <button type="button" class="accordion-button collapsed accordion-text" data-bs-toggle="collapse"
                                    data-bs-target="#accordion-four">Apakah Ada biaya antar-jemput?
                                    </button>
                                </h2>
                                <div id="accordion-four" class="accordion-collapse collapse" data-bs-parent="#accordionExamples">
                                    <div class="accordion-body">
                                    <p>kosong</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item mb-2 border">
                                <h2 class="accordion-header mb-0">
                                    <button type="button" class="accordion-button collapsed accordion-text" data-bs-toggle="collapse"
                                    data-bs-target="#accordion-five">Bagaimana jika terjadi kecelakaan
                                    </button>
                                </h2>
                                <div id="accordion-five" class="accordion-collapse collapse" data-bs-parent="#accordionExamples">
                                    <div class="accordion-body">
                                    <p>kosong</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqaccordion