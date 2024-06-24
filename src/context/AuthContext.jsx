import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      const fetchUserData = async () => {
        try {
          // Decodifica o username antes de enviar para a rota da API
          const decodedUsername = atob(storedUsername);
          const response = await axios.get(`http://localhost:8080/api/auth/user?username=${decodedUsername}`);
          setUserData(response.data);
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      };

      fetchUserData();
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/', {
        username,
        password
      });

      const token = response.data.lastLogin.token;
      const usernameStored = response.data.registerDto.username;

      // Codificar os valores antes de armazenar no localStorage
      localStorage.setItem('token', btoa(token));
      localStorage.setItem('username', btoa(usernameStored));

      setAuthToken(token);
      setUserData(response.data);

      return true;
    } catch (error) {
      console.error('Login failed', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setAuthToken(null);
    setUserData(null);
  };

  const isAuthenticated = () => {
    return authToken !== null;
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        userData,
        login,
        logout,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
