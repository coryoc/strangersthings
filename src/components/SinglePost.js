import { useState } from "react";
import msgAuthor from "./fetches/msgAuthor";

import { TOKEN_STORAGE_KEY } from "../App"; 
const SinglePost= ({
    onePost,
    token,
    meProfile
  }) => 
  
  

  {
    const [replyMsg, setReplyMsg] = useState("");

    const recordChange = (change) => {
      return (e) => {
 
          change(e.target.value);
      };
  
  };
    

  if (onePost === ''){
    return (
    <h3>`Welcome to Chappylist, select a post to view the details. Sign in to create posts and/or message authors about active posts`</h3>
    )
  }
  
  else if (onePost && TOKEN_STORAGE_KEY.length > 5 && onePost.author.username !== meProfile.username) {
    return (
      <div>
        <div>
            <h3>{onePost.title}</h3>
            <h4>Cost: ${onePost.price}</h4>
            <h4>Location: {onePost.location}</h4>
            <h4>Author: {onePost.author.username}</h4>
            <p>{onePost.description}</p>
        </div>

        <label className="create-reply-msg">Reply</label>
                                                    <input
                                                        type="text"
                                                        value={replyMsg}
                                                        onChange={recordChange(setReplyMsg)}
                                                    
                                                    ></input>
                                    <button onClick={() => {
                                        msgAuthor(onePost, replyMsg, token)
                                    }}>
                                        Send Message</button>

      </div>
        )
  } 
  
  else if (onePost) {
    return (
      <div>
        <div>
            <h3>{onePost.title}</h3>
            <h4>Cost: ${onePost.price}</h4>
            <h4>Location: {onePost.location}</h4>
            <h4>Author: {onePost.author.username}</h4>
            <p>{onePost.description}</p>
        </div>
      </div>
        )
  }

  else {
    <h3>`Nothing here bucko`</h3>
  }
    
            
        };

        

  export default SinglePost;