
import getPosts from "./components/fetches";
import PostCards from "./components/PostCards";
import SinglePost from "./components/SinglePost";
import Login from "./components/Login";
import Home from "./components/Home";

import React from "react";
import { useEffect, useState, Link } from "react";
import { Routes, Route } from 'react-router-dom';

import './css/App.css';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
const COHORT_NAME='2209-FTB-ET-WEB-PT';
const TOKEN_STORAGE_KEY="";

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');
  const [onePost, setOnePost] = useState();


  useEffect(() => {
    const storageToken = localStorage.getItem(TOKEN_STORAGE_KEY);

        setToken(storageToken);

      }, []);
    
  
  return (
  <div className="App">

    <header id="header">
      <h1>ChappyList</h1>
    </header>

    <Routes>
        <Route path="/SinglePost/:postId" element={<SinglePost posts={posts} setPosts={setPosts} token={token} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost}/>}/>
        <Route exact path="/" element={<Home posts={posts} setPosts={setPosts} token={token} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost}/>}/>
        <Route path="/Login" element={<Login posts={posts} setPosts={setPosts} token={token} postId={postId} setPostId={setPostId} onePost={onePost} setOnePost={setOnePost} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}/>

      </Routes>
  
  </div>
  );
}

export default App;
