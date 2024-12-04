import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Hrithwin", "Rahul", "Rohan", "Aman"]

const users = createSlice({

 name : "users", 
 initialState,
 reducers:{
    
 }   
})

export default users.reducer