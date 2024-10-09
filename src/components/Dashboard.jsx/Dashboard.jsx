import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [totalDonated, setTotalDonated] = useState(0);
    const [donationsByCause, setDonationsByCause] = useState([]);
    const [lastDonations, setLastDonations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isCauseOpen, setIsCauseOpen] = useState(false);
    const [isLastDonationsOpen, setIsLastDonationsOpen] = useState(false);

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const [totalRes, byCauseRes, lastDonationsRes] = await Promise.all([
                    axios.get('http://localhost:5000/api/donations/total'),
                    axios.get('http://localhost:5000/api/donations/by-cause'),
                    axios.get('http://localhost:5000/api/donations/last-5'), // New endpoint for last donations
                ]);

                setTotalDonated(totalRes.data.totalDonated || 0);
                setDonationsByCause(byCauseRes.data.donationsByCause || []);
                setLastDonations(lastDonationsRes.data.lastDonations || []); // Set last donations
            } catch (err) {
                console.error('Error fetching donations:', err);
                setError('Failed to load donation data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchDonations();
    }, []);

    const toggleCauseAccordion = () => setIsCauseOpen(!isCauseOpen);
    const toggleLastDonationsAccordion = () => setIsLastDonationsOpen(!isLastDonationsOpen);

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-10 text-red-500">{error}</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6 text-center">Donation Dashboard</h2>

            <div className="mb-8">
                <h3 className="text-xl font-medium text-gray-700">Total Donated:</h3>
                <p className="text-3xl font-bold text-orange-600">₹{totalDonated.toFixed(2)}</p>
            </div>

            <div>
                <h3 className="text-xl font-medium text-gray-700 mb-4 cursor-pointer" onClick={toggleCauseAccordion}>
                    Donations by Cause
                </h3>
                {isCauseOpen && (
                    <>
                        {donationsByCause.length > 0 ? (
                            <table className="min-w-full bg-white border mb-6">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">Cause</th>
                                        <th className="py-2 px-4 border-b">Total Amount (₹)</th>
                                        <th className="py-2 px-4 border-b">Number of Donations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {donationsByCause.map((cause, index) => (
                                        <tr key={index} className="text-center">
                                            <td className="py-2 px-4 border-b">{cause.cause}</td>
                                            <td className="py-2 px-4 border-b">{cause.totalAmount.toFixed(2)}</td>
                                            <td className="py-2 px-4 border-b">{cause.count}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="text-center mt-4">No donations available for this cause.</div>
                        )}
                    </>
                )}
            </div>

            <div>
                <h3 className="text-xl font-medium text-gray-700 mb-4 cursor-pointer" onClick={toggleLastDonationsAccordion}>
                    Recent Donations
                </h3>
                {isLastDonationsOpen && (
                    <>
                        {lastDonations.length > 0 ? (
                            <table className="min-w-full bg-white border">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">Donor Name</th>
                                        <th className="py-2 px-4 border-b">Amount (₹)</th>
                                        <th className="py-2 px-4 border-b">Cause</th>
                                        <th className="py-2 px-4 border-b">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lastDonations.map((donation, index) => (
                                        <tr key={index} className="text-center">
                                            <td className="py-2 px-4 border-b">{donation.name}</td>
                                            <td className="py-2 px-4 border-b">{donation.amount.toFixed(2)}</td>
                                            <td className="py-2 px-4 border-b">{donation.cause}</td>
                                            <td className="py-2 px-4 border-b">{new Date(donation.date).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="text-center mt-4">No recent donations available.</div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
