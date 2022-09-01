// Import axios;
import axios from "axios";

// Define and export an async function;
export default async function getData(userID) {
    //  Use try and catch to detect errors;
    try {
        // Allow only number input type;
        (typeof(userID) === "number") ? console.log(`Data type is ${typeof(userID)}.`) : (function() {throw `Data type is ${typeof(userID)}`} )();
        // Use axios to get json data and return the data;
        const {data: USER} = await axios(`https://jsonplaceholder.typicode.com/users/${userID}`);
        const {data: USER_POSTS} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
        return {USER, USER_POSTS}
    } catch (err) {
        console.log(`Error: ${err}`);
    };
};
