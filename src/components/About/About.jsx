import React from 'react';
import Card from '../Card/Card'; // Adjust the path if necessary
import Mouli from '../../photos/Mouli.png'; 
import Sher from '../../photos/Sher.png'; 
import Kavya from '../../photos/Kavya.png'; 

export default function About() {
    // Sample data for the card components
    const teamMembers = [
        {
            image: Mouli,
            name: 'Gude Chandramouli',
            jobTitle: 'FrontEnd Developer',
            description: 'I am a proficient FrontEnd developer.',
            linkedin: 'https://www.linkedin.com/in/chandramouli018?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/ChandramouliGude'
        },
        {
            image: Sher,
            name: 'B Shreyansh',
            jobTitle: 'Back End Developer',
            description: 'Passionate about web applications.',
            linkedin: 'https://www.linkedin.com/in/bachchu-shreyansh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/Sheryansh0'
        },
        {
            image: Kavya,
            name: 'Ch Kavya',
            jobTitle: 'UI/UX Designer',
            description: 'Creating user-centered designs.',
            linkedin: 'https://www.linkedin.com/in/chittoju-kavya-sri-541852287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/Kavya592'
        }
    ];

    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                
                <div id="what_we_Do" className="bg-white py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">OUR MISSION</h1>
                <p className="text-lg text-gray-700 leading-7 max-w-4xl mx-auto">
                At Sahayata, our mission is to make a meaningful impact in the lives of those in need. We believe in the power of community and compassion, and we strive to create a world where everyone has the opportunity to thrive. Through our dedicated efforts, we aim to address pressing social issues and uplift marginalized individuals and communities. <br /> Our commitment extends beyond immediate assistance; we focus on sustainable solutions that empower individuals to improve their circumstances. By fostering collaboration among various stakeholders, we seek to create a network of support that not only meets immediate needs but also inspires long-term growth and self-sufficiency.
                </p>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">MEET OUR MEMBERS</h1>
                {/* Card Section */}
                <div className="mt-12 flex justify-center space-x-4"> {/* Flexbox for horizontal layout */}
                    {teamMembers.map((member, index) => (
                        <Card
                            key={index}
                            image={member.image}
                            name={member.name}
                            jobTitle={member.jobTitle}
                            description={member.description}
                            linkedin={member.linkedin}
                            github={member.github}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
