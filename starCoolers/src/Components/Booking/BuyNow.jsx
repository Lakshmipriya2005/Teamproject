import { useState } from "react";
import { ShoppingCart } from 'lucide-react'

const BuyNow = () => {
  // Mock location state for demonstration
  const serviceName = "Aquaguard Water Purifier 7L";
  const price = "₹18,000";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [message, setMessage] = useState(""); // For success or error messages
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage(""); // Clear message while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, address } = formData;

    // Validation: Check if all fields are ..
    if (!name || !email || !phone || !address) {
      setMessage("Please fill in all the fields.");
      setMessageType("error");
      return;
    }

    const finalData = {
      ...formData,
      product: serviceName,
      amount: price,
    };

    console.log("Purchase Details:", finalData);
    setMessage("Order placed successfully!");
    setMessageType("success");

    // Optionally reset the form after submission
    setFormData({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg p-6 rounded-xl">
      <div className="flex items-center justify-center mb-4">
        <ShoppingCart className="w-10 h-10 mr-3 text-green-600" />
        <h2 className="text-2xl font-bold text-center">Buy Now</h2>
      </div>

      {message && (
        <div
          className={`mb-4 text-center font-semibold p-2 rounded ${
            messageType === "success" ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"
          }`}
        >
          {message}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Shipping Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Product</label>
          <input
            type="text"
            value={serviceName}
            readOnly
            className="w-full border px-3 py-2 rounded-md bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Price</label>
          <input
            type="text"
            value={price}
            readOnly
            className="w-full border px-3 py-2 rounded-md bg-gray-100"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BuyNow;