import React, { useState, useEffect } from 'react';

export const NavBar = () => {
    const [isDarkMode, setDarkMode] = useState("light");

    useEffect(() => {
        if (isDarkMode === "dark") {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleThemeChange = () => {
        setDarkMode(prevMode => (prevMode === "dark" ? "light" : "dark"));
    };

    return (
        <div className={`bg-white dark:bg-darkmode text-black p-4`}>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/path/to/your-logo.png" alt="Logo" className="h-8 mr-2" />
                    <span className="text-xl font-semibold">Your Logo</span>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="hover:text-gray-300 dark:text-white">Home</a>
                    <a href="#" className="hover:text-gray-300">Skills</a>
                    <a href="#" className="hover:text-gray-300">Projects</a>
                    <a href="#" className="hover:text-gray-300">Contact Me</a>
                    <button className='bg-slate-700 rounded-2xl' onClick={handleThemeChange}>
                        {isDarkMode === "dark" ? "Light mode" : "Dark mode"}
                    </button>
                </div>
            </div>
        </div>
    );
}
