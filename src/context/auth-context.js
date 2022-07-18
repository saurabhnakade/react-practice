import React from "react";

const authContext = React.createContext({
    authenticated:false,
    login:()=>{}

    // we have written this just 
    // for better auto complete 
    // support in our IDE
});

export default authContext