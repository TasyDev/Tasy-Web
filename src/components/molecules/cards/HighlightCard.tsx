import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { BodyText } from '../../atoms/text/BodyText';
import { Button } from '../../atoms/actions/Button';

export interface HighlightCardProps {
  title?: string;
  description?: React.ReactNode;
  buttonLabel?: string;
}

export const HighlightCard = ({
  title = "Product Design",
  description = <>End-to-end product design solutions<br/>focusing on user experience, conversion,<br/>and brand consistency.</>,
  buttonLabel = "Learn More"
}: HighlightCardProps) => {
  return (
    <div className="self-stretch p-8 bg-amber-700 rounded-3xl shadow-[0px_8px_30px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-4">
      <div className="self-stretch flex flex-col justify-start items-start">
        <Subtitle text={title} level="h4" variant="h4-light" />
      </div>
      <div className="self-stretch pb-4 flex flex-col justify-start items-start">
        <BodyText variant="small-light">{description}</BodyText>
      </div>
      <Button variant="secondary" label={buttonLabel} />
    </div>
  );
};
