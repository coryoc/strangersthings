;

export const msgAuthor = async (onePost, replyMsg, token, ) => {
    try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/posts/${onePost._id}/messages`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FiNjJmYzQzY2ZhNjAwMTdiNjdjNmUiLCJ1c2VybmFtZSI6Im1vYmFtYmEiLCJpYXQiOjE2NzI0OTAyMjF9.SIcejIQlE8hs0G2RQgoAWfvQIGJN_9IK3yHJy7GGRsw`
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