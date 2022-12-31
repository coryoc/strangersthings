

export const getMe = async (meProfile, setMeProfile, token) => {

    try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/users/me`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FiNjJmYzQzY2ZhNjAwMTdiNjdjNmUiLCJ1c2VybmFtZSI6Im1vYmFtYmEiLCJpYXQiOjE2NzIzNDUwNTd9.gmC3Uwic-wPfcs5u95G6mxeltGSugooCYrfZ8ac0Cy0`
                    },
                });
            const results = await response.json();
            
            const freshProfile = results.data;

            

            return freshProfile;

        } catch (error) {
        console.log("An error occurred when trying to retrieve profile information.");
        console.error(error);

        throw error;
    }
};

export default getMe;