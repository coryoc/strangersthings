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

export default getPosts;