'use client'
import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // Show button when scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="z-10 hover:scale-110 fixed bottom-5 left-[50%] border border-gray-100 p-3 rounded-full text-gray-400 bg-white shadow-lg hover:text-purple-600 transition-all duration-100"
                aria-label="Back to top"
            >
                <FaAngleUp className="text-xl" />
            </button>
        )
    );
};

export default BackToTopButton;
