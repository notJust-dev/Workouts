import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  username: '',
  setUsername: (username) => {},
});

const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
