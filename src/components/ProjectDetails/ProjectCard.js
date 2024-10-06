import React from 'react';

const ProjectCard = ({ href, imageSrc, altText, title, description, onMouseEnter, onMouseLeave }) => {
  return (
    <li className="project-card relative">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img
          className="w-full h-60 object-cover"
          src={imageSrc}
          alt={altText}
        />
        <div className="project-details p-4 bg-white text-black relative">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-lg">{description}</p>
          <span className="absolute top-4 right-4 text-white bg-black px-2 py-1 rounded hidden group-hover:block">View</span>
        </div>
      </a>
    </li>
  );
};

export default ProjectCard;
