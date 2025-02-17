import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/features/AuthSlice';
import SearchBar from './SearchBar';
import { toast } from 'react-hot-toast';
import { FaHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaCartShopping} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";


const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.cart.cart.length);
  const wishlistCount = useSelector((state) => state.wishlist.wishlist.length);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    toast.success("Logout successfully!");
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-primary p-4 flex items-center justify-center z-50">
      <nav className="container flex mx-auto flex-col md:flex-row lg:justify-between">
        <ul className=" space-x-6 text-xl mb-4 md:mb-0  ">
          <li>
            <Link to="/" className="text-textcolor text-xl hover:text-[#0D121D] border-b-4 border-[#0D121D]">ALL IN ONE STORE</Link>
          </li>
        </ul>
        <div className="hidden md:block">
          <SearchBar />
        </div>
        {/* this is for mobile */}
        <div className="md:hidden absolute top-4 right-4">
          {/* Burger Icon */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-textcolor text-2xl ">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* this is for desktop */}
        <ul className="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-xl">
          <li>
            <Link to="/products" className="text-textcolor">Products</Link>
          </li>
          {user && user.role === 'buyer' && (
            <>
              <li>
                <Link to="/cart" className="text-textcolor"><FaCartShopping className='text-xl inline-block'/>
                <sup className="text-sm font-bold bg-white text-black p-1 rounded-full">{cartCount}</sup>
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-textcolor"><FaHeart className='text-xl inline-block gap-2' />Wishlist
                <sup className='text-sm font-bold bg-white text-black p-1 rounded-full '>
              {wishlistCount}        
                </sup>
                </Link>
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
      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary p-4 mt-2">
        <div className="  w-48 mt-2 md:block">
          <SearchBar />
        </div>
          <ul className="flex flex-col space-y-4 ">
            <li>
              <Link to="/products" className="text-textcolor">Products</Link>
            </li>
            {user && user.role === 'buyer' && (
              <>
                <li>
                  <Link to="/cart" className="text-textcolor"><FaCartShopping className='text-xl inline-block'/>
                  <sup className="text-sm font-bold bg-white text-black p-1 rounded-full">{cartCount}</sup>
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="text-textcolor"><FaHeart className='text-xl inline-block gap-2' />Wishlist
                  <sup className='text-sm font-bold bg-white text-black p-1 rounded-full '>
              {wishlistCount}        
                </sup>
                  </Link>
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
        </div>
            )}
    </div>
  );
};

export default Navbar;