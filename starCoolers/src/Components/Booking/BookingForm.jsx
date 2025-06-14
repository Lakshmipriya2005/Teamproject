import { useState } from "react";
import { Book } from 'lucide-react'

const BookingForm = () => {
  // Mock location state for demonstration
  const serviceName = "Water Purifier Repair";
  const price = "₹299";
  const serviceType = "repair";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      ...formData,
      service: serviceName,
      amount: price,
      servicetype: serviceType,
    };

    try {
      // Simulate API call
      console.log("Booking submitted:", bookingData);
      setSubmitted(true);
      setError(null);
    } catch (err) {
      console.error("Error submitting booking:", err);
      setError("Something went wrong while submitting the form.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg p-6 rounded-xl">
      <div className="flex items-center justify-center mb-4">
        <Book className="w-10 h-10 mr-3 text-orange-500" />
        <h2 className="text-2xl font-bold text-center">Book Your Service</h2>
      </div>

      {submitted ? (
        <div className="text-green-600 text-center font-semibold">
          ✅ Booking Submitted Successfully!
        </div>
      ) : (
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
            <label className="block mb-1 font-semibold">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
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

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600"
          >
            Submit Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;