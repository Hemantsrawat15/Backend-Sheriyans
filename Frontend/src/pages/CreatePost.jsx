import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        console.log(e.target);
        const formData = new FormData(e.target);
        axios.post("http://localhost:8000/create-post", formData)
            .then((res) => {
                navigate("/feed");
                console.log(res);
            })
    }
    return (
        <section className="create-post-section">
            <h1>Create post</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" name="image" accept="image" required />
                <input type="text" name="caption" required />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default CreatePost;