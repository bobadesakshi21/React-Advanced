import React from "react";

// Object that also contains a component.
const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;