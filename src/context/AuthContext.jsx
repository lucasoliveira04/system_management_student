import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const checkTokenExpiration = () => {
      const storedUsername = localStorage.getItem('username');
      const storedLoginTime = localStorage.getItem('login');
      const storedToken = localStorage.getItem('token');

      if (storedUsername && storedLoginTime && storedToken) {
        const loginTime = new Date(storedLoginTime);
        const currentTime = new Date();
        const tenSecondsInMilliseconds = 10 * 24 * 60 * 60 * 1000;

        if (currentTime - loginTime > tenSecondsInMilliseconds) {
          // Se passaram mais de 10 segundos, limpa o localStorage
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          localStorage.removeItem('login');
          setAuthToken(null);
          setUserData(null);
          // Atualiza a página
          window.location.reload();
        } else {
          // Se ainda não passaram 10 segundos, busca os dados do usuário
          const fetchUserData = async () => {
            try {
              // Decodifica o username antes de enviar para a rota da API
              const decodedUsername = atob(storedUsername);
            
              const response = await axios.get(`http://localhost:8080/api/auth/user?username=${decodedUsername}`, {
              
              });

              setUserData(response.data);
            } catch (error) {
              console.error('Failed to fetch user data:', error);
            }
          };

          fetchUserData();
        }
      }
    };

    // Verifica a expiração do token a cada segundo
    const intervalId = setInterval(checkTokenExpiration, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/', {
        username,
        password
      });

      const token = response.data.lastLogin.token;
      const usernameStored = response.data.registerDto.username;
      const login = response.data.lastLogin.dateLogin;

      // Codificar os valores antes de armazenar no localStorage
      localStorage.setItem('token', btoa(token));
      localStorage.setItem('username', btoa(usernameStored));
      localStorage.setItem('login', login);

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
    localStorage.removeItem('login');
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
