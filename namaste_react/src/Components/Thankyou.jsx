// src/pages/ThankYou.jsx
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your order has been placed successfully.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
