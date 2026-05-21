import React from 'react';

export interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
}

export const ProjectCard = ({ 
  title, 
  description, 
  imageSrc, 
  href = "#" 
}: ProjectCardProps) => {
  return (
    <a 
      href={href}
      className="group self-stretch h-96 p-8 relative bg-white rounded-3xl shadow-[0px_8px_30px_0px_rgba(0,0,0,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-center items-start overflow-hidden transition-all hover:shadow-xl"
    >
      <img 
        className="w-full h-full left-0 top-0 absolute object-cover transition-transform duration-500 group-hover:scale-110" 
        src={imageSrc} 
        alt={title}
      />
      {/* Overlay gradient - more subtle transition */}
      <div className="w-full h-full left-0 top-0 absolute bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent" />
      
      <div className="self-stretch flex-1 p-4 md:p-8 flex flex-col justify-end items-start gap-3 z-10">
        <div className="self-stretch flex flex-col justify-start items-start">
          <h3 className="self-stretch text-white text-3xl font-bold font-sans leading-9">
            {title}
          </h3>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="self-stretch text-gray-200 text-base font-normal font-sans leading-6">
            {description}
          </p>
        </div>
        <div className="mt-2 text-amber-500 font-semibold font-sans text-sm inline-flex items-center gap-1 group-hover:text-amber-400 transition-colors">
          <span>Leer</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
};
