import { configureStore } from "@reduxjs/toolkit";
import postreducer from "../posts/postsSlice"
import userReducer from "../posts/usersSlice"

export const store = configureStore({

reducer : {
    posts : postreducer,
    users : userReducer,
    
}
  
    
})