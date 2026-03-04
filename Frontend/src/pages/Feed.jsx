import React from "react";
import { useState } from "react";

const Feed = () => {
    const [posts, setPosts] = useState([{
        _id: "69a7f2407b003e3d7bb3d9a8",
        image: "https://ik.imagekit.io/bxg9cjdct/image_yjPjyRjfv.jpg",
        caption: "test_caption",
        createdAt: "2026-03-04T08: 50:08.979+00:00",
        updatedAt: "2026-03-04T08: 50:08.979+00:00"
    }])
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