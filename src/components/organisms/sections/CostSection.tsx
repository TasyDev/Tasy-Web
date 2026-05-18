import React from 'react';
import { Heading } from '../../atoms/text/Heading';
import { BodyText } from '../../atoms/text/BodyText';
import { CostCard } from '../../molecules/cards/CostCard';

export interface CostSectionProps {
  title?: string;
  description?: React.ReactNode;
}

/**
 * Organism representing the "Cost of Bad Design" section.
 */
export const CostSection = ({
  title = "The Cost of Bad Design",
  description = <>Every extra click, confusing layout, or overwhelming form is actively costing you<br/>revenue.</>
}: CostSectionProps) => {
  return (
    <div className="w-full max-w-[1200px] px-8 py-24 flex flex-col justify-start items-center gap-16 mx-auto">
      <div className="flex flex-col justify-start items-center gap-4 w-full">
        <Heading level={2} variant="display" className="!text-5xl text-center text-neutral-900">{title}</Heading>
        <div className="max-w-[672px] px-2 flex flex-col justify-start items-center w-full">
          <BodyText variant="standard" className="text-center">{description}</BodyText>
        </div>
      </div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <CostCard 
          icon={
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-1.5 h-1.5 left-[16px] top-[11px] absolute outline outline-2 outline-offset-[-1px] outline-neutral-900" />
              <div className="w-5 h-2.5 left-[2px] top-[7px] absolute outline outline-2 outline-offset-[-1px] outline-neutral-900" />
            </div>
          }
          title="High Drop-off Rates"
          description={<>Users abandon your platform before<br/>experiencing its core value due to<br/>complex flows.</>}
        />
        <CostCard 
          icon={
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-neutral-900 rounded-full" />
              <div className="w-1 h-2 left-[12px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-neutral-900" />
            </div>
          }
          title="Slow Time-to-Value"
          description={<>Lengthy onboarding processes delay<br/>the "Aha!" moment, reducing long-term<br/>retention.</>}
        />
        <CostCard 
          icon={
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-neutral-900 rounded-full" />
              <div className="w-2 h-1.5 left-[8px] top-[9px] absolute outline outline-2 outline-offset-[-1px] outline-neutral-900" />
            </div>
          }
          title="User Frustration"
          description={<>Confusing navigation and lack of<br/>context lead to immediate uninstalls<br/>and bad reviews.</>}
        />
      </div>
    </div>
  );
};
