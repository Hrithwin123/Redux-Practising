import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {

posts : [],
status : "idle", //idle , loading , succeeded , failed
error : null

}

const postsUrl = "https://jsonplaceholder.typicode.com/posts"

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async() => {

    const response = await axios.get(postsUrl)

    return [...response.data]
})

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
    }
},
extraReducers(builder){
    builder
    .addCase(fetchPosts.pending, (state, action) => {

        state.status = "loading"
    })

    .addCase(fetchPosts.fulfilled, (state, action) => {

        state.status = "succeeded"
        const loadedPosts = action.payload.map((post) => {

            return {title : post.title, content : post.body, user : "API", like : 0, dislike : 0, liked : false, disliked : false}

        })

        state.posts = [...state.posts, ...loadedPosts]
        
    })
    .addCase(fetchPosts.rejected, (state, action) => {

        state.status = "Failed"
        state.error = action.error.message
    })
    
}  


})

export const {addPost, like, dislike} = posts.actions

export default posts.reducer