import React from 'react'
import { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, user } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      if (user) {
        switch (user.role) {
          case 'admin':
            navigate('/admin');
            break;
          case 'seller':
            navigate('/seller');
            break;
          case 'buyer':
            navigate('/buyer');
            break;
          default:
            navigate('/');
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default Login
