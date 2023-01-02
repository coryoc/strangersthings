
import { useEffect, useState } from "react";

import getMe from "./fetches/getMe";
import createPost from "./fetches/createPost";
import editPost from "./fetches/editPost";
import SinglePost from "./SinglePost";
import deletePost from "./fetches/deletePost";
import PostMsgs from "./PostMsgs";


const Profile = ({
    token,
    meProfile,
    setMeProfile,
    postID,
    setPostId,
    onePost,
    setOnePost
}) => {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState();

    const recordChange = (change) => {
        return (e) => {
            e.preventDefault();
            change(e.target.value);
        };
    
    };

    useEffect(() => {
        getMe(meProfile, setMeProfile, token)
        .then((freshProfile) => {
            setMeProfile(freshProfile);
        })
        .then(() => {
           console.log(meProfile);
        })

        .then(() => {
            setOnePost('');
         })
        
        .catch((e) => {
          console.error('Error retrieving user profile info on initial page load.');
          console.error(e);
        });
    }, []);




    return (
        <main>
        <section id="profile-card">
         <div id="profile-card-backsplash">
  

             <h1 id="profile-card-welcome">
              Welcome {meProfile.username}
             </h1>
  
             <div id="create-new-post">
             <h4 className="profile-instructions">Creating a Post</h4>
                <p className="profile-walkthrough"> Fill out all four sections below before selecting the Create New Post button</p>

                

                <label className="create-new-post-title">title</label>
                <input
                type="text"
                value={title}
                onChange={recordChange(setTitle)}
                ></input>

                <label className="create-new-post-title">description</label>
                <input
                type="text"
                value={description}
                onChange={recordChange(setDescription)}
                ></input>

                <label className="create-new-post-title">price</label>
                <input
                type="number"
                value={price}
                onChange={recordChange(setPrice)}
                ></input>

                <label className="create-new-post-title">location</label>
                <input
                   value={location}
                   onChange={recordChange(setLocation)}
                ></input>

                <label className="create-new-post-title">Willing to Deliver to Buyer?</label>
                <select
                value={willDeliver}
                onChange={recordChange(setWillDeliver)}
                >
                    <option defaultValue ="false">No</option>
                    <option value="true">Yes</option>
                    
                </select>

                <button onClick={() => createPost(title, description, price, location, token)}>Create New Post</button>



             </div>
  
         </div>
     </section>

     <section>
     <div id="my-existing-posts">
        <h2 className="profile-cards-title">My Posts</h2>
        <h4 className="profile-instructions">Editing a Post</h4>
                <p className="profile-walkthrough"> Enter the changes into the 4 sections on the left side of the screen before selecting the edit button for the post you wish to edit.</p>
                {
                    meProfile.posts.map(
                        (post) => {
                            return (                
                                <div id={post._id} key={post._id} className="my-posts-filters-card">
                                    <h3>
                                        {post.title}
                                    </h3>
                                    <div>
                                        Location: {post.location}
                                    </div>
                                    <div>
                                        Posted on: {post.createdAt.slice(0, 10)}
                                    </div>
                                    <div>
                                        Price: {post.price}
                                    </div>
                                    <p>Still Active? {post.active.toString()}</p>
                                    <div>
                                    <button onClick={(e) => {
                                        setOnePost(post);
                                        console.log(post);
                                        }}>View</button>
                                    <button onClick={(e) => {
                                   
                                            editPost(title, description, price, location, post);
                                        
                                    }}
                                    >Edit</button>
                                    <button
                                    onClick={(e) => {
                                        setPostId(post._id);
                                        deletePost(post);
                                        }}>Delete</button>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
     </section>

     <section id="profile-posts-detailed-view">
    <SinglePost onePost={onePost} />
    <PostMsgs onePost={onePost}  recordChange={recordChange}/>


   
  </section>

     </main>

        );
    }
    
    export default Profile;
