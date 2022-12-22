import { useHistory, Link } from 'react-router-dom';
import PostCards from "./PostCards";
import signUp from "./fetches";
import logIn from "./fetches";
import React from 'react';

const setTargetValue = (callback) => {
    return (event) => {
     event.preventDefault();
     callback(event.target.value);

       };
   };

const Login= ({
    username,
    setUsername,
    password,
    setPassword,
    posts,
    setPosts,
    token,
    postId,
    setPostId,
    onePost,
    setOnePost
  }) => 
  

  { 
    return (
        <main>
           <section id="login-card">
            <h3>Time to Login</h3>
            <div id="login-card-backsplash">
                <div>
                    <label id="label-username">Username</label>
                    <input id="input-username"
                    value={username} 
                    onChange={setTargetValue(setUsername)}/>
                </div>

                <div>

                    <label id="label-password">Password</label>
                    <input id="input-password"
                    value={password} 
                    onChange={setTargetValue(setPassword)                    
                    }
                    type={'password'}
                    />
                </div>

                <p>Existing User?</p>

            <button id="button-login" onClick={logIn(username, password)}>Login</button>

                <p>New User?</p>

            <button id="button-register">Create new account</button>
            </div>
        </section>
        </main>
        )            
        };

        

  export default Login;