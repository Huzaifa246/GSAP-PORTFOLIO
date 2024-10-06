import React from 'react';
const FooterSection = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <footer className="w-full flex justify-between items-center p-4 text-black mt-auto">
            <div className="text-xl font-bold ml-4 text-white">
                HUZAIFA
            </div>

            <div className="text-gray-600 tracking-wider">
                Developed by
                <span className='text-white'>  Huzaifa Rehman</span>
            </div>

            <button onClick={scrollToTop} className="mr-4 rounded-full bg-gray-100 p-2 hover:scale-125">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </footer>
    );
};

export default FooterSection;
