import { useEffect } from "react";

import getPosts from "./fetches/getPosts";
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
  setMeProfile,
  replyMsg,
  setReplyMsg
}) => {

  useEffect(() => {
    setOnePost('');
}, []);




  return (
      <main>
  <section id="posts-filters-panel">
    <PostCards posts={posts} setPosts={setPosts} token={token} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost} replyMsg={replyMsg} setReplyMsg={setReplyMsg}/>
  </section>
  


  <section id="posts-detailed-view">
    <SinglePost onePost={onePost} replyMsg={replyMsg} setReplyMsg={setReplyMsg} meProfile={meProfile}/>
  </section>
  </main>

      );
  }
    
    export default Home;