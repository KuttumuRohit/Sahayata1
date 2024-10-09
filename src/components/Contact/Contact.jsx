import { useState } from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal.jsx'; // Adjust the import path if necessary

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/contactus', formData);
            setModalTitle('Success');
            setModalMessage(response.data.message);
            setIsModalOpen(true); // Open modal on success
            setFormData({ name: '', email: '', message: '' }); // Clear form fields
        } catch (error) {
            console.error('Error submitting form:', error);
            setModalTitle('Error');
            setModalMessage('There was an error submitting the form. Please try again.');
            setIsModalOpen(true); // Open modal on error
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation, or contact us directly through the details below:
                            </p>

                            <div className="mt-4">
                                <p className="text-lg text-gray-600 font-medium">
                                    <strong>Email:</strong> Sahayata091024@gmail.com
                                </p>
                                <p className="text-lg text-gray-600 font-medium mt-2">
                                    <strong>Phone:</strong> 9392506176
                                </p>
                                <p className="text-lg text-gray-600 font-medium mt-2">
                                    <strong>Address:</strong> 1-25/8/14 Secunderabad, 500015
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="message" className="hidden">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
                {modalMessage}
            </Modal>
        </div>
    );
}
