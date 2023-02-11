import { configureStore } from '@reduxjs/toolkit';
import carsReducers from './carSlice';

export const carsStore = configureStore({
    reducer: {
        carsGlobalState: carsReducers
    }
})