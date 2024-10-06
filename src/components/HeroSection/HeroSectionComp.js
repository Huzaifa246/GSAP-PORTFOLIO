import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import profileImg from "../../images/H1.jpg"
const HeroSectionComp = () => {
    useEffect(() => {
        gsap.fromTo('.hero-content',
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1.5,
                ease: 'power3.out',
                delay: 2.5,
                stagger: 0.3,
            }
        );
        gsap.fromTo(
            ['.hero-content h1', '.hero-content p'],
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: 'power3.out',
                delay: 2.5,
                stagger: 0.3,
            }
        );
        gsap.fromTo('.hero-image',
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1.5, ease: 'power3.out', delay: 3 }
        );
    }, []);

    return (
        <section className="hero text-white flex justify-center items-center pl-10 mob-style-hero">
            <div className="hero-content w-1/2">
                <h1 className="text-5xl font-bold tracking-[.25em]">Huzaifa Rehman</h1>
                <p className="mt-4 text-xl tracking-[.15em]">Software Developer - Full Stack</p>
                <p className="mt-2 text-lg tracking-[.15em]">
                    <span class="inline-flex items-center justify-center w-3 h-3 me-2 text-sm bg-green-500 rounded-full"></span>
                    Available for a full-time position
                    <span> ! ! !</span>
                </p>
            </div>
            <div className="hero-image w-1/2">
                <img
                    src={profileImg}
                    alt="Huzaifa Rehman"
                    className="w-full hero-img-style"
                />
            </div>
        </section>
    );
};

export default HeroSectionComp;
