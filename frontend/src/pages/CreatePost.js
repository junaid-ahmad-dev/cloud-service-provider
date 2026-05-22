import React from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
 

// This component allows users to create a new post by uploading an image and adding a caption. It uses a form to collect the image and caption, and upon submission, it sends the data to the backend server using an HTTP POST request. If the post is created successfully, the user is redirected to the feed page; otherwise an error message is displayed. 
const CreatePost = () => {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()


        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/create-post", formData)
            .then((res) => {

                navigate("/feed")

            })
            .catch((err) => {
                console.log(err)
                alert("Error creating post")
            })


    }

    return (
        <section className='create-post-section' >
            <h1>Create post</h1>

            <form onSubmit={handleSubmit} >

                <input type="file" name="image" accept="image/*" />
                <input type="text" name='caption' placeholder='Enter caption' required />
                <button type='submit' >Submit</button>

            </form>

        </section>
    )
}

export default CreatePost