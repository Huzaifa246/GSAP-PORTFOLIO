import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const HelloSection = () => {
    useEffect(() => {
        // GSAP animation for the "Come to Say Hello" text
        gsap.fromTo(
            '.hello-text',
            { opacity: 0, y: 50 }, // Start state
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.out',
                stagger: 0.5,
                scrollTrigger: {
                    trigger: '.hello-text',
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            }
        );
    }, []);
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center bg-white px-4">
            <h1 className="hello-text text-5xl md:text-7xl font-bold text-black text-center mb-8">
                COME TO SAY HELLO:
            </h1>

            <div className="flex flex-wrap justify-center gap-4">
                <a href="huzaifa24680@gmail.com" className="water-button">
                    <span>Email</span>
                </a>
                <a href="https://www.instagram.com/huzaifa_rehman22/" target="_blank" rel="noopener noreferrer" className="water-button">
                    <span>Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/huzaifa-rehman-9a0b1a198/" target="_blank" rel="noopener noreferrer" className="water-button">
                    <span>Linkedin</span>
                </a>
                <a href="/Huzaifa.pdf" download className="water-button">
                    <span>CV</span>
                </a>
            </div>
        </section>
    );
};

export default HelloSection;
