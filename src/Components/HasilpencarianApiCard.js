import React, { Fragment } from 'react';
import axios from 'axios';
import Cardcars from './Cardcars';
import { useEffect, useState } from 'react';

const HasilpencarianApiCard = () => {
    // tampung variable
    const [cars, setCars] = useState();

    useEffect(() => {
        //get data API 
    const url = "https://bootcamp-rent-cars.herokuapp.com"
    const config = {
        headers: {
            access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc'
        }
    }
    axios.get(`${url}/admin/v2/car`, config)
        .then( async (res) => {
            const temporaryCars = await res.data.cars;
            setCars(temporaryCars);
        })
        .catch (err => {
            console.log(err);
        },);
    })
    return (
        <Fragment>
                <section id="hasilpencarianApiCard">
                    <div className="container">
                        <div className="row">
                                    {cars?.map((car) => {
                                        return <Cardcars name={car.name} image={car.image} price={car.price} carID={car.id} />;
                                    })}
                        </div>
                    </div>
                </section>
        </Fragment>
    )
}

export default HasilpencarianApiCard