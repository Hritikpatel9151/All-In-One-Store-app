import './App.css';
import Navbar from './Components/Navbar';
import AuthProvider from './Context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routes/Routers';
import { CartProvider } from './Context/CardContext';
import WishListProvider from './Context/WishListContext';

function App() {
  return (
    <BrowserRouter>
      
      <AuthProvider>
      <CartProvider>
      <WishListProvider>
        <Navbar />
        <Routers />
      </WishListProvider>
      </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
