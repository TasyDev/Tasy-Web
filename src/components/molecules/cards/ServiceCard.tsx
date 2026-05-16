import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { BodyText } from '../../atoms/text/BodyText';

export interface ServiceCardProps {
  icon?: React.ReactNode;
  title?: string;
  description?: React.ReactNode;
}

export const ServiceCard = ({
  icon,
  title = "UI/UX Design",
  description = <>Comprehensive strategies tailored to<br/>elevate your product's market presence<br/>and engagement metrics.</>
}: ServiceCardProps) => {
  return (
    <div className="self-stretch p-8 bg-white rounded-3xl shadow-[0px_8px_30px_0px_rgba(0,0,0,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-4 w-full">
      <div className="w-12 h-12 bg-neutral-100 rounded-full inline-flex justify-center items-center text-amber-700 text-xl">
        {icon}
      </div>
      <div className="self-stretch flex flex-col justify-start items-start">
        <Subtitle text={title} level="h4" variant="h4" />
      </div>
      <div className="self-stretch flex flex-col justify-start items-start">
        <BodyText variant="small">{description}</BodyText>
      </div>
    </div>
  );
};
