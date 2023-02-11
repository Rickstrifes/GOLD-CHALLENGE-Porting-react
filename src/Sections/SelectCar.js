import React, { Fragment } from 'react';
import { selectDetailCarState } from '../redux/carSlice';
import { useSelector } from 'react-redux';
import CardCarDetail from '../Components/CardCarDetail';


const SelectCar = () => {
    
    const detailCar = useSelector(selectDetailCarState);
    

    return (
        <Fragment>
                <section id="hasilpencarianApiCard">
                    <div className="container">
                        <div className="row">
                            <CardCarDetail name={detailCar.name} image={detailCar.image} price={detailCar.price} carID={detailCar.id} />;
                        </div>  
                    </div>  
                </section>
        </Fragment>
    )
}

export default SelectCar