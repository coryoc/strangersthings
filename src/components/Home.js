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
    setOnePost
}) => {
    return (
        <main>
    <section id="posts-filters-panel">
      <PostCards posts={posts} setPosts={setPosts} token={token} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost}/>
    </section>
    


    <section id="posts-detailed-view">
      <SinglePost posts={posts} setPosts={setPosts} token={token} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost}/>
    </section>
    </main>

        );
    }
    
    export default Home;