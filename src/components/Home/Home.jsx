import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../photos/ban2.png'; 
import logo2 from '../../photos/ban3.png';
import logo3 from '../../photos/ban4.png';
import logo4 from '../../photos/ban5.png';
import medical from '../../photos/medical.png';
import education from '../../photos/education.png';
import environment from '../../photos/environment.png';
import oldage from '../../photos/oldage.png';
import orphanage from '../../photos/orphanage.png'; // Corrected the spelling of orphanage

// Sample cause data
const causeData = [
    {
        name: "Education",
        description: "At Sahayata, we believe that education is the foundation for a better future. Our programs provide scholarships, tutoring, and resources to ensure that every child has the opportunity to learn and grow, breaking the cycle of poverty. We also offer mentorship programs that connect students with professionals in their desired fields, helping them navigate their educational journeys effectively. Additionally, we conduct workshops on skill development, teaching practical skills that enhance employability and equip students for the workforce. By partnering with schools and local communities, we aim to create an inclusive learning environment for all children, regardless of their background.",
        image: education,
    },
    {
        name: "Healthcare",
        description: "Access to quality healthcare is essential for all. We work tirelessly to provide medical services, health camps, and support for those in need, ensuring that everyone has access to the care they deserve, regardless of their background. Our initiatives include mental health awareness programs, crucial in underserved communities, and collaboration with local clinics to offer free health check-ups and vaccination drives. We also provide essential medicines and healthcare education to families, empowering them to make informed health choices. Our holistic approach focuses on improving both physical and mental health, creating healthier communities.",
        image: medical,
    },
    {
        name: "Poverty Alleviation",
        description: "Our mission extends to fighting poverty through sustainable programs that empower individuals. We provide job training, microloans, and essential resources to help families lift themselves out of poverty and achieve financial independence. In addition to focusing on financial literacy, we also support small businesses with mentorship and resources to stimulate local economies. Our initiatives encourage entrepreneurship, providing training in essential skills like marketing, budgeting, and customer service, helping individuals build sustainable livelihoods and contribute positively to their communities.",
        image: orphanage,
    },
    {
        name: "Old Age Home Help",
        description: "We recognize the importance of caring for our elderly population. Our initiatives provide support to old age homes through food donations, healthcare services, and companionship programs that ensure the dignity and happiness of our seniors. We organize recreational activities and health check-ups to enhance their well-being, along with providing mental health support to combat loneliness and isolation. Furthermore, we engage the community in visiting seniors, fostering intergenerational relationships and encouraging respect and care for our elders.",
        image: oldage,
    },
    {
        name: "Environment Help",
        description: "Protecting our planet is crucial for future generations. Our environmental programs focus on tree planting, waste management, and community clean-up drives, encouraging sustainable practices that promote a healthier and greener world. We educate communities on recycling and conservation efforts, and conduct workshops on sustainable agriculture to help families grow their own food responsibly. Additionally, we advocate for environmental awareness through campaigns and collaborations with local organizations to drive community participation in environmental protection initiatives.",
        image: environment,
    },
];

const bannerImages = [
    { src: logo1, alt: 'Banner 1' },
    { src: logo2, alt: 'Banner 2' },
    { src: logo3, alt: 'Banner 3' },
    { src: logo4, alt: 'Banner 4' }
];

export default function Home() {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
    const [fade, setFade] = useState(false); // State for fade effect

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true); // Start fading out
            setTimeout(() => {
                setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
                setFade(false); // Start fading in
            }, 500); // Delay to match fade out duration
        }, 10000); // Change banner every 10 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const goToNextBanner = () => {
        setFade(true); // Start fading out
        setTimeout(() => {
            setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
            setFade(false); // Start fading in
        }, 500); // Delay to match fade out duration
    };

    const goToPrevBanner = () => {
        setFade(true); // Start fading out
        setTimeout(() => {
            setCurrentBannerIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length);
            setFade(false); // Start fading in
        }, 500); // Delay to match fade out duration
    };

    return (
        <>
            <div className="relative Banner">
                <img
                    src={bannerImages[currentBannerIndex].src}
                    alt={bannerImages[currentBannerIndex].alt}
                    className={`transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`} // Fade effect
                    style={{ width: '100%', objectFit: 'cover' }}
                />
                {/* Left Arrow */}
                <button
                    onClick={goToPrevBanner}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
                    style={{ zIndex: 1 }}
                >
                    <span className="text-white text-3xl">&lt;</span> {/* Replace with an icon if needed */}
                </button>
                {/* Right Arrow */}
                <button
                    onClick={goToNextBanner}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
                    style={{ zIndex: 1 }}
                >
                    <span className="text-white text-3xl">&gt;</span> {/* Replace with an icon if needed */}
                </button>
            </div>

            <div id="what_we_Do" className="bg-white py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">WHAT WE DO</h1>
                <p className="text-lg text-gray-700 leading-7 max-w-4xl mx-auto">
                    At Sahayata, our mission is to address critical challenges in underserved communities by providing sustainable, long-term solutions. We focus on key areas such as education, healthcare, and poverty alleviation, offering immediate relief through essential resources like food, medical aid, and clothing. Beyond that, we work to empower individuals by offering vocational training, educational support, and access to opportunities that promote self-sufficiency and personal growth.<br/><br/>

                    Our programs are designed not only to meet urgent needs but also to foster lasting change. By partnering with local organizations and relying on the generosity of donors and volunteers, Sahayata strives to uplift individuals and communities, helping them build brighter, more independent futures. We are dedicated to creating hope and resilience in the lives of those we serve, ensuring that every effort has a meaningful and lasting impact.
                </p>
            </div>

            {/* New Section: Causes */}
            <div className="max-w-full mx-auto p-8 mt-8">
                <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">What We Aim to Achieve</h2>
                {causeData.map((cause, index) => (
                    <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} justify-between`}>
                        <div className="flex-1 flex justify-center">
                            <img src={cause.image} alt={cause.name} className="w-2/3 h-auto rounded-lg shadow-lg" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-start p-4">
                            <h3 className="text-4xl font-semibold text-gray-800 mb-2 text-center">{cause.name}</h3>
                            <p className="text-gray-600 text-justify">{cause.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
