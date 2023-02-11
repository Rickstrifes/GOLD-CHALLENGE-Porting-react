import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars : [],
    detail: {}
}

const carsSlice = createSlice ({
    name: 'cars',
    initialState: initialState,
    reducers: {
        setCar: (state, action) => {
            state.cars = action.payload
        },
        setdetailCar: (state, action) => {
            state.cars = action.payload
        }
    }
})

export const { setdetailCar } = carsSlice.actions

export const { setCar } = carsSlice.actions

export const selectCarsState = (state) => state.carsGlobalState.cars
export const selectDetailCarState = (state) => state.carsGlobalState.cars

export default carsSlice.reducer