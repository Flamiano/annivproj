import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import {
    FaFacebookSquare,
    FaInstagram,
    FaGithubSquare,
    FaTwitterSquare
} from 'react-icons/fa';

export const Footer = () => {
  // Optional: Define closeNav if you want to close the mobile nav when clicking a link
  const closeNav = () => {
    // Add logic to close the mobile menu if needed
    // For example, setNav(false) if you're using the setNav state from Navbar
  };

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-[#CFCBCE]'>
        <div>
            <h1 className="w-full text-3xl font-bold text-[#8A34CF]">ILY</h1>
            <p>&#169; {new Date().getFullYear()} Roel. All Rights Reserved. ILY</p>
            <p className='py-4'>This website is created with love by your babe, baby, love, sweetheart, your one and only, forever yours, and the one who cherishes every moment with you.</p>
            <div className='flex justify-between md:w-[75%] my-2'>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaGithubSquare size={30} />
                <FaTwitterSquare size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className="py-2 text-sm hover:text-[#8A34CF] ease-in-out duration-700">
                        <Link to="/" onClick={closeNav}>Home</Link>
                    </li>
                    <li className="py-2 text-sm hover:text-[#8A34CF] ease-in-out duration-700">
                        <Link to="/message" onClick={closeNav}>Message</Link>
                    </li>
                    <li className="py-2 text-sm hover:text-[#8A34CF] ease-in-out duration-700">
                        <Link to="/memories" onClick={closeNav}>Memories</Link>
                    </li>
                    <li className="py-2 text-sm hover:text-[#8A34CF] ease-in-out duration-700">
                        <Link to="/contact" onClick={closeNav}>Contact</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>CallSign</h6>
                <ul>
                    <li className="py-2 text-sm">Babe</li>
                    <li className="py-2 text-sm">Baby</li>
                    <li className="py-2 text-sm">Sophy</li>
                    <li className="py-2 text-sm">Asim</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Your Hobbies</h6>
                <ul>
                    <li className="py-2 text-sm">Mobile Legends</li>
                    <li className="py-2 text-sm">Eating</li>
                    <li className="py-2 text-sm">Watching NetFlix</li>
                    <li className="py-2 text-sm">Shopping Outfit</li>
                </ul>
            </div>
        </div>
    </div>
  );
};
