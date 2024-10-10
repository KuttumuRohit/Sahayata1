// DonationForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal'; // Adjust the import path if necessary

const DonationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        amount: '',
        cause: 'Old Age Home',
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const causes = ['Old Age Home', 'Orphanage', 'Medical Emergency', 'Education', 'Environmental'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Client-side Validation
        if (!formData.name || !formData.email || !formData.amount || !formData.cause) {
            setModalTitle('Validation Error');
            setModalMessage('Please fill in all the required fields.');
            setIsModalOpen(true);
            setIsProcessing(false);
            return;
        }

        if (isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
            setModalTitle('Validation Error');
            setModalMessage('Please enter a valid donation amount.');
            setIsModalOpen(true);
            setIsProcessing(false);
            return;
        }

        try {
            const response = await axios.post('https://sahayata-backend-beta.onrender.com/api/donate', {
                name: formData.name,
                email: formData.email,
                amount: parseFloat(formData.amount),
                cause: formData.cause,
            });

            setModalTitle('Thank You!');
            setModalMessage('Your donation has been successfully submitted.');
            setIsModalOpen(true);
            setFormData({
                name: '',
                email: '',
                amount: '',
                cause: 'Old Age Home',
            });
        } catch (error) {
            console.error('Donation Error:', error);
            let errorMsg = 'There was an error processing your donation. Please try again.';
            if (error.response && error.response.data && error.response.data.message) {
                errorMsg = error.response.data.message;
            }
            setModalTitle('Donation Error');
            setModalMessage(errorMsg);
            setIsModalOpen(true);
        }

        setIsProcessing(false);
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
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Your Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                </div>

                {/* Amount Field */}
                <div>
                    <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
                        Donation Amount (₹)
                    </label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        min="1"
                        step="0.01" // Allows for rupee precision
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Enter amount in ₹"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                        value={formData.cause}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                        className={`w-full bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition duration-200 ${
                            isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={isProcessing}
                    >
                        {isProcessing ? 'Processing...' : 'Donate Now'}
                    </button>
                </div>
            </form>

            {/* Success/Error Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
                <p className="text-gray-700">{modalMessage}</p>
            </Modal>
        </div>
    );
};

export default DonationForm;
