import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { logout } from '../Redux/features/AuthSlice';
//import { AuthContext } from '../Context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
//import products from '../MokeData/products';
import SearchBar from './SearchBar';

const Navbar = () => {
   const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // const handleClick = () => {
  //   console.log('Search for:', searchValue);
    
  // };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    console.log('User logged out');
  };

  return (
    <div className="bg-primary p-4">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <ul className="flex space-x-6 text-xl mb-4 md:mb-0">
          <li>
            <Link to="/" className="text-textcolor text-xl hover:text-[#0D121D] border-b-4 border-[#0D121D]">ALL IN ONE STORE</Link>
          </li>
        </ul>
        {/* <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            placeholder="Search..."
            className="px-2 py-1 rounded-md"
          />
          <button
            type="submit"
            onClick={handleClick}
            className="bg-white text-text px-3 py-1 rounded-full hover:bg-[#0D121D] hover:text-white transition duration-200"
          >
            Search
          </button>
        </div> */}
        <div className="max-w-md mx-auto my-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <SearchBar/>
        </div>

        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-xl">
          <li>
            <Link to="/products" className="text-textcolor">Products</Link>
          </li>
          {user && user.role === 'buyer' && (
            <>
              <li>
                <Link to="/cart" className="text-textcolor">Cart</Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-textcolor">Wishlist</Link>
              </li>
            </>
          )}
          {!user ? (
            <li>
              <Link to="/login" className="text-textcolor">Login</Link>
            </li>
          ) : (
            <li>
              <button onClick={handleLogout} className="text-textcolor">Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;