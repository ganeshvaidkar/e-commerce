import { configureStore } from "@reduxjs/toolkit";
import DataStore from"./DataStore"
const Store = configureStore({
    reducer:{
       Userdata: DataStore
    }
})
export default Store;