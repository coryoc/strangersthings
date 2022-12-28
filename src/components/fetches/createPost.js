import { TOKEN_STORAGE_KEY } from "../../App";

export const createPost = async (title, description, price, location, willDeliver) => {

    try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/posts`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN_STORAGE_KEY}`
                    },
                body: JSON.stringify({
                    post: {
                        title: `${title}`,
                        description: `${description}`,
                        price: `${price}`,
                        location: `${location}`,
                    }
                    })
                });
            const results = await response.json();
            
            console.log(results);
 
            return results;

        } catch (error) {
        console.log("An error occurred when trying to create a new post.");
        console.error(error);

        throw error;
    }
};

export default createPost;