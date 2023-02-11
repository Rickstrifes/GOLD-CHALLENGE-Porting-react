import React, { Fragment } from 'react';
import axios from 'axios';
import CardCarDetail from '../Components/CardCarDetail';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const HasilpencarianCardCarDetail = () => {
    // tampung variable
    const [detailCar, setdetailCar] = useState([]);
    const location = useLocation(); //CarsDetail di pages
    const carID = location.state.idMobil; //CarsDetail di pages

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
            setdetailCar(temporaryCar);
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
                          <CardCarDetail name={detailCar.name} image={detailCar.image} price={detailCar.price} detailCarID={detailCar.id} />;
                        </div>  
                    </div>  
                </section>
        </Fragment>
    )
}

export default HasilpencarianCardCarDetail;