// src/pages/Cart.jsx
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utilities/CartSlice";
import CartItemCard from "./CartItemCard";
import { useNavigate } from "react-router-dom";
import { getItemTotal } from "../Utilities/CartUtils";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);

  // Calculate total
 const totalAmount = cartItems.reduce((total, item) => {
  return total + getItemTotal(item);
}, 0);


  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-8">
        Your Zesty Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <CartItemCard key={index} item={item} />
            ))}
          </div>

          {/* Total & Actions */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t pt-6">
           <p className="text-2xl font-semibold text-green-800">
           Total: ₹{(total / 100).toFixed(2)}
          </p>


            <div className="space-x-4">
              <button
                onClick={handleClear}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Clear Cart
              </button>

              <button
                onClick={() => navigate("/checkout")}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
