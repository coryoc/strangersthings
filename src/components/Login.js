import { useEffect } from "react";
import PostCards from "./PostCards";
import logIn from "./fetches/logIn";
import signUp from "./fetches/signUp";
import React from 'react';
import { TOKEN_STORAGE_KEY } from "../App";
import getMe from "./fetches/getMe";

const recordChange = (change) => {
    return (e) => {
        e.preventDefault();
        change(e.target.value);
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
    setToken,
    postId,
    setPostId,
    onePost,
    setOnePost,
    meProfile, 
    setMeProfile
  }) => 
   

  

  { 

    useEffect(() => {

        getMe(meProfile, setMeProfile, token)
        .then((freshProfile) => {
            setMeProfile(freshProfile);
        })
        .then(() => {
           console.log(meProfile);
        })
        .catch((e) => {
          console.error('Error retrieving user profile info on initial page load.');
          console.error(e);
        });    }, []); 

    return (
        <main>
           <section id="login-card">
            <h3>Time to Login</h3>
            <div id="login-card-backsplash"
            >
                <div>
                    <label id="label-username">Username</label>
                    <input id="input-username"
                    value={username} 
                    onChange={recordChange(setUsername)}/>
                </div>

                <div>

                    <label id="label-password">Password</label>
                    <input id="input-password"
                    value={password}
                    type={'password'} 
                    onChange={recordChange(setPassword)}/>
                </div>

                <p>Existing User?</p>

            <button id="button-login" onClick={() => {
                logIn(username, password, token, setToken)
                    .then((newToken) => {
                        setToken(newToken);
                        }
                    )
                    .then(() => {
                        console.log(token);
                        }
                    )
               }
                }>Login</button>

                <p>New User?</p>

            <button id="button-register" onClick={() => signUp(username, password, token, setToken)}>Create new account</button>

            </div>
        </section>
        </main>
        )            
        };

        

  export default Login;