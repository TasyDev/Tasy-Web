import React from 'react';
import { Overline } from '../../atoms/text/Overline';
import { HeroTitle } from '../../atoms/text/HeroTitle';
import { BodyText } from '../../atoms/text/BodyText';
import { Button } from '../../atoms/actions/Button';

export interface HeroProps {
  /** Text for the overline */
  overlineText?: string;
  /** First part of the title */
  titlePrefix?: React.ReactNode;
  /** Highlighted part of the title */
  titleHighlight?: React.ReactNode;
  /** Body text content */
  bodyContent?: React.ReactNode;
  /** Text for the primary button */
  buttonLabel?: string;
}

export const Hero = ({
  overlineText,
  titlePrefix,
  titleHighlight,
  bodyContent,
  buttonLabel
}: HeroProps) => {
  return (
    <div className="max-w-[896px] inline-flex flex-col justify-start items-center gap-2 w-full">
      <Overline text={overlineText} />
      
      <div className="flex flex-col justify-start items-center w-full">
        <HeroTitle prefix={titlePrefix} highlight={titleHighlight} />
      </div>
      
      <div className="max-w-[672px] pt-2 flex flex-col justify-start items-center w-full">
        <div className="max-w-[672px] px-2 flex flex-col justify-start items-center w-full">
          <BodyText>{bodyContent}</BodyText>
        </div>
      </div>
      
      <div className="pt-4 flex flex-col justify-start items-center w-full">
        <Button label={buttonLabel} />
      </div>
    </div>
  );
};
