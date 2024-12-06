import { useSelector, useDispatch } from "react-redux"
import { like, dislike } from "./postsSlice" 
import { useState, useEffect } from "react"

import { fetchPosts } from "./postsSlice"
import PostsExcerpt from "./PostsExcerpt"


function showpost(){

    const posts = useSelector((state) => state.posts.posts)

    const status = useSelector((state) => state.posts.status)

    const error = useSelector((state) => state.posts.status)

    
    const dispatch = useDispatch()




    useEffect(() => {
        if(status == "idle"){
            dispatch(fetchPosts())
        }

    }, [status, dispatch])



    

    const heading  = posts.length >= 1 ? "Hrithwin's Posts" : null


    let content = null;

    if(status == "loading"){
        content = "Loading..."
    }
    else if(status == "succeeded"){
        const displayPost = posts.map((post, ind) => { 
            return <PostsExcerpt post = {post} ind = {ind} key = {ind} />
        })
        displayPost.reverse()
        content = (displayPost)
    }
    else if(status == "failed"){
        content = <p>{error}</p>
        
    }

    return (
        <div>
            <center><h1>{heading}</h1><br/></center>
            {content}
        </div>
    )


}

export default showpost