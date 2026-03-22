import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollSection = () => {
    const wrapperRef = useRef(null);

    const text = "Some of my best works";
    const repeatedText = Array(10).fill(text);

    useEffect(() => {
        const wrapper = wrapperRef.current;

        const animation = gsap.fromTo(
            wrapper,
            { xPercent: -30 },
            {
                xPercent: 0,
                duration: 10,
                ease: "linear",
                repeat: -1,
            }
        );

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <section className="w-full overflow-hidden">
            <div className="flex h-32 items-center bg-[#673ab7]">
                <div
                    ref={wrapperRef}
                    className="flex whitespace-nowrap"
                >
                    {repeatedText.map((item, index) => (
                        <h1
                            key={`first-${index}`}
                            className="text-3xl sm:text-md px-6 text-white"
                        >
                            {item}
                        </h1>
                    ))}

                    {repeatedText.map((item, index) => (
                        <h1
                            key={`second-${index}`}
                            className="text-3xl sm:text-md px-6 text-white"
                        >
                            {item}
                        </h1>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScrollSection;