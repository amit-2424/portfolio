import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaGoogle } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-gray-800 border-t border-gray-200 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Left: Branding */}
                <div>
                    <h2 className="text-2xl font-bold text-purple-700 mb-2 dark:text-white">Amit Mondol</h2>
                    <p className="text-sm text-gray-600 dark:text-white">
                        MERN Stack Developer | Passionate about building modern, performant web experiences.
                    </p>
                </div>

                {/* Center: Links */}
                <div className="flex flex-col gap-2 dark:text-white">
                    <h3 className="text-lg font-semibold mb-1">Quick Links</h3>
                    <a href="#work" className="text-gray-600 hover:text-purple-700 transition">Projects</a>
                    <a href="#about" className="text-gray-600 hover:text-purple-700 transition">About Me</a>
                    <a href="#services" className="text-gray-600 hover:text-purple-700 transition">Services</a>
                    <a href="#contact" className="text-gray-600 hover:text-purple-700 transition">Contact</a>
                </div>

                {/* Right: Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 dark:text-white">Connect with Me</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/amitmondol.oishik" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 text-xl">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.linkedin.com/in/amit-mondol/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 text-xl">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com/amit-2424" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 text-xl">
                            <FaGithub />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 text-xl">
                            <FaInstagram />
                        </a>
                        <a href="mailto:amitmondoloishik@gmail.com" className="text-purple-600 hover:text-purple-800 text-xl">
                            <FaGoogle />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="bg-gray-100 text-center text-sm py-4">
                &copy; {new Date().getFullYear()} Amit Mondol. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
