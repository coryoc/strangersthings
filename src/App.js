
import getPosts from "./components/fetches/getPosts";
import PostCards from "./components/PostCards";
import SinglePost from "./components/SinglePost";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";

import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import './css/App.css';

export let TOKEN_STORAGE_KEY="";

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');
  const [onePost, setOnePost] = useState('');

  const [meProfile, setMeProfile] = useState({});
  const [replyMsg, setReplyMsg] = useState('');

  useEffect(() => {   TOKEN_STORAGE_KEY = token  }, [token]);

  return (
  <div className="App">

    <header id="header">
      <img href="./imgs/ChappyScript.png" alt="Chappylist" />
      <Link to="/" className="header-links">Home</Link>
      <Link to="/posts" className="header-links">Posts</Link>
      <Link to="/login" className="header-links">Login</Link>
      <Link to="/profile" className="header-links">Profile</Link>
    </header>

    <Routes>
        <Route path="/SinglePost/:postId" element={<SinglePost posts={posts} setPosts={setPosts} token={token} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost}/>}/>
        <Route exact path="/" element={<Home posts={posts} setPosts={setPosts} token={token} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost} meProfile={meProfile} setMeProfile={setMeProfile} />}/>
        <Route exact path="/posts" element={<Home replyMsg={replyMsg} setReplyMsg={setReplyMsg} posts={posts} setPosts={setPosts} token={token} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost} />}/>
        <Route path="/login" element={<Login TOKEN_STORAGE_KEY={TOKEN_STORAGE_KEY} posts={posts} setPosts={setPosts} token={token} setToken={setToken} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost} username={username} setUsername={setUsername} password={password} setPassword={setPassword} meProfile={meProfile} setMeProfile={setMeProfile}/>}/>
        <Route path="profile" element={<Profile token={token} meProfile={meProfile} setMeProfile={setMeProfile} setPosts={setPosts} setPostId={setPostId} setOnePost={setOnePost} onePost={onePost}/>} />
      </Routes>
  
  </div>
  );
}

export default App;
