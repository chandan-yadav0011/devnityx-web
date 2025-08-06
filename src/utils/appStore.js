import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/slices/userSlices";


const appStore = configureStore({
    reducer:{
        user: userReducer
    }
});

export default appStore