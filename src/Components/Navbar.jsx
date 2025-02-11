import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/features/AuthSlice';
import SearchBar from './SearchBar';
import { toast } from 'react-hot-toast';
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.cart.cart.length);
  const wishlistCount = useSelector((state) => state.wishlist.wishlist.length);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    toast.success("Logout successfully!");
  };

  return (
    <div className="bg-primary p-4">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <ul className="flex space-x-6 text-xl mb-4 md:mb-0">
          <li>
            <Link to="/" className="text-textcolor text-xl hover:text-[#0D121D] border-b-4 border-[#0D121D]">ALL IN ONE STORE</Link>
          </li>
        </ul>
        <SearchBar />
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-xl">
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
    </div>
  );
};

export default Navbar;