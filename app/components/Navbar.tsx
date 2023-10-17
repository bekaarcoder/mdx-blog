import Link from 'next/link';
import React from 'react';
import { FaSpotify, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row items-center">
                <h1 className="text-3xl grid place-content-center md:mb-0 sm:mb-1">
                    <Link
                        href="/"
                        className="text-white no-underline hover:text-white/80"
                    >
                        MDX Blog
                    </Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white lg:text-2xl">
                    <Link
                        href="https://www.youtube.com"
                        className="text-white hover:text-white/80"
                    >
                        <FaSpotify />
                    </Link>
                    <Link
                        href="https://www.youtube.com"
                        className="text-white hover:text-white/80"
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        href="https://www.youtube.com"
                        className="text-white hover:text-white/80"
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        href="https://www.youtube.com"
                        className="text-white hover:text-white/80"
                    >
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
