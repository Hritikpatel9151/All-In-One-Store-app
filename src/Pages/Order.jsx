import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/features/CartSlice";
import { toast } from "react-hot-toast";
import CustomToast from "../CustomToast/CustomToast";
const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleclick = () => {
    toast.custom(<CustomToast />);
    dispatch(clearCart());
    navigate("/products");
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-black rounded-lg mx-auto mt-[50px] max-w-[500px] h-[500px] flex flex-col gap-4 p-4">
        <div className="flex justify-center">
          <h1 className="text-3xl text-primary">Order Details</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-primary text-xl">Items:</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <p className="text-primary text-xl">{item.title}</p>
              <p className="text-primary text-xl">
                ${item.price} x {item.quantity}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <h2 className="text-primary">Total Price:</h2>
          <h2 className="text-primary">${totalPrice}</h2>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-primary">Payment Method:</h2>
          <select className="bg-gray-800 text-white w-[200px] h-[45px] rounded-lg outline-none">
            <option value="cash">Cash</option>
            <option value="card">Card</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleclick}
            className="bg-primary text-black p-2 rounded w-[150px]"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
