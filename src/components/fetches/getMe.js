import { TOKEN_STORAGE_KEY } from "../../App";

export const getMe = async (meProfile, setMeProfile) => {

    try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/users/me`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN_STORAGE_KEY}`
                    },
                });
            const results = await response.json();
            
            const freshProfile = results.data;
            
            
            console.log(freshProfile);

            if (results.error) 
            {alert(results.error.message);}

            return freshProfile;

        } catch (error) {
        console.log("An error occurred when trying to retrieve profile information.");
        console.error(error);

        throw error;
    }
};

export default getMe;