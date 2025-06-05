

export default function ResturauntCard({ resData }) {
  const {cloudinaryImageId ,name,cuisines, sla,avgRating,costForTwo} = resData?.info;
  return (
    <div className="res-card">
      <img src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}alt="" className="img"/>

      <h5 className="res-name">{name}</h5>
      <h4 className="res-data">{cuisines.join(", ")}</h4>
      <h4 className="res-data">{sla.deliveryTime} mins</h4>
      <h4 className="res-data">{costForTwo}</h4>
      <h4 className="res-data">{avgRating}⭐</h4>
    </div>
  );
}
