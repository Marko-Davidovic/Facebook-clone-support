import React, { useState, useEffect }from 'react'
import StoryReel from "./StoryReel"
// import Story from "./Story"
import MessageSender from "./MessageSender"
import Post from "./Post"
import db from "./firebase"


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
            db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => ({id: doc.id, 
                    data: doc.data() }))))
    }, []);
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />  

            {posts.map((post) => (
                <Post 
                key={post.data.id}
                profilePIC={post.data.profilePIC}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}

                />
            ))}
            {/* <Post 
            profilePic="data:image/jpeg;base64,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"
            message="Wow this is working"
            timestamp="this is timeStamp"
            username="Marko Davidovic"
            image="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            /> 
            <Post /> 
            <Post />           */}
        </div>
    )
}

export default Feed
