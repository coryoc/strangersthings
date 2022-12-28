import React from 'react';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
const COHORT_NAME='2209-FTB-ET-WEB-PT';


export const getPosts = async () => {
    try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/posts`,);
        const results = await response.json();	
        const posts = results.data.posts;
        return posts;

    } catch (error) {
        console.log("An error occurred when trying to retrieve posts.");
        console.error(error);

        throw error;
    }
};

export const logIn = async (username, password, token, setToken) => {
    try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/users/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                    }, 
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password,
                        }
                    })
                });
            const results = await response.json();
            const newToken = results.data.token;
            
                token=newToken;
                console.log(token);

            return newToken;

        } catch (error) {
        console.log("An error occurred when trying sign up for a new account.");
        console.error(error);

        throw error;
    }
};


export const signUp = async (username, password) => {
    try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/users/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                    }, 
                body: JSON.stringify({
                    user: {
                        username,
                        password,
                        }
                    })
                });
            const results = await response.json();
            
            
            console.log(results);
            return results;

        } catch (error) {
        console.log("An error occurred when trying sign up for a new account.");
        console.error(error);

        throw error;
    }
};

export default logIn;



