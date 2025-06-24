import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItemTotal } from "../Utilities/CartUtils";

export default function Checkout() {
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const totalAmount = cartItems.reduce((total, item) => {
  return total + getItemTotal(item);
}, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, address, phone, cardNumber, expiry, cvv } = form;

    if (!name || !address || !phone || !cardNumber || !expiry || !cvv) {
      alert("Please fill out all fields.");
      return;
    }

    // Simulate successful order
    navigate("/thankyou", { replace: true });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
        Checkout
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-6 space-y-6"
      >
        {/* Shipping Details */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Shipping Details
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <textarea
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Payment Details */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Payment Details
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              maxLength={16}
              value={form.cardNumber}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                maxLength={5}
                value={form.expiry}
                onChange={handleChange}
                className="w-1/2 border rounded px-3 py-2"
              />
              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                maxLength={3}
                value={form.cvv}
                onChange={handleChange}
                className="w-1/2 border rounded px-3 py-2"
              />
            </div>
          </div>
        </div>

        {/* Total and Submit */}
        <div className="flex justify-between items-center pt-4 border-t">
          <p className="text-xl font-semibold text-green-700">
            Total: ₹{(totalAmount / 100).toFixed(2)}
          </p>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
