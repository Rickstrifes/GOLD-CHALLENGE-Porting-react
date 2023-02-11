import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { setdetailCar } from '../redux/carSlice';
import { useDispatch } from 'react-redux';
import SelectCar from "../Sections/SelectCar";
import { useLocation } from 'react-router-dom';

const DetailCars = () => {
    
    const dispatch = useDispatch();
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
                dispatch (setdetailCar(temporaryCar));
            })
            .catch((err) => {
                console.log(err)
            });
        },[dispatch, carID])

    return (
        <>
            <SelectCar />
        </>
    )
}

export default DetailCars