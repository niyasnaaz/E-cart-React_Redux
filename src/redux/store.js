import { configureStore } from "@reduxjs/toolkit";
import wishlistslice from "./wishlistslice";
import cartSlice from "./cartSlice";



const store = configureStore({

    reducer:{
        wishlistReducer:wishlistslice,
        cartReducer:cartSlice
    }
}) 

export default store