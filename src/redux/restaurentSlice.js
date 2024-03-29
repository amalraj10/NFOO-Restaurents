import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchrestaurant = createAsyncThunk ('restaurentList/fetchrestaurant',()=>{
    const result = axios.get('/restaurant.json').then(response=>response.data.restaurants)
    console.log(result);
    return result
})


const restaurentSlice = createSlice({
    name:'restaurentList',
    initialState:{
      loading:false,  //pending state
      allrestaurant:[], //resolve state
      searchRestaurant:[],
      error:""      //reject state
    },
    extraReducers:(builder)=>{
             //builder holds response/value from thunk
             builder.addCase(fetchrestaurant.pending,(state)=>{
                state.loading =true
             })
             builder.addCase(fetchrestaurant.fulfilled,(state,action)=>{
                state.loading =false
                state.allrestaurant = action.payload
                state.searchRestaurant = action.payload
                state.error = ""

             })
             builder.addCase(fetchrestaurant.rejected,(state,action)=>{
                state.loading =false
                state.allrestaurant = ""
                state.error = action.error.message

             })

    },
reducers :{
   search : (state,action)=>{
      state.allrestaurant = state.searchRestaurant.filter((item )=> item.neighborhood.toLowerCase().includes(action.payload))
   }
}


})
export const {search} = restaurentSlice.actions
export default restaurentSlice.reducer