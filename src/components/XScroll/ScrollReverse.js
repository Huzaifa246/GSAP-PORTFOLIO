import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollReverse = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    gsap.to(wrapper, {
      xPercent: -30,
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const text = "Some of my best works";

  return (
    <section className="w-full overflow-hidden">
      <div className="flex h-32 items-center bg-[#673ab7]">
        <div
          ref={wrapperRef}
          className="flex whitespace-nowrap gap-x-16 text-white text-3xl"
        >
          {[...Array(20)].map((_, i) => (
            <span key={i}>{text}</span>
          ))}

          {[...Array(20)].map((_, i) => (
            <span key={`dup-${i}`}>{text}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollReverse;