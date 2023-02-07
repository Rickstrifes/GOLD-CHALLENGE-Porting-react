import React, { Fragment } from 'react';
import axios from 'axios';
import CardCarDetail from './CardCarDetail';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const HasilpencarianCardCarDetail = (id) => {
    // tampung variable
    const [car, setCar] = useState([]);
    const location = useLocation();
    const carID = location.state.idMobil;

    useEffect(() => {
        const url = 'https://bootcamp-rent-cars.herokuapp.com'
        const config = {
          headers: {
            access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc'
          }
        }
        axios.get(`${url}/admin/car/${carID}`, config)
          .then( async res => {
            console.log(res.data);
            const temporaryCar = await res.data;
            setCar(temporaryCar);
          })
          .catch((err) => {
            console.log(err)
          });
      },[carID])
    return (
        <Fragment>
                <section id="hasilpencarianApiCard">
                    <div className="container">
                        <div className="row">
                          <CardCarDetail name={car.name} image={car.image} price={car.price} carID={car.id} />;
                        </div>  
                    </div>  
                </section>
        </Fragment>
    )
}

export default HasilpencarianCardCarDetail;