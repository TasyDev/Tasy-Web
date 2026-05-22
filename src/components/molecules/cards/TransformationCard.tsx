import React from 'react';
import { Heading } from '../../atoms/text/Heading';
import { BodyText } from '../../atoms/text/BodyText';

export interface TransformationCardProps {
  /** The variant style of the card */
  variant?: 'muted' | 'highlighted';
  /** The title of the card */
  title: string;
  /** List of features or statements */
  features: string[];
}

/**
 * A card used to display the "before" and "after" transformations.
 */
export const TransformationCard = ({ 
  variant = 'muted', 
  title, 
  features 
}: TransformationCardProps) => {
  const isHighlighted = variant === 'highlighted';

  return (
    <div className={`w-full p-10 relative rounded-3xl flex flex-col justify-start items-start gap-8 overflow-hidden ${
      isHighlighted 
        ? 'shadow-lg border border-amber-700/20' 
        : 'opacity-80 bg-neutral-100/50'
    }`}>
      {isHighlighted && (
        <>
          <div className="w-32 h-32 absolute -right-10 -top-10 bg-amber-700/10 rounded-full blur-[20px]" />
          <div className="w-full h-full left-0 top-0 absolute bg-amber-700/5" />
        </>
      )}
      
      <div className="flex justify-start items-center gap-4 relative z-10 w-full">
        <div className={`w-12 h-12 rounded-full flex justify-center items-center ${
          isHighlighted ? 'bg-amber-700' : 'bg-white'
        }`}>
           {isHighlighted ? (
             <div className="w-6 h-6 relative overflow-hidden flex justify-center items-center">
               <div className="w-5 h-5 absolute outline outline-2 outline-offset-[-1px] outline-white rounded-full" />
               <div className="w-3 h-2.5 absolute outline outline-2 outline-offset-[-1px] outline-white" />
             </div>
           ) : (
             <div className="w-6 h-6 relative overflow-hidden flex justify-center items-center">
               <div className="w-5 h-5 absolute outline outline-2 outline-offset-[-1px] outline-neutral-400 rounded-full" />
               <div className="w-1.5 h-1.5 absolute outline outline-2 outline-offset-[-1px] outline-neutral-400" />
             </div>
           )}
        </div>
        <Heading 
          level={3} 
          variant="section" 
          className={isHighlighted ? "text-neutral-900" : "text-neutral-400"}
        >
          {title}
        </Heading>
      </div>

      <div className="flex flex-col justify-start items-start gap-4 relative z-10 w-full">
        {features.map((feature, idx) => (
          <div key={idx} className="flex justify-start items-start gap-4">
            <div className="w-5 h-6 pt-1 flex flex-col justify-start items-start">
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <div className={`w-2.5 h-2.5 rounded-full outline outline-[1.67px] outline-offset-[-0.83px] ${
                  isHighlighted ? 'outline-amber-700' : 'outline-neutral-400'
                }`} />
              </div>
            </div>
            <BodyText 
              variant="standard" 
              className={isHighlighted ? "text-neutral-900 font-medium" : "text-neutral-400"}
            >
              {feature}
            </BodyText>
          </div>
        ))}
      </div>
    </div>
  );
};
