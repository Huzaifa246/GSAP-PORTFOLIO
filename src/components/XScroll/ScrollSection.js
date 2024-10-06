import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const ScrollSection = () => {
    useEffect(() => {
        const textElements = gsap.utils.toArray(".scrolling-text");

        // Create a scrolling animation that wraps around for seamless continuous scroll
        gsap.to(textElements, {
            xPercent: 100,
            ease: 'none',
            duration: 8,
            repeat: -1,
            modifiers: {
                xPercent: gsap.utils.wrap(100, 0)
            }
        });
    }, []);

    return (
        <section className="w-full overflow-hidden">
            <div className="flex h-32 items-center justify-center bg-[#673ab7]">
                <div className="flex space-x-4"> {/* Add a wrapper to make it continuous */}
                    <h1 className="scrolling-text text-3xl sm:text-md px-4 text-white">• Some of my best works •</h1>
                    <h1 className="scrolling-text text-3xl sm:text-md px-4 text-white">• Some of my best works •</h1>
                    <h1 className="scrolling-text text-3xl sm:text-md px-4 text-white">• Some of my best works •</h1>
                    <h1 className="scrolling-text text-3xl sm:text-md px-4 text-white">• Some of my best works •</h1>
                </div>
            </div>
        </section>
    );
};

export default ScrollSection;
