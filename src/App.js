
import getPosts from "./components/fetches";
import PostCards from "./components/PostCards";
import SinglePost from "./components/SinglePost";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";

import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import './css/App.css';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
const COHORT_NAME='2209-FTB-ET-WEB-PT';
export const TOKEN_STORAGE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FiNjJmYzQzY2ZhNjAwMTdiNjdjNmUiLCJ1c2VybmFtZSI6Im1vYmFtYmEiLCJpYXQiOjE2NzIyNDUzNTV9.kyMrP6hM37Y0rbJ2Eep0j7q894_pvMP_mMIY724IIQw";

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');
  const [onePost, setOnePost] = useState('');

    
  
  return (
  <div className="App">

    <header id="header">
      <h1>ChappyList</h1>
      <Link to="/" className="header-links">Home</Link>
      <Link to="/posts" className="header-links">Posts</Link>
      <Link to="/login" className="header-links">Login</Link>
      <Link to="/profile" className="header-links">Profile</Link>
    </header>

    <Routes>
        <Route path="/SinglePost/:postId" element={<SinglePost posts={posts} setPosts={setPosts} token={token} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost}/>}/>
        <Route exact path="/" element={<Home posts={posts} setPosts={setPosts} token={token} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost}/>}/>
        <Route exact path="/posts" element={<Home posts={posts} setPosts={setPosts} token={token} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost}/>}/>
        <Route path="/login" element={<Login posts={posts} setPosts={setPosts} token={token} setToken={setToken} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}/>
        <Route path="profile" element={<Profile />} />
      </Routes>
  
  </div>
  );
}

export default App;
