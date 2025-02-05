import './App.css';
import Navbar from './Components/Navbar';
import AuthProvider from './Context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routes/Routers';

function App() {
  return (
    <BrowserRouter>
      
      <AuthProvider>
      <Navbar />
        <Routers />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
