import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from './cakeReducer';


const store = configureStore({
    reducer: {
        cakeReducer
    },
});

export default store;
