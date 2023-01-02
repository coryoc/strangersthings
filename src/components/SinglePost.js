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
  
  else if (onePost && TOKEN_STORAGE_KEY.length > 5) {
    return (
      <div>
        <div id="single-post-card">
            <h3>{onePost.title}</h3>
            <h4>Cost:</h4>
            <span>{onePost.price}</span>
            <h4>Location:</h4>
            <span>{onePost.location}</span>
            <h4>Author:</h4>
            <span>{onePost.author.username}</span>
            <h4>Description:</h4>
            <span>{onePost.description}</span>
        </div>

        <div className="create-reply-msg">
        <label id="label-reply">Reply</label>
                        <input
                            id="input-reply"
                            type="text"
                            value={replyMsg}
                            onChange={recordChange(setReplyMsg)}
                        
                        ></input>
        <button onClick={() => {
            msgAuthor(onePost, replyMsg, token)
        }}>
            Send Message</button>
        </div>                              
      </div>
        )
  } 
  
  else if (onePost) {
    return (
     
        <div>
        <div id="single-post-card">
            <h3>{onePost.title}</h3>
            <h4>Cost:</h4>
            <span>{onePost.price}</span>
            <h4>Location:</h4>
            <span>{onePost.location}</span>
            <h4>Author:</h4>
            <span>{onePost.author.username}</span>
            <h4>Description:</h4>
            <span>{onePost.description}</span>
        </div>
      </div>
        )
  }

  else {
    <h3>`Nothing here bucko`</h3>
  }
    
            
        };

        

  export default SinglePost;