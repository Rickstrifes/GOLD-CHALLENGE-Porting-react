import React, {useState, useRef} from 'react'
import './Filter.css'
// import { Container, Row } from 'react-bootstrap'
// import { Form } from 'react-bootstrap'
import Select from 'react-select'
import { useLocation, useParams } from 'react-router'

const Filter = (filterData) => {
    const [active, setActive] = useState(false);
    const [edit, setEdit] = useState(false);
    const location = useLocation();
    let { id } = useParams();

    let placeholder1 = "Masukan Kapasitas Mobil";
    let placeholder2 = "Ketik nama/tipe mobil";
    let placeholder3 = "Masukan Harga Sewa per Hari";
    let placeholder4 = "Status";

    if (location.pathname === `/find-car-result/${id}`) {
        placeholder1 = "";
        placeholder2 = "";
        placeholder3 = "";
        placeholder4 = "";
    }

    const overlayActive = () => {
        document.body.style.overflow = "hidden";
        setActive(true);
    };

    const overlayDeactive = () => {
        document.body.style.overflow = "";
        setActive(false);
        filterData.setHeroVisible(false);
        setEdit(!edit);
    };

    const titleRef = useRef();

    function handleBackClick() {
        titleRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
    }
    
    const styleForm = {
        width: "100%",
        padding_right: 0,
    };
    
    return (
    <section className='filter' ref={titleRef} onClick={handleBackClick} >
    {/* <section className='filter'> */}
        <div className="container">
            <div 
                className={`overlay-bg-2 ${active ? "overlay-active" : ""}`}
                onClick={overlayDeactive}
            />
            <div className={`filter-border ${active ? "overlay-active" : ""}`}/>
            <div>
                <div className="row">
                    <form className='form-filter' onSubmit={''}>
                        <div 
                            className="form" 
                            style={location.pathname === `/find-car-result/${id}`? styleForm: {}}
                        >
                            <div className="col-lg-3">
                                <div className="form-border">
                                    <div className="mb-3">
                                        <label className='form-label'>Nama Mobil</label>
                                        <input 
                                            type="text"
                                            onClick={overlayActive} 
                                            className='form-control'
                                            placeholder={placeholder2}
                                            style={{
                                                placeholder: (base) => ({
                                                  ...base,
                                                  fontSize: "10px",
                                                }),
                                            }}
                                            ref={filterData.carName}
                                            disabled={
                                                location.pathname === `/find-car-result/${id}`
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="form-border">
                                    <label className='form-label'>Kategori</label>
                                    <Select
                                        className="select-form"
                                        classNamePrefix="select"
                                        placeholder={placeholder1}
                                        styles={{
                                            placeholder: (base) => ({
                                              ...base,
                                              fontSize: "10px",
                                            }),
                                        }}
                                        onFocus={overlayActive}
                                        options={[
                                            { value: "small", label: "2 - 4 orang" },
                                            { value: "medium", label: "4 - 6 orang" },
                                            { value: "large", label: "6 - 8 orang" },
                                        ]}
                                        isDisabled={
                                            location.pathname === `/find-car-result/${id}`
                                        }
                                        ref={filterData.category}
                                        onChange={(e) =>
                                            (filterData.category.current.value = e.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="form-border">
                                    <label className="form-label">Harga</label>
                                    <Select
                                        className="select-form"
                                        classNamePrefix="select"
                                        placeholder={placeholder3}
                                        styles={{
                                            placeholder: (base) => ({
                                            ...base,
                                            fontSize: "10px",
                                            }),
                                        }}
                                        onFocus={overlayActive}
                                        options={[
                                            { value: "small", label: "< Rp. 400.000" },
                                            { value: "medium", label: "Rp. 400.000 - Rp. 600.000" },
                                            { value: "large", label: "> Rp. 600.000" },
                                        ]}
                                        isDisabled={
                                            location.pathname === `/find-car-result/${id}`
                                        }
                                        ref={filterData.priceRange}
                                        onChange={(e) =>
                                            (filterData.priceRange.current.value = e.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="form-border">
                                    <label className='form-label'>Status</label>
                                    <Select
                                        className="select-form"
                                        classNamePrefix="select"
                                        placeholder={placeholder4}
                                        styles={{
                                            placeholder: (base) => ({
                                            ...base,
                                            fontSize: "10px",
                                            }),
                                        }}
                                        onFocus={overlayActive}
                                        options={[
                                            { value: "false", label: "Disewa" },
                                            { value: "true", label: "Tersedia" },
                                        ]}
                                        isDisabled={
                                            location.pathname === `/find-car-result/${id}`
                                        }
                                        ref={filterData.statusOrder}
                                        onChange={(e) =>
                                            (filterData.statusOrder.current.value = e.value)
                                        }  
                                    ></Select>
                                </div>
                            </div>
                        </div>
                        {location.pathname !== `/find-car-result/${id}` && (
                            // <div className="submit">
                            //     <div className="button">
                            //         <button
                            //             className="btn"
                            //             type="submit"
                            //             onClick={overlayDeactive}
                            //         >
                            //             Cari Mobil
                            //         </button>
                            //     </div>
                            // </div>
                            <div className="col-lg-1 btn-customize">
                              <button className="btn-customformer text-center text-white fw-bold" onClick={overlayDeactive} type="submit">Cari Mobil</button>
                            </div>
                        )}
                    </form>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Filter