import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    gsap.fromTo(
      '.header',
      { opacity: 0, y: -50 },
      {
        opacity: 1, y: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 3,
      }
    );

    // Event listener for scrolling to track active section
    const handleScroll = () => {
      const sections = ['home', 'projects', 'contact'];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header flex justify-between items-center p-4 text-white py-4 px-6 fixed top-0 w-full z-50 shadow-xl bg-black">
      <div className="text-xl font-bold ml-4 text-white">
        HUZAIFA
      </div>

      <nav className="space-x-4">
        <button
          onClick={() => scrollToSection('home')}
          className={`hover:text-red-600 ${activeSection === 'home' ? 'text-red-600' : ''}`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className={`hover:text-red-600 ${activeSection === 'projects' ? 'text-red-600' : ''}`}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className={`hover:text-red-600 ${activeSection === 'contact' ? 'text-red-600' : ''}`}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
