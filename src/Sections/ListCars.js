import React from "react";
import { useLocation } from "react-router-dom";
import Cardcars from '../Components/Cardcars';
import { selectCarsState  } from '../redux/carSlice';
import { useSelector } from 'react-redux'

const ListCars = () => {
    
    const cars = useSelector(selectCarsState)
    
    let filteringCars = [];
    const location = useLocation();
    const filterArr = location.state;


    const filterCars = () => {
    
    if (filterArr.namaMobil !== "") {
        filteringCars = filteringCars.filter((obj) => obj.name.toLowerCase().indexOf(filterArr.namaMobil.toLowerCase()) >= 0);
    }
    // filter kategori
    if (filterArr.kategoriMobil !== "default") {
        filteringCars = filteringCars.filter((obj) => obj.category === filterArr.kategoriMobil);
    }
    // filter harganya
    if (filterArr.hargaMobil === "under400") {
        filteringCars = filteringCars.filter((obj) => obj.price < 400000);
    } else if (filterArr.hargaMobil === "400600") {
        filteringCars = filteringCars.filter((obj) => obj.price >= 400000 && obj.price <= 600000);
    } else if (filterArr.hargaMobil === "above400") {
        filteringCars = filteringCars.filter((obj) => obj.price > 400000);
    }
    // filter status
        filteringCars = filteringCars.filter((obj) => obj.status === filterArr.statusMobil);
    };

    filteringCars = cars;
    filterCars(filteringCars);


    return (
        <>
        <section id="hasilpencarianApiCard">
            <div className="container">
                <div className="row">
                    {filteringCars?.map((car) => {
                        return <Cardcars name={car.name} image={car.image} price={car.price} carID={car.id} />;
                    })}
                </div>
            </div>
        </section>
        </>
    )
}

export default ListCars