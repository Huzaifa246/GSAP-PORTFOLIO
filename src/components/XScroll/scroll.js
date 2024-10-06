import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'slow', duration: 2 });

const ScrollSection = () => {
    useEffect(() => {
        let sections = gsap.utils.toArray(".horizontal-section");
        let totalWidth = 100 * (sections.length - 1);

        gsap.to(sections, {
            xPercent: -totalWidth, // Move the entire row horizontally
            ease: 'slow',
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: true,
                start: "top top",
                end: "+=50",
                smooth: 1,
                effects: true,
                smoothTouch: 1,
            },
        });
    }, []);

    return (
        <section className='container w-full h-screen overflow-hidden'>
            <h1 className='text-center text-4xl'>
                Scroll through the sections to see the horizontal scrolling effect
            </h1>
            <div className="flex flex-row w-[400vw] h-full">
                <div className="horizontal-section Design1 w-full h-screen flex items-center justify-center bg-red-500">
                    <h1 className="text-5xl text-white">Product Design</h1>
                </div>
                <div className="horizontal-section Design2 w-full h-screen flex items-center justify-center bg-blue-500">
                    <h1 className="text-5xl text-white">UX/UI Design</h1>
                </div>
                <div className="horizontal-section Design3 w-full h-screen flex items-center justify-center bg-green-500">
                    <h1 className="text-5xl text-white">Web Development</h1>
                </div>
                <div className="horizontal-section Design4 w-full h-screen flex items-center justify-center bg-yellow-500">
                    <h1 className="text-5xl text-white">Creative Strategy</h1>
                </div>
            </div>
        </section>
    );
};

export default ScrollSection;
