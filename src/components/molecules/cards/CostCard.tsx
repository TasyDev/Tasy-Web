import React from 'react';
import { Heading } from '../../atoms/text/Heading';
import { BodyText } from '../../atoms/text/BodyText';

export interface CostCardProps {
  /** The icon to display */
  icon: React.ReactNode;
  /** The title of the cost factor */
  title: string;
  /** The description of the cost factor */
  description: React.ReactNode;
}

/**
 * A card component used to display a specific cost factor or issue.
 */
export const CostCard = ({ icon, title, description }: CostCardProps) => {
  return (
    <div className="w-full p-8 relative bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm">
      <div className="w-14 h-14 bg-neutral-100 rounded-full flex justify-center items-center">
        {icon}
      </div>
      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <Heading level={3} variant="card">{title}</Heading>
        <BodyText variant="small">{description}</BodyText>
      </div>
    </div>
  );
};
