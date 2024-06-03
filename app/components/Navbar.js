"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiMessageSquare, FiLinkedin, FiGithub, FiInstagram, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <>
      <nav className="fixed w-full py-6 px-8 bg-blue-600 text-white flex justify-between items-center z-50">
        <div className="flex items-center text-2xl" style={{ fontSize: '1.5rem' }}>
          <div className="mr-4">
            <Image
              src="/images/ghibli.png"
              alt="MintyZ Logo 1"
              layout="intrinsic"
              width={60}
              height={60}
              className="hover:opacity-75 transform transition-transform duration-500 hover:rotate-180"
            />
          </div>
          <div className="border-l-2 border-white h-6 mx-2"></div>
          <button 
            onClick={toggleFlip} 
            className="relative focus:outline-none w-32 h-10"
            style={{ perspective: '1000px' }}
          >
            <span 
              className={`absolute inset-0 flex items-center justify-center text-white ${flipped ? 'animate-flipUp' : 'animate-flipDown'}`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              Menu
            </span>
            <span 
              className={`absolute inset-0 flex items-center justify-center text-white ${flipped ? 'animate-flipDown' : 'animate-flipUp'}`}
              style={{ backfaceVisibility: 'hidden', transform: 'rotateX(-180deg)' }}
            >
              Close
            </span>
          </button>
        </div>
        <div className="flex items-center text-xl" style={{ fontSize: '1.5rem' }}>
          <a href="mailto:zachvallarino@gmail.com?subject=Website%20Inquiry" className="flex items-center">
            <FiMessageSquare className="mr-2" />
            <span>Hire Me</span>
          </a>
        </div>
      </nav>
      {flipped && (
        <div className="fixed inset-0 bg-blue-700 text-white flex items-start pt-24 z-40">
          <div className="flex flex-col w-full pl-16 pr-16 border border-red-500 space-y-12">
          <div className="flex items-center space-x-10 mt-8">
  <div 
    className="border-b-2 rounded-md animate-slideIn" 
    style={{ borderBottomWidth: '10px', borderBottomColor: 'green', width: '5%' }}
  ></div>
  <div className="flex space-x-8">
    <a href="https://www.linkedin.com/in/zachary-vallarino-292b61aa/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
      <FiLinkedin size={30} />
    </a>
    <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
      <FiGithub size={30} />
    </a>
    <a href="https://www.instagram.com/zvallarino/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
      <FiInstagram size={30} />
    </a>
    <a href="mailto:zachvallarino@gmail.com?subject=Website%20Inquiry" className="hover:text-yellow-500">
      <FiMail size={30} />
    </a>
  </div>
</div>
            <div className="flex text-6xl font-extrabold space-x-8 items-center">
              <Link onClick={toggleFlip} className="w-80 hover:text-yellow-500 cursor-pointer" href="/">
                Home
              </Link>
              <div className="text-2xl font-normal text-center">Back to the Home Page</div>
            </div>
            <div className="flex text-6xl font-extrabold space-x-8 mt-12 items-center">
              <Link onClick={toggleFlip} className="w-80 hover:text-yellow-500 cursor-pointer" href="/work">
                Work
              </Link>
              <div className="text-2xl font-normal text-center">My Approach to Developing</div>
            </div>
            <div className="flex text-6xl font-extrabold space-x-8 mt-12 items-center">
              <Link onClick={toggleFlip} className="w-80 hover:text-yellow-500 cursor-pointer" href="/about">
                About
              </Link>
              <div className="text-2xl font-normal text-center">A Little About Me and My Work</div>
            </div>
            <div className="flex text-6xl font-extrabold space-x-8 mt-12 items-center">
              <Link onClick={toggleFlip} className="w-80 hover:text-yellow-500 cursor-pointer" href="/writing">
                Writing
              </Link>
              <div className="text-2xl font-normal text-center">My Latest Writing</div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}