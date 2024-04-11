import axios from "axios";
import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loggedin,setLoggedin]=useState(false);

  const login = (newToken) => {
    
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setLoggedin(true);
  };

  const logout = async (e) => {
    if (token) {
      e.preventDefault();
      try {
        console.log("inside logout");
        // Make a DELETE request to the logout endpoint
        const response = await axios.delete(
          "https://past-2-present-backend-1.onrender.com/user/logout",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the token in the Authorization header
            },
          }
        );

        // Handle successful response
        if (response.status === 200) {
          console.log("Logged out successfully");
          //console.log(token)
          localStorage.removeItem("token");

          console.log(token);
          setToken(null);
          setLoggedin(false);
       
        } else {
          console.error("Logout failed");
          // Handle logout failure
        }
      } catch (error) {
        // setError("Logout unsuccessful");
        console.error("Error during logout:", error);
        //handle logout
      }
    }
  };

  return (
    <AuthContext.Provider value={{ token, logout,login,loggedin,setLoggedin }}>
      {children}
    </AuthContext.Provider>
  );
};
