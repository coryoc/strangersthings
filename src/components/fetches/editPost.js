import { TOKEN_STORAGE_KEY } from "../../App";

export const editPost = async (title, description, price, location, post) => {

    try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/posts/${post._id}`, {
                method: "PATCH",
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
                
            if (results.error) 
            {alert(results.error.message);}

            
            return results;

        } catch (error) {
        console.log("An error occurred when trying to edit an existing post.");
        console.error(error);

        throw error;
    }
};

export default editPost;