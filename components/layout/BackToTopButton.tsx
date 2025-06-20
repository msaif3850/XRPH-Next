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
                className="z-10 hover:scale-110 fixed bottom-4 left-7 sm:left-9 -translate-x-1/2 border border-gray-100 dark:border-gray-500 p-2 rounded-full
                bg-white/70 dark:bg-gray-800/70 shadow-lg hover:text-purple-600 transition-all duration-100"
                aria-label="Back to top"
            >
                <FaAngleUp className="text-xl sm:text-[2rem]" />
            </button>
        )
    );
};

export default BackToTopButton;
