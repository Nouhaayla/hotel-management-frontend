import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext({
  user: null,
  handleLogin: (token, roles, email) => {},
  handleLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    const roles = localStorage.getItem("userRole");
    const email = localStorage.getItem("userId");
    return token && roles && email ? { token, roles, email} : null;
  });

  const handleLogin = (token, roles,email) => {
    try {
        localStorage.setItem("token", token);
        localStorage.setItem("userRole", roles);
        localStorage.setItem("userId", email);
        setUser({ token, roles, email});

        console.log("Logged in successfully with token:", token);
        console.log("Roles:", roles);
        console.log("User ID:", email);
    } catch (error) {
        console.error("Failed to handle login:", error);
    }
};


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
