import axios from 'axios'

const API=axios.create({
    baseURL:"http://localhost:5000/posts"
})

export const getPosts=()=>API.get("/getPosts")
export const createPost=(newPost)=>API.post("/createPost",newPost)
export const updatePost=(id,newPost)=>API.patch(`/updatePosts/${id}`,newPost)
export const deletePost=(id)=>API.delete(`/deletePost/${id}`)
export const increaseLikesapi =(id)=>API.patch(`/updateLikes/${id}`)
