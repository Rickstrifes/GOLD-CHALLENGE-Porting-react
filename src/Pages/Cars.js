import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setCar } from "../redux/carSlice";
import ListCars from "../Sections/ListCars";

const Cars = () => {

    const dispatch = useDispatch();

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
        dispatch (setCar(temporaryCars));
        })
        .catch((err) => {
        console.log(err);
        });
    }, [dispatch]);

    return (
        <>
            <section>
                <ListCars />
            </section>
        </>
    )
}

export default Cars