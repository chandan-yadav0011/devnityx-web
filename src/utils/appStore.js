import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/slices/userSlices";
import feedReducer from "../utils/slices/feedSlices";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        feed: feedReducer,
    }
});

export default appStore;