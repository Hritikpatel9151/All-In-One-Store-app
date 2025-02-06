import { useNavigate } from "react-router-dom";
import users from "../MokeData/users"
import { createContext,useState } from 'react'

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const login = (email, password) => {
        
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            setUser(user);
        }
        
    }
    const logout = () => {
        setUser(null);
        navigate('/');
    }

  return (
      <AuthContext.Provider value={{ user, login, logout }}>
      {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider
