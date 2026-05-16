import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { BodyText } from '../../atoms/text/BodyText';
import { ProjectCard, type ProjectCardProps } from '../../molecules/cards/ProjectCard';

export interface PortfolioSectionProps {
  overline?: string;
  title?: string;
  description?: string;
  projects?: ProjectCardProps[];
}

export const PortfolioSection = ({
  overline = "PORTFOLIO",
  title = "Selected Work",
  description = "A showcase of my recent premium digital work, focusing on user experience, conversion, and visual impact.",
  projects = [
    { title: "Fintech Dashboard", description: "A modern, clean SaaS dashboard for financial management.", imageSrc: "https://placehold.co/800x600" },
    { title: "E-commerce Platform", description: "Minimalist fashion e-commerce website with seamless checkout.", imageSrc: "https://placehold.co/800x600" },
    { title: "Brand Identity", description: "Premium stationery mockup and brand identity presentation.", imageSrc: "https://placehold.co/800x600" },
    { title: "Healthcare App", description: "User-centric mobile application for remote health monitoring.", imageSrc: "https://placehold.co/800x600" },
    { title: "Editorial Blog", description: "High-contrast editorial layout for a modern design publication.", imageSrc: "https://placehold.co/800x600" },
    { title: "Marketing Site", description: "High-conversion landing page with bold 3D geometry.", imageSrc: "https://placehold.co/800x600" },
  ]
}: PortfolioSectionProps) => {
  return (
    <section className="w-full max-w-[1200px] px-4 md:px-8 py-12 md:py-32 mx-auto flex flex-col justify-start items-center gap-16">
      <div className="self-stretch flex flex-col justify-start items-center gap-4">
        {overline && (
          <span className="text-center text-amber-700 text-sm font-bold font-sans uppercase leading-5 tracking-wider">
            {overline}
          </span>
        )}
        <Subtitle text={title} level="h2" variant="h2" className="text-center" />
        <div className="max-w-[672px]">
          <BodyText variant="standard" className="text-center">
            {description}
          </BodyText>
        </div>
      </div>
      
      <div className="w-full flex flex-col items-center gap-6">
        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex items-center gap-2 text-amber-700/60 text-sm font-medium animate-pulse">
          <span>Swipe to view projects</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        <div className="w-full overflow-x-auto pb-8 -mb-8 scrollbar-hide">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-w-max md:min-w-full px-4 md:px-0">
            {projects.map((project, index) => (
              <div key={index} className="w-[300px] md:w-auto flex-shrink-0">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
