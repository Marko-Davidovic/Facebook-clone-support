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
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({id:doc.id, 
        data: doc.data() }))))
        
  }, [])
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />  

            {posts.map((post) => (
                <Post 
                key={post.data.id}
                profilePIC={post.data.profilePIC}
                message={post.data.message}
                createdAt={post.data.createdAt}
                username={post.data.username}
                image={post.data.image}

                />
            ))}
        </div>
    )
}

export default Feed
