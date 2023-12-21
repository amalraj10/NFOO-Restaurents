import { configureStore } from "@reduxjs/toolkit";
import restaurentSlice from "./restaurentSlice";


const store = configureStore({
    reducer:{

        restaurentSlice

    }
})
export default store