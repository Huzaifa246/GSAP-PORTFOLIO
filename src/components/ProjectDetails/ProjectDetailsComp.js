import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AFO from "../../images/AFOSlider.JPG";
import EzraSignUp from "../../images/EzraSignUp.png";
import ERP from "../../images/Patient-Reg.jpg";
import laptops from "../../images/enclair_products.JPG";
import nextjs from "../../images/next-js-portfolio.png";
import Anime from "../../images/Anime.png";
import Dfw from "../../images/DFW.png";
import edge21 from "../../images/Edgelogin.JPG";
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetailsComp = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const handleMouseEnter = (text) => {
    setIsHovering(true);
    setCursorText(text);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCursorText('');
  };

  return (
    <div className="demo-wrapper relative">
      <div
        className={`custom-cursor fixed w-6 h-6 rounded-full z-50 pointer-events-none transform ${isHovering ? 'bg-yellow-500 scale-[2.5] transition-all' : 'bg-white scale-100'}`}
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
          transition: 'background-color 0.3s, transform 0.3s',
        }}
      >
        {cursorText && (
          <span className="text-xs text-black" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            {cursorText}
          </span>
        )}
      </div>

      <section className="demo-gallery py-10 px-5">
        <ul className="wrapper grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            href="https://afomedia.com/"
            imageSrc={AFO}
            altText="AFO MEDIA Web App"
            title="AFO MEDIA"
            description="A premium Full-Stack Web App responsive design offering a seamless user experience for watching videos and podcasts."
            onMouseEnter={() => handleMouseEnter('View')}
            onMouseLeave={handleMouseLeave}
          />
          <ProjectCard
            href="https://book.dfwluxauto.com/"
            imageSrc={Dfw}
            altText="Project 2"
            title="DFW Lux Auto"
            description="A luxury car rental platform offering a seamless booking experience with reliable service, secure rentals, and personalized support for an elevated driving experience."
            onMouseEnter={() => handleMouseEnter('View')}
            onMouseLeave={handleMouseLeave}
          />
          <ProjectCard
            href="https://ezra-home.kbadosh.com/"
            imageSrc={EzraSignUp}
            altText="Project 3"
            title="Ezra Management System"
            description="A premium Web App responsive design offering a seamless user experience for buyer and seller of property."
            onMouseEnter={() => handleMouseEnter('View')}
            onMouseLeave={handleMouseLeave}
          />
          <ProjectCard
            href="https://enclair.tech/"
            imageSrc={laptops}
            altText="Project 4"
            title="Laptop Web App"
            description="A modern laptop marketplace web application built with Next.js that allows users to explore, filter, and compare premium laptops with a clean UI and fast performance."
            onMouseEnter={() => handleMouseEnter('View')}
            onMouseLeave={handleMouseLeave}
          />
          <ProjectCard
            href="https://work-screen-shots.vercel.app/"
            imageSrc={ERP}
            altText="ERP Management System"
            title="ERP Management System"
            description="Healthcare management system for patients and user experience."
            onMouseEnter={() => handleMouseEnter('View')}
            onMouseLeave={handleMouseLeave}
          />
          <ProjectCard
            href="https://edge21.co/"
            imageSrc={edge21}
            altText="Trending Bitcoin News & Insights"
            title="Trending Bitcoin News & Insights"
            description="Trending Bitcoin News Feed & Insights system for better user experience and updated news."
            onMouseEnter={() => handleMouseEnter('View')}
            onMouseLeave={handleMouseLeave}
          />
          <ProjectCard
            href="https://next-js-portfolio-henna.vercel.app/"
            imageSrc={nextjs}
            altText="Portfolio Using FramerMotion"
            title="Portfolio - NEXT JS"
            description="Portfolio Built with Next.js featuring smooth animations using Framer Motion, responsive design for an engaging user experience."
            onMouseEnter={() => handleMouseEnter('View')}
            onMouseLeave={handleMouseLeave}
          />
          <ProjectCard
            href="https://next-js-sside.vercel.app/"
            imageSrc={Anime}
            altText="Next.js Animated Portfolio"
            title="Animated Portfolio - Next.js"
            description="Built with Next.js featuring smooth animations using Framer Motion, responsive design, and interactive UI components for an engaging user experience."
            onMouseEnter={() => handleMouseEnter('View')}
            onMouseLeave={handleMouseLeave}
          />
        </ul>
      </section>
    </div>
  );
};

export default ProjectDetailsComp;
