import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { useDispatch ,useSelector} from 'react-redux';
import  { toast} from 'react-hot-toast';
import CustomToastNotLoggedIn from '../CustomToast/CustomToastNotLoggedIn';
//import {toast} from "react-hot-toast"
//import {AuthContext} from '../Context/AuthContext';

// import { CartContext } from '../Context/CardContext';
import { addToCart } from '../Redux/features/CartSlice';
import {addToWishlist} from '../Redux/features/WishlistSlice';
const ProductCard = ({ product }) => {
 // const { user } = useContext(AuthContext);
  // const { addToCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const {user}=useSelector((state)=>state.auth)
 
  
  const handleAddToWishList = () => {
   
    dispatch(addToWishlist(product));
    toast.success("Added to wishlist");
  }
  const handleAddToCart = () => {
    
     dispatch(addToCart(product));
     toast.success("Added to cart");
    
  }
  
 
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4 transform duration-500 hover:translate-x-5 hover:-translate-y-5 hover:shadow-black">
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <img src={product.image} alt={product.title} className=" h-48 object-cover mb-4 w-full rounded" />
      <p className="text-lg font-semibold mb-4">${Number(product.price).toFixed(2)}</p>
      <div className="flex space-x-2">
      
        {user && (
          <>
            <button className="bg-primary text-[17px] text-secondary px-4 py-2 rounded hover:bg-secondary hover:text-primary transition duration-200"
            onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary hover:text-secondary transition duration-200"
            onClick={handleAddToWishList}
            >
              <FaHeart />
            </button>
          </>
        )}
        {!user && (
          <>
          <button className="bg-primary text-[17px] text-secondary px-4 py-2 rounded hover:bg-secondary hover:text-primary transition duration-200" onClick={() => toast.custom(<CustomToastNotLoggedIn />)} ><Link to="/login">Add to Cart</Link></button>
          <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary hover:text-secondary transition duration-200" onClick={() => toast.custom(<CustomToastNotLoggedIn />)}><Link to="/login"> <FaHeart /></Link></button>
          </>
        )}
       
        {/* <button className="bg-primary text-[17px] text-secondary px-4 py-2 rounded hover:bg-secondary hover:text-primary transition duration-200">Add to Cart</button>
        <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary hover:text-secondary transition duration-200">Add to WishList</button> */}
      </div>
    </div>
  );
}

export default ProductCard;