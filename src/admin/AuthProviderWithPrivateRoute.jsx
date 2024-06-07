import React, { createContext, useContext, useState, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { auth } from '../DB/firebaseConfig'; // Adjust the import according to your project structure
import { onAuthStateChanged } from 'firebase/auth';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Authentication provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe; // Unsubscribe from the listener when component unmounts
  }, []);

  // Value of the authentication context
  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only when authentication data is loaded */}
    </AuthContext.Provider>
  );
};

// Private route component to protect routes
export const PrivateRoute = ({ element, ...rest }) => {
  const { currentUser } = useAuth();

  return currentUser ? element : <Navigate to="/login" />; {/* Redirect to login if user is not authenticated */}
};
