import { TOKEN_STORAGE_KEY } from "../../App";

export const msgAuthor = async (onePost, replyMsg) => {
    try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/posts/${onePost._id}/messages`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN_STORAGE_KEY}`
                    },
                body: JSON.stringify({
                    message: {
                        content: `${replyMsg}`
                    }
                    })
                });
            const results = await response.json();
            
            console.log(results);
                
            if (results.error) 
            {alert(results.error.message);}

            
            return results;

        } catch (error) {
        console.log("An error occurred when trying to create a new post.");
        console.error(error);

        throw error;
    }
};

export default msgAuthor;