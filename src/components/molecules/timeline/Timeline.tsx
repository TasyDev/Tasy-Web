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
    <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
      <div className="relative flex justify-start items-start gap-8 md:gap-12 min-w-max px-8">
        
        {/* The connecting horizontal line */}
        {/* It stretches relative to the inner container width, so it spans all items */}
        <div className="absolute h-0.5 bg-amber-700/20 left-16 right-16 top-[32px] -z-10" />
        
        {steps.map((step, index) => (
          <div key={index} className="w-[280px] h-auto min-h-[13rem] relative flex flex-col items-start shrink-0">
            <div className="w-16 h-16 bg-white rounded-full outline outline-4 outline-offset-[-4px] outline-amber-700 flex justify-center items-center z-10 shadow-md">
               <span className="text-amber-700 text-xl font-bold font-sans leading-7">
                 {step.number}
               </span>
            </div>
            <div className="w-full pt-4 mt-4">
              <Subtitle text={step.title} level="h4" variant="h4" />
            </div>
            <div className="w-full mt-2">
              <BodyText variant="small">{step.description}</BodyText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
