import { useSelector, useDispatch } from "react-redux"
import {addPost} from "./postsSlice"
import { useState } from "react"
function postform(){

    const posts = useSelector((state) => state.posts.posts)

    const dispatch = useDispatch()

    const users = useSelector((state) => state.users)

    const userslist = users.map((user, ind) => {return(
        <option key = {ind}>{user}</option>


    )})

    const [title, setTitle]  = useState("")
    const [content, setContent]  = useState("")
    
    const [user, setUser] = useState("Hrithwin")


    function handleTitle(e){
        setTitle(e.target.value)
    }

    function handleContent(e){
        setContent(e.target.value)
    }

    function onSubmit(){
        dispatch(addPost({title, content, like : 0, dislike : 0, liked : false, disliked : false, user}))
        setTitle("")
        setContent("")
    }

    function handleuser(e){
        setUser(e.target.value)
    }

    return(
        <form className = "form">
            <h1 style={{textAlign:"center", marginBottom : "10px"}}>Form</h1>
            <select onChange = {(e) => handleuser(e)}>{userslist}</select><br/>
            <label>Title : </label>
            <input value = {title} onChange = {(e) => handleTitle(e)} type = "text"></input>

            <label>Content : </label>
            <input value = {content} onChange = {(e) => handleContent(e)}  type = "text"></input>
                <br/>
            <button disabled = {title == "" || content == "" ? true : false} onClick = {onSubmit} type = "button">Submit Post</button>
        </form>
    )


}

export default postform