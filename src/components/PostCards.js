import React from "react";
import { useEffect } from "react";
import { getPosts } from "./fetches";


const PostCards = ({
    token,
    posts,
    setPosts,
    postId,
    setPostId,
    onePost,
    setOnePost
  }) => 

  
  {
    useEffect(() => {
        getPosts()
        .then((posts) => {
          setPosts(posts);
          console.log(posts);
        })
        .catch((e) => {
          console.error('User not signed in, or invalid token, cannot fetch posts.');
          console.error(e);
        });
    }, []);

        return (
            <div>
                {
                    posts.map(
                        (post) => {
                            return (                
                                <div id={post._id} className="posts-filters-card">
                                    <h3>
                                        {post.title}
                                    </h3>
                                    <div>
                                        {post.location}
                                    </div>
                                    <div>
                                        {post.price}
                                    </div>
                                    <div>
                                        {post.createdAt}
                                    </div>
                                    <button onClick={(e) => {
                                        setPostId(post._id);
                                        setOnePost(post);
                                        console.log(post);
                                        // history.push(`/posts/${postId}`);
                                        }}>View Post</button>
                                    
                                </div>
                            )
                        }
                    )
                }
            </div>
        );
  };

  export default PostCards;
