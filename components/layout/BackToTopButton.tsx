'use client'
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

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
                className="z-10 fixed bottom-5 right-5 p-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-all duration-300"
                aria-label="Back to top"
            >
                <FaArrowUp className="text-lg" />
            </button>
        )
    );
};

export default BackToTopButton;
