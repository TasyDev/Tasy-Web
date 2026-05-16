import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { BodyText } from '../../atoms/text/BodyText';
import { Timeline } from '../../molecules/timeline/Timeline';
import { HiArrowLongRight } from "react-icons/hi2";

export const TimelineSection = () => {
  const steps = [
    { number: '01', title: 'Discovery', description: <>We define the core problems<br/>and uncover opportunities<br/>tailored to your audience.</> },
    { number: '02', title: 'Strategy', description: <>We define the core problems<br/>and uncover opportunities<br/>tailored to your audience.</> },
    { number: '03', title: 'Design', description: <>We define the core problems<br/>and uncover opportunities<br/>tailored to your audience.</> },
    { number: '04', title: 'Build', description: <>We define the core problems<br/>and uncover opportunities<br/>tailored to your audience.</> },
    { number: '05', title: 'Launch', description: <>We define the core problems<br/>and uncover opportunities<br/>tailored to your audience.</> }
  ];

  return (
    <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-center gap-16">
      <div className="w-full max-w-[672px] flex flex-col justify-start items-center gap-4">
        <Subtitle text="Why Work With Us" level="h3" variant="h3" className="text-center" />
        <BodyText variant="standard" className="text-center">A streamlined approach to transforming your ideas into reality.</BodyText>
        
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
