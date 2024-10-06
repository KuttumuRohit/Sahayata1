import React, { useState } from 'react';
import Modal from '../Modal/Modal'; // Adjust the import path as necessary

function FeedbackForm() {
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    feedback: '',
    stars: '5',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send feedback data to backend
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Feedback Submitted:', data);
      
      // Reset form
      setFeedbackData({ name: '', feedback: '', stars: '5' });
      // Open Thank You Modal
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setError('There was a problem submitting your feedback. Please try again later.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-3xl font-semibold text-orange-700 mb-6 text-center">We Value Your Feedback</h2>
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
            value={feedbackData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Feedback Field */}
        <div>
          <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
            Your Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Share your thoughts..."
            value={feedbackData.feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Stars Rating */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Rate Your Experience
          </label>
          <div className="flex space-x-1">
            {/* Render stars from left (1) to right (5) */}
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="cursor-pointer">
                <input
                  type="radio"
                  name="stars"
                  value={star}
                  className="hidden"
                  checked={feedbackData.stars === star.toString()}
                  onChange={handleChange}
                  required
                />
                <svg
                  className={`w-8 h-8 ${feedbackData.stars >= star ? 'text-orange-400' : 'text-gray-300'} hover:text-orange-500 transition-colors duration-200`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.286 3.962c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.377 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.962a1 1 0 00-.364-1.118L2.98 9.389c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.962z" />
                </svg>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-orange-700 text-white font-semibold py-3 px-4 rounded-md hover:bg-orange-800 transition duration-200"
          >
            Submit Feedback
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

      </form>

      {/* Thank You Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Thank You for Your Feedback!"
      >
        <p className="text-gray-700">
          We appreciate you taking the time to provide your feedback. Your input helps us improve.
        </p>
      </Modal>
    </div>
  );
}

export default FeedbackForm;
