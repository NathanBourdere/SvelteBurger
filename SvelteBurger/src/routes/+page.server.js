/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    try {
        const url = 'https://my-burger-api.herokuapp.com/burgers/';
        const options = {
	    method: 'GET',
};
        const response = await fetch(url,options);
        const data = await response.json();
        return {
            props: {
                data,
                error:null,
            }
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                error: "Error fetching data",
                data:null
            }
        };
    }
};


