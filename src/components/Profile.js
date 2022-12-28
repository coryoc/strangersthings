import { useEffect, useState } from "react";

import getMe from "./fetches/getMe";
import createPost from "./fetches/createPost";
import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";



const Profile = ({
    posts,
    setPosts,
    token,
    postId,
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

    return (
        <main>
        <section id="profile-card">
         <h3>Time to Login</h3>
         <div id="profile-card-backsplash">
  
            <div>
                <button onClick={() => getMe()}>Get Profile Info</button>
            </div>
             <div>
                 username
             </div>
  
             <div>
                messages
             </div>
  
             <div>
                View existing posts
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
     </main>

        );
    }
    
    export default Profile;
