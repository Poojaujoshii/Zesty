export default function RestaurantCard({ resData }) {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    sla,
    avgRating,
    costForTwo,
  } = resData?.info;

  return (
    <div className="w-64 rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300 m-4">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500">{cuisines.join(", ")}</p>

        <div className="mt-2 text-sm text-gray-600">
          <p>⏱ {sla?.deliveryTime} mins</p>
          <p>💰 {costForTwo}</p>
          <p>⭐ {avgRating}</p>
        </div>
      </div>
    </div>
  );
}
