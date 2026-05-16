import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { BodyText } from '../../atoms/text/BodyText';

export interface TimelineStep {
  number: string;
  title: string;
  description: React.ReactNode;
}

export interface TimelineProps {
  /** Array of steps for the timeline */
  steps: TimelineStep[];
}

export const Timeline = ({ steps }: TimelineProps) => {
  return (
    <div className="self-stretch relative flex justify-start lg:justify-between items-start w-full overflow-x-auto pb-8 lg:pb-0 gap-4 md:gap-8 lg:gap-0 snap-x px-6 lg:px-0 scrollbar-hide">
      {/* The connecting horizontal line */}
      {/* We use left-8 and right-8 to prevent the line from overflowing past the first and last circles */}
      <div className="hidden lg:block absolute h-0.5 bg-gray-200 left-8 right-[80%] top-[32px] -z-10 w-[calc(100%-80%)] sm:right-[15%] sm:w-[calc(100%-20%)] lg:right-8 lg:w-[calc(100%-64px)]" />
      
      {steps.map((step, index) => (
        <div key={index} className="flex-none w-[75vw] max-w-[280px] lg:w-auto lg:flex-1 h-auto min-h-[13rem] relative flex flex-col items-start snap-center shrink-0">
          <div className="w-16 h-16 bg-white rounded-full outline outline-4 outline-offset-[-4px] outline-amber-700 flex justify-center items-center z-10">
             <span className="text-amber-700 text-xl font-bold font-sans leading-7">
               {step.number}
             </span>
          </div>
          <div className="w-56 pt-4 mt-4">
            <Subtitle text={step.title} level="h4" variant="h4" />
          </div>
          <div className="w-56 mt-2">
            <BodyText variant="small">{step.description}</BodyText>
          </div>
        </div>
      ))}
    </div>
  );
};
