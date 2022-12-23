const Profile = ({
    posts,
    setPosts,
    token,
    postId,
    setPostId,
    onePost,
    setOnePost
}) => {
    return (
        <main>
        <section id="profile-card">
         <h3>Time to Login</h3>
         <div id="profile-card-backsplash">
  
             <div>
                 username
             </div>
  
             <div>
                messages
             </div>
  
             <div>
                View existing posts
             </div>

             <div>
                create new post
                <label>title</label>
                <input></input>
                <label>description</label>
                <input></input>
                <label>price</label>
                <input></input>
                <label>location</label>
                <input></input>
                <label>willDeliver</label>
                <input></input>
                
             </div>
  
         </div>
     </section>
     </main>

        );
    }
    
    export default Profile;
