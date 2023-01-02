const PostMsgs= ({
    onePost,
  }) => 
  
  

  {

    
    if (onePost.messages) {
      return (
              <div>
                {
                    onePost.messages.map(
                        (msg) => {
                            return (                
                                <div id={msg._id} key={msg._id} className="msg-cards">
                                    <h4 className="msg-author">Message from: {msg.fromUser.username}</h4>
                                    <p className="msg-content">
                                        {msg.content}
                                    </p>
                                </div>
                            )
                        }
                    )
                }
              </div>

              
          )
    }
    
    else if (onePost) {
    return (
        <div>
            <h3>{onePost.title}</h3>
            <h4>Cost: ${onePost.price}</h4>
            <h4>Location: {onePost.location}</h4>
            <h4>Author: {onePost.author.username}</h4>
            <p>{onePost.description}</p>
        </div>
        )
  } else {
    <h3>`Nothing here bucko`</h3>
  }
    
            
        };

        

  export default PostMsgs;