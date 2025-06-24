import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Utilities/CartSlice";

export default function CartItemCard({ item }) {
  const dispatch = useDispatch();

  const { name, imageId, price, defaultPrice } = item?.card?.info || item;
  const quantity = item.quantity || 1;

  const imageURL = imageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`
    : "https://via.placeholder.com/150";

  const itemPrice = price || defaultPrice || 0;

  const handleIncrease = () => {
    dispatch(addItem(item));
  };

  const handleDecrease = () => {
    dispatch(removeItem(item));
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center gap-4">
        <img
          src={imageURL}
          alt={name}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600 text-sm">Price: ₹{itemPrice / 100}</p>

          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={handleDecrease}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg"
            >
              –
            </button>
            <span className="text-md font-medium">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg"
            >
              +
            </button>
          </div>

          <p className="text-green-700 font-semibold text-sm mt-1">
            Subtotal: ₹{((itemPrice * quantity) / 100).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
