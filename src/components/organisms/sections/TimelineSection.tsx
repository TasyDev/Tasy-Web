import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { BodyText } from '../../atoms/text/BodyText';
import { Timeline } from '../../molecules/timeline/Timeline';
import { HiArrowLongRight } from "react-icons/hi2";

export interface TimelineStep {
  number: string;
  title: string;
  description: React.ReactNode;
}

export interface TimelineSectionProps {
  overline?: string;
  title?: string;
  description?: string;
  steps?: TimelineStep[];
}

export const TimelineSection = ({
  overline = "MY JOURNEY",
  title = "Evolution & Experience",
  description = "A brief look at my professional path and how I got to where I am today.",
  steps = [
    { number: '01', title: 'Discovery', description: <>We define the core problems<br/>and uncover opportunities<br/>tailored to your audience.</> },
    { number: '02', title: 'Strategy', description: <>We define the core problems<br/>and uncover opportunities<br/>tailored to your audience.</> },
    { number: '03', title: 'Design', description: <>We define the core problems<br/>and uncover opportunities<br/>tailored to your audience.</> },
    { number: '04', title: 'Build', description: <>We define the core problems<br/>and uncover opportunities<br/>tailored to your audience.</> },
    { number: '05', title: 'Launch', description: <>We define the core problems<br/>and uncover opportunities<br/>tailored to your audience.</> }
  ]
}: TimelineSectionProps) => {
  return (
    <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-center gap-16">
      <div className="w-full max-w-[672px] flex flex-col justify-start items-center gap-4">
        {overline && (
          <span className="text-center text-amber-700 text-sm font-bold font-sans uppercase leading-5 tracking-wider">
            {overline}
          </span>
        )}
        <Subtitle text={title} level="h3" variant="h3" className="text-center" />
        <BodyText variant="standard" className="text-center">{description}</BodyText>
        
        {/* Mobile Swipe Indicator */}
        <div className="lg:hidden flex items-center gap-2 text-amber-700/60 text-sm font-medium animate-pulse mt-2">
          <span>Swipe to explore</span>
          <HiArrowLongRight className="text-lg" />
        </div>
      </div>
      
      <Timeline steps={steps} />
    </div>
  );
};
