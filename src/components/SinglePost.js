import { useHistory } from 'react-router-dom';

const SinglePost= ({
    onePost
  }) => 
  

  { if (onePost) {
    return (
        <div>
            <h3>{onePost.title}</h3>
            <h4>Cost: ${onePost.price}</h4>
            <h4>Location: {onePost.location}</h4>
            <h4>Author: {onePost.author.username}</h4>
            <p>{onePost.description}</p>
             {/* <h3>`${onePost.title}`</h3>
             
             <h5>`Author: ${onePost.author} Location: ${onePost.location}`</h5>
              */}
        </div>
        )
  } else {
    <h3>`Nothing here bucko`</h3>
  }
    
            
        };

        

  export default SinglePost;