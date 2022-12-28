import React, { Fragment } from 'react';
import axios from 'axios';
import CardCarDetail from './CardCarDetail';
import { useEffect, useState } from 'react';

const HasilpencarianCardCarDetail = () => {
    // tampung variable
    const [car, setCar] = useState();

    useEffect(() => {
        const url = 'https://bootcamp-rent-cars.herokuapp.com'
        const config = {
          headers: {
            access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc'
          }
        }
        axios.get(`${url}/admin/car/904`, config)
          .then( async (res) => {
            console.log(res.data);
            const tempCar = await res.data;
            setCar(tempCar);
          })
          .catch(err => {
            console.log(err)
          })
      }, [car])
    return (
        <Fragment>
                <section id="hasilpencarianApiCard">
                    <div className="container">
                        <div className="row">
                                    {car?.map((car) => {
                                        return <CardCarDetail name={car.name} image={car.image} price={car.price} carID={car.id} />;
                                    })}
                        </div>
                    </div>
                </section>
        </Fragment>
    )
}

export default HasilpencarianCardCarDetail;