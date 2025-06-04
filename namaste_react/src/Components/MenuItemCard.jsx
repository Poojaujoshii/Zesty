// MenuItemCard.jsx
import "./CSS/MenuItem.css"

export default function MenuItemCard({ item }) {
  const { name, description, imageId, price, ratings,defaultPrice } = item?.card?.info;

  const imageURL = imageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`
    : "https://via.placeholder.com/150";

  return (
    <div className="menu-card">
      <div className="menu-details">
        <h3>{name}</h3>
        <p className="menu-price">₹{price /100 ||defaultPrice / 100}</p>
        {ratings?.aggregatedRating?.rating && (
          <p className="menu-rating">⭐ {ratings.aggregatedRating.rating}</p>
        )}
        <p className="menu-description">
          {description?.slice(0, 120)}
          {description?.length > 120 && "..."}
        </p>
      </div>
      <div className="menu-image-wrapper">
        <img className="menu-image" src={imageURL} alt={name} />
        <button className="add-btn">ADD</button>
      </div>
    </div>
  );
}
