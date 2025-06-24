export const getItemTotal = (item) => {
  const price = item.card?.info?.price || item.card?.info?.defaultPrice || 0;
  const quantity = item.quantity || 1;
  return price * quantity;
};
