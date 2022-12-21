import React from 'react';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
const COHORT_NAME='2209-FTB-ET-WEB-PT';

export const getPosts = async () => {
    try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/posts`,);
        const results = await response.json();	
        const posts = results.data.posts;
        return posts;
    //    setPosts(data);
    //     console.log(setPosts);


    } catch (e) {
        console.log("An error occurred when trying to retrieve posts.");
        console.error(e);

        throw e;
    }
};

export default getPosts;

