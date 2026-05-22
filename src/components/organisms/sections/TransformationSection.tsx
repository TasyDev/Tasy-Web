import React from 'react';
import { Heading } from '../../atoms/text/Heading';
import { BodyText } from '../../atoms/text/BodyText';
import { TransformationCard } from '../../molecules/cards/TransformationCard';

export interface TransformationSectionProps {
  title?: string;
  description?: React.ReactNode;
}

/**
 * Organism representing the "Transformation" section comparing the old and new way.
 */
export const TransformationSection = ({
  title = "The Transformation",
  description = <>See the difference between traditional, friction-heavy flows and modern,<br/>frictionless experiences.</>
}: TransformationSectionProps) => {
  return (
    <div className="w-full max-w-[1200px] px-8 py-32 flex flex-col justify-start items-center gap-16 mx-auto">
      <div className="flex flex-col justify-start items-center gap-4 w-full">
        <Heading level={2} variant="display" className="!text-5xl text-center text-neutral-900">{title}</Heading>
        <div className="max-w-[672px] px-2 flex flex-col justify-start items-center w-full">
          <BodyText variant="standard" className="text-center">{description}</BodyText>
        </div>
      </div>
      
      <div className="w-full flex flex-col md:flex-row justify-start items-stretch gap-8">
        <div className="flex-1">
          <TransformationCard 
            variant="muted"
            title="The Old Way"
            features={[
              '7+ steps just to sign up',
              'No clear indication of progress',
              'Overwhelming forms and data requests',
              'High friction, low conversion'
            ]}
          />
        </div>
        <div className="flex-1">
          <TransformationCard 
            variant="highlighted"
            title="The New Way"
            features={[
              '1-click social authentication',
              'Progressive profiling over time',
              'Immediate access to core features',
              'Frictionless, high-converting flows'
            ]}
          />
        </div>
      </div>
    </div>
  );
};
