import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/posts")
        .then((res)=>{
            setPosts(res.data.posts);
        })
    },[])
    return (
        <section>
            {
                posts.length > 0 ? (
                    posts.map((post)=>(
                        <div>
                            <img src={post.image} alt="" className="h-[100px] w-[100px]"/>
                            <div>{post.caption}</div>
                        </div>
                    ))
                ) :
                <h1>No posts available</h1>
            }
        </section>
    )
}

export default Feed;