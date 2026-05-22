import React from 'react';
import { Heading } from '../../atoms/text/Heading';

export interface ProjectHeroProps {
  category: string;
  title: string;
  subtitle: string;
}

export const ProjectHero = ({ 
  category, 
  title,
  subtitle
}: ProjectHeroProps) => {
  return (
    <div className="w-full px-8 pt-32 pb-16 flex flex-col justify-center items-center">
      <div className="max-w-[896px] flex flex-col justify-start items-center gap-4">
        <div className="pb-4 flex flex-col justify-start items-start">
          <div className="inline-flex flex-col justify-start items-center">
            <div className="text-center justify-center text-amber-700 text-sm font-bold font-sans uppercase leading-5 tracking-wider">
              {category}
            </div>
          </div>
        </div>
        
        <div className="px-4 md:px-24 flex flex-col justify-start items-center">
          <Heading level={1} variant="display" className="text-center">
            {title}
          </Heading>
        </div>

        <div className="max-w-[672px] pt-4 flex flex-col justify-start items-start">
          <div className="px-8 flex flex-col justify-start items-center">
            <div className="text-center justify-center text-neutral-400 text-xl font-normal font-sans leading-8">
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
