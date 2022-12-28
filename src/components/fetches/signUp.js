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
            
            if (results.error) 
            {alert(results.error.message);}
            
            return results;

        } catch (error) {
        console.log("An error occurred when trying sign up for a new account.");

        throw error;
    }
};

export default signUp;