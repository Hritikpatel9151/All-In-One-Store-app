import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="bg-primary p-4">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <ul className="flex space-x-6 text-xl mb-4 md:mb-0">
          <li>
            <Link to="/" className="text-textcolor text-xl hover:text-black">Home</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <input type="text" placeholder="Search..." className="px-2 py-1 rounded-md" />
          <button type="submit" className="bg-white text-text px-3 py-1 rounded-full hover:bg-[#0D121D] hover:text-white transition duration-200">Search</button>
        </div>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-xl">
          <li>
            <Link to="/products" className="text-textcolor">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="text-textcolor">Cart</Link>
          </li>
          <li>
            <Link to="/login" className="text-textcolor">Login</Link>
          </li>
          <li>
            <Link to="/logout" className="text-textcolor">Logout</Link>
          </li>
          {/* <li>
            <Link to="/signup" className="text-textcolor">SignUp</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;