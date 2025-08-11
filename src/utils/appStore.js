import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/slices/userSlices";
import feedReducer from "../utils/slices/feedSlices";
import requestReducer from "../utils/slices/requestSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        feed: feedReducer,
        request: requestReducer
    }
});

export default appStore;