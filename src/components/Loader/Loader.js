import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    let progress = { value: 0 };
    
    // Animate the loading progress
    gsap.to(progress, {
      value: 100, // Progress to 100%
      duration: 3,
      ease: 'power3.out',
      onUpdate: () => {
        document.querySelector('.loader h1').innerText = `Loading... ${Math.round(progress.value)}%`;
        document.querySelector('.loading-bar').style.width = `${progress.value}%`;
      },
      onComplete: () => {
        // hide the loader with a smooth animation
        gsap.to('.loader', {
          y: '-100%',
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          onComplete: () => setLoadingComplete(true),
        });
      },
    });
  }, []);

  if (loadingComplete) {
    return null;
  }

  return (
    <div className="loader fixed top-0 left-0 right-0 bottom-0 bg-black flex flex-col justify-center items-center z-50">
      <h1 className="text-white text-4xl mb-4">Loading... 0%</h1>
      <div className="w-3/4 h-2 bg-white rounded-full overflow-hidden">
        <div className="loading-bar h-full bg-[#1e3a8a]"></div>
      </div>
    </div>
  );
};

export default Loader;
