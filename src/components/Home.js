

import getPosts from "./fetches";
import PostCards from "./PostCards";
import SinglePost from "./SinglePost";



const Home = ({
  posts,
  setPosts,
  token,
  postId,
  setPostId,
  onePost,
  setOnePost,
  meProfile, 
  setMeProfile
}) => {




  return (
      <main>
  <section id="posts-filters-panel">
    <PostCards posts={posts} setPosts={setPosts} token={token} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost}/>
  </section>
  


  <section id="posts-detailed-view">
    <SinglePost onePost={onePost} />
  </section>
  </main>

      );
  }
    
    export default Home;