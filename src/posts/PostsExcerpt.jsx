import { useDispatch } from "react-redux"
import { like, dislike } from "./postsSlice"


function PostsExcerpt({post, ind}){

    const dispatch = useDispatch()

    function handlelike(i){
        dispatch(like(i))
    }

    function handledislike(i){
        dispatch(dislike(i))
    }

    return(
        <div className = "post">
            <h1>{post.title}</h1>
            <br/>
            <p>{post.content}</p>
            <br/>
            <p>-{post.user}</p>
            <br/>
            <p><button onClick = {() => handlelike(ind)}>👍{post.like}</button> <button onClick = {() => handledislike(ind)}>👎{post.dislike}</button></p>
        </div>
        
)

}

export default PostsExcerpt