import { useState } from "react";
import { Book } from 'lucide-react'
import axios from "axios";
import { useLocation } from "react-router-dom";

const BookingForm = () => {
  const location = useLocation();
  const { serviceType,serviceName, price } = location.state || {
    serviceType: "Water Purifier",
    serviceName: "Water Purifier Repair",
    price: "₹299",
  };
 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });


  const [message, setMessage] = useState(""); // For success or error messages
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage(""); // Clear message while typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phoneNumber, address } = formData;

    // Validation: Check if all fields are ..
    if (!name || !email || !phoneNumber || !address) {
      setMessage("Please fill in all the fields.");
      setMessageType("error");
      return;
    }

    const bookingData = {
      ...formData,
      service: serviceName,
      price: price.slice(1),
      serviceType: serviceType,
    };

    try {
      // Simulate API call
      const userId = localStorage.getItem("userid");
      const token = localStorage.getItem("token");
     const response = await fetch("http://localhost:8080/booked/bookeduser/" + userId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(bookingData),
    });
    setMessage("Service booked successfully!");
    setMessageType("success");
    } catch (err) {
      console.error("Error submitting booking:", err);
      setMessage("Something went wrong while submitting the form.");
      setMessageType("error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg p-6 rounded-xl">
      <div className="flex items-center justify-center mb-4">
        <Book className="w-10 h-10 mr-3 text-orange-500" />
        <h2 className="text-2xl font-bold text-center">Book Your Service</h2>
      </div>

      {message ? (
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
              name="phoneNumber"
              value={formData.phoneNumber}
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

          {messageType === "error" && <p className="text-red-500 text-sm">{message}</p>}
          {messageType === "success" && <p className="text-green-500 text-sm">{message}</p>}

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