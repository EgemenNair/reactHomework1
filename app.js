// Import axios;
import axios from "axios";

// Define and export an async function;
export default async function getData(userID) {
    //  Use try and catch to detect errors;
    try {
        // Allow only number input type;
        (typeof(userID) === "number") ? console.log(`Data type is ${typeof(userID)}.`) : (function() {throw `Data type is ${typeof(userID)}`} )();
        
    } catch (error) {
        console.log(`Error: ${error}`);
    };
};
