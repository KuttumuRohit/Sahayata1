import React from 'react'
import { Link } from 'react-router-dom';
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            OUR MISSION
                        </h2>
                        <p className="mt-6 text-gray-600">
                        At Sahayata, our mission is to make a meaningful impact in the lives of those in need. We believe in the power of community and compassion, and we strive to create a world where everyone has the opportunity to thrive. Through our dedicated efforts, we aim to address pressing social issues and uplift marginalized individuals and communities.
                        </p>
                        <p className="mt-4 text-gray-600">
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
