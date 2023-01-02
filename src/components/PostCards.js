import React from "react";
import { useEffect } from "react";
import { getPosts } from "./fetches/getPosts";


const PostCards = ({
    token,
    posts,
    setPosts,
    postId,
    setPostId,
    onePost,
    setOnePost,

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
                                <div id={post._id} key={post._id} className="posts-filters-card">
                                    <h3>
                                        {post.title}
                                    </h3>
                                    <div>
                                        <h5 className="posts-cards-labels">Location: </h5>{post.location}
                                       
                                    </div>
                                    <div>
                                    <h5 className="posts-cards-labels">Price: </h5>{post.price}
                                    </div>
                                    <div>
                                    <h5 className="posts-cards-labels">Created on: </h5>{post.createdAt.slice(0, 10)}
                                    </div>
                                    <div>
                                    <h5 className="posts-cards-labels">Still Available? </h5>{post.active.toString()}
                                    </div>

                                    <button id="post-cards-button" onClick={(e) => {
                                        setPostId(post._id);
                                        setOnePost(post);
                                        console.log(post);
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
