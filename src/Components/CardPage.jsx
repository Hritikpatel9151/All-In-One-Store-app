// import {useContext} from 'react'
import { useSelector,useDispatch } from 'react-redux';
// import { CartContext } from '../Context/CardContext'
import { removeFromCart,incrementQuantity,decrementQuantity } from '../Redux/features/CartSlice'
const CardPage = () => {
  // const { cart, removeFromCart } = useContext(CartContext)
  const  dispatch  = useDispatch();
  const {cart}=useSelector((state)=> state.cart)
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className='text-gray-500'>Your cart is empty.</p>
      ) : (
        <div className='bg-primary shadow-2xl rounded-lg p-4'>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border-b border-black">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.CardPageTitle} className="h-[50px] w-[50px] rounded-full" />
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <button
                  className="px-3 py-1 bg-gray-200 text-black font-bold rounded"
                  onClick={() => dispatch(decrementQuantity(item.id, Math.max(1, item.quantity - 1)))}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-200 text-black font-bold rounded"
                  onClick={() => dispatch(incrementQuantity(item.id, item.quantity + 1))}
                >
                  +
                </button>
                <button className="text-red-500 font-bold" onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
            <button className="px-4 py-2 bg-black text-white font-bold rounded hover:bg-white hover:text-black transition-hover duration-300">Buy</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardPage
