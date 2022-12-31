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
            
            if (results.error) 
                {alert(results.error.message);
                    return results;}
                let newToken = results.data.token;
 
            return newToken;

        } catch (error) {
        console.log("An error occurred when trying to login with an existing account.");
        console.error(error);

        throw error;
    }
};

export default logIn;