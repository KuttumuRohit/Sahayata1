import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../photos/2.png'; 
export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                // className="mr-3 h-16"
                                alt="Logo"
                                style={{
                                    height: '80px',
                                    width: '150px',
                                    objectFit: 'cover', // Ensures the image covers its allocated space without distortion
                                  }}
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="">
                                <li className="mb-4">
                                    <NavLink to="/" /*className="hover:underline"*/ className={({isActive}) =>
                                        `${isActive? "text-orange-700":"text-gray-700"} hover:underline text-gray-500 font-medium`
                                    }>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink to="/about" /*className="hover:underline"*/ className={({isActive}) =>
                                        `${isActive? "text-orange-700":"text-gray-700"} hover:underline text-gray-500 font-medium`
                                    }>
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/KuttumuRohit/Sahayata1"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="https://discord.gg/FSYR9kxV" className="hover:underline" target="_blank"
                                        rel="noreferrer">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                
            </div>
        </footer>
    );
}
