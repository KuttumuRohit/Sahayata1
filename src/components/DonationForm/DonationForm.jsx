import React, { useState } from 'react';
import Modal from '../Modal/Modal'; // Adjust the import path as necessary

function DonationForm() {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    cause: 'Old Age Home',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const causes = ['Old Age Home', 'Orphanage', 'Medical Emergency', 'Education', 'Environmental'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful submission
        console.log('Donation Submitted:', formData);
        // Reset form
        setFormData({ name: '', amount: '', cause: 'Old Age Home' });
        // Open Thank You Modal
        setIsModalOpen(true);
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error('Error:', errorData.message);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-3xl font-semibold text-orange-700 mb-6 text-center">Make a Donation</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Amount Field */}
        <div>
          <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
            Donation Amount ($)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="1"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>

        {/* Cause Dropdown */}
        <div>
          <label htmlFor="cause" className="block text-gray-700 font-medium mb-2">
            Select Cause
          </label>
          <select
            id="cause"
            name="cause"
            className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.cause}
            onChange={handleChange}
            required
          >
            {causes.map((cause, index) => (
              <option key={index} value={cause}>
                {cause}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-orange-700 text-white font-semibold py-3 px-4 rounded-md hover:bg-orange-800 transition duration-200"
          >
            Donate Now
          </button>
        </div>

      </form>

      {/* Thank You Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Thank You for Your Donation!"
      >
        <p className="text-gray-700">
          We appreciate your generous support. Your donation will make a significant impact.
        </p>
      </Modal>
    </div>
  );
}

export default DonationForm;
