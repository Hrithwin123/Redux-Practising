import { createSlice } from "@reduxjs/toolkit";

const initialState = {

posts : [],
status : "idle", //idle , loading , succeeded , failed
error : null

}

const posts = createSlice({

name : "posts",
initialState,
reducers : {
    addPost : (state, action) => {state.posts.push(action.payload)},

    like : (state, action) => {
        if(!state.posts[action.payload].liked){
            state.posts[action.payload].like = 1
            state.posts[action.payload].dislike = 0
            state.posts[action.payload].liked = true
            
        }
        else{
            state.posts[action.payload].like = 0
            state.posts[action.payload].liked = false
        
        }
        
    },
    dislike : (state, action) => {
        if(state.posts[action.payload].liked){
            state.posts[action.payload].liked = false
            state.posts[action.payload].disliked = true
            state.posts[action.payload].dislike = 1
            state.posts[action.payload].like = 0

        }

        else if(!state.posts[action.payload].disliked){
            state.posts[action.payload].dislike = 1
            state.posts[action.payload].like = 0
            state.posts[action.payload].disliked = true
            
        }
        else{
            state.posts[action.payload].dislike = 0
            state.posts[action.payload].disliked = false

        }
    },

}
})

export const {addPost, like, dislike} = posts.actions

export default posts.reducer