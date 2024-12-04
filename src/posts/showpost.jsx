import { useSelector, useDispatch } from "react-redux"
import { like, dislike } from "./postsSlice" 


function showpost(){

    const posts = useSelector((state) => state.posts.posts)

    const dispatch = useDispatch()



    function handlelike(i){
        dispatch(like(i))
    }

    function handledislike(i){
        dispatch(dislike(i))
    }

    const heading  = posts.length >= 1 ? "Hrithwin's Posts" : null


    const displayPost = posts.map((post, ind) => {return (
        <div className = "post" key = {ind}>
            <h1>{post.title}</h1>
            <br/>
            <p>{post.content}</p>
            <br/>
            <p>-{post.user}</p>
            <br/>
            <p><button onClick = {() => handlelike(ind)}>👍{post.like}</button> <button onClick = {() => handledislike(ind)}>👎{post.dislike}</button></p>
        </div>


    )})

    return (
        <div>
            <h1>{heading}</h1><br/>
            {displayPost}
        </div>
    )


}

export default showpost