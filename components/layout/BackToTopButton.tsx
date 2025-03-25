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
                className="z-10 hover:scale-110 fixed bottom-5 left-[50%] -translate-x-1/2 sm:left-auto sm:right-3 border border-gray-100 dark:border-gray-500 p-2 rounded-full
                bg-white dark:bg-gray-800 shadow-lg hover:text-purple-600 transition-all duration-100"
                aria-label="Back to top"
            >
                <FaAngleUp className="text-xl"/>
            </button>
        )
    );
};

export default BackToTopButton;
