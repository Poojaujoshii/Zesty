import { useDispatch } from "react-redux";
import { addItem } from "../Utilities/CartSlice";

export default function MenuItemCard({ item }) {
  const {
    name,
    description,
    imageId,
    price,
    ratings,
    defaultPrice,
  } = item?.card?.info;

  const imageURL = imageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`
    : "https://via.placeholder.com/150";

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex justify-between items-start border-b pb-6 mb-4">
      {/* Left Text Info */}
      <div className="flex-1 pr-4">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-green-600 font-medium mb-1">
          ₹{(price || defaultPrice) / 100}
        </p>
        {ratings?.aggregatedRating?.rating && (
          <p className="text-yellow-400 text-sm mb-1">
            ⭐ {ratings.aggregatedRating.rating}
          </p>
        )}
        <p className="text-gray-600 text-sm leading-snug">
          {description?.slice(0, 120)}
          {description?.length > 120 && "..."}
        </p>
      </div>

      {/* Image & ADD Button */}
      <div className="w-28 relative">
        <img
          className="rounded-lg shadow-md object-cover w-full h-24 border border-gray-200"
          src={imageURL}
          alt={name}
        />
        <button
          onClick={() => handleAddItem(item)}
          className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold text-xs px-4 py-1 rounded-full shadow-md transition-all"
        >
          ADD
        </button>
      </div>
    </div>
  );
}
