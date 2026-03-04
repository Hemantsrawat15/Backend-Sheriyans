import React from "react";

const CreatePost = () => {
    return (
        <section className="create-post-section">
            <h1>Create post</h1>
            <form>
                <input type="file" name="image" accept="image" required/>
                <input type="text" name="caption" required/>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default CreatePost;