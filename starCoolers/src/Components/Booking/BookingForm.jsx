import { useLocation } from "react-router-dom";
import { useState } from "react";

const BookingForm = () => {
  const location = useLocation();
  const { serviceName, price } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [statusMessage, setStatusMessage] = useState("");      // ✅ Message text
  const [messageType, setMessageType] = useState("");          // ✅ "success" or "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, address } = formData;

    if (!name || !email || !phone || !address) {
      setStatusMessage("❌ Please fill in all the fields.");
      setMessageType("error");
      return;
    }

    const finalData = {
      ...formData,
      service: serviceName,
      amount: price,
    };

    console.log("Booking Details:", finalData);

    setStatusMessage("✅ Booking submitted successfully!");
    setMessageType("success");

    // Clear form after success
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Buy Now</h2>

      {/* ✅ Status message on top */}
      {statusMessage && (
        <div
          className={`mb-4 px-4 py-2 text-center rounded-md font-medium ${
            messageType === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {statusMessage}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Service</label>
          <input
            type="text"
            value={serviceName}
            readOnly
            className="w-full border px-3 py-2 rounded-md bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Amount</label>
          <input
            type="text"
            value={price}
            readOnly
            className="w-full border px-3 py-2 rounded-md bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
