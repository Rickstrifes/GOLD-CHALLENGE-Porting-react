import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Cardcars from '../Components/Cardcars';

const HasilpencarianApiCard = () => {

    const [cars, setCars] = useState([]);
    let filteringCars = [];
    const location = useLocation();
    const filterArr = location.state;

    useEffect(() => {
    //get data from api
    const url = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
        headers: {
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
        },
    };

    axios.get(`${url}/admin/v2/car`, config)
        .then(async (res) => {
        const temporaryCars = await res.data.cars;
        setCars(temporaryCars);
        })
        .catch((err) => {
        console.log(err);
        });
    }, [filterArr]);


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

export default HasilpencarianApiCard