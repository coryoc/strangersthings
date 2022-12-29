
import { useEffect, useState } from "react";

import getMe from "./fetches/getMe";
import createPost from "./fetches/createPost";
import SinglePost from "./SinglePost";
import deletePost from "./fetches/deletePost";
import PostMsgs from "./PostMsgs";


const Profile = ({
    meProfile,
    setMeProfile,
    setPostId,
    onePost,
    setOnePost
}) => {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState();
    const [replyMsg, setReplyMsg] = useState('');

    const recordChange = (change) => {
        return (e) => {
            e.preventDefault();
            change(e.target.value);
        };
    
    };

    useEffect(() => {
        getMe(meProfile, setMeProfile)
        .then((freshProfile) => {
            setMeProfile(freshProfile);
        })
        .then(() => {
           console.log(meProfile);
        })
        .catch((e) => {
          console.error('Error retrieving user profile info on initial page load.');
          console.error(e);
        });
    }, []);


    return (
        <main>
        <section id="profile-card">
         <h3>Time to Login</h3>
         <div id="profile-card-backsplash">
  

             <div>
              Welcome{meProfile.username}
             </div>
  
             <div id="create-new-post">
                create new post

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

                <button onClick={() => createPost(title, description, price, location)}>Create New Post</button>
             </div>
  
         </div>
     </section>

     <section>
     <div id="my-existing-posts">
        My Posts
                {
                    meProfile.posts.map(
                        (post) => {
                            return (                
                                <div id={post._id} key={post._id} className="my-posts-filters-card">
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
                                    <p>Active? {post.active.toString()}</p>

                                    <button onClick={(e) => {
                                        setPostId(post._id);
                                        setOnePost(post);
                                        console.log(post);
                                        }}>View</button>
                                    <button>Edit</button>
                                    <button
                                    onClick={(e) => {
                                        setPostId(post._id);
                                        deletePost(post);
                                        }}>Delete</button>
                                    
                                </div>
                            )
                        }
                    )
                }
            </div>
     </section>

     <section id="profile-posts-detailed-view">
    <SinglePost onePost={onePost} replyMsg={replyMsg}/>
    <PostMsgs onePost={onePost} replyMsg={replyMsg} recordChange={recordChange} setReplyMsg={setReplyMsg}/>


   
  </section>

     </main>

        );
    }
    
    export default Profile;
