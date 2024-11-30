import { configureStore } from "@reduxjs/toolkit";
import postreducer from "../posts/postsSlice"

export const store = configureStore({

reducer : {
    posts : postreducer,
    
}
  
    
})