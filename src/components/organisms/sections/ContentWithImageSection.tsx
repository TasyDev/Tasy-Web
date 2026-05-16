import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { BodyText } from '../../atoms/text/BodyText';
import { Button } from '../../atoms/actions/Button';
import { ImageLayout } from '../../layouts/media/ImageLayout';

export interface ContentWithImageSectionProps {
  imageSrc?: string;
  subtitle?: React.ReactNode;
  paragraph1?: React.ReactNode;
  paragraph2?: React.ReactNode;
}

export const ContentWithImageSection = ({
  imageSrc = "https://placehold.co/512x640",
  subtitle = "The ContentWithImageSection",
  paragraph1 = <>We believe that design should not just look good, but perform<br/>exceptionally. With an emphasis on aesthetic precision and<br/>scalable architecture, we deliver solutions that define market<br/>leaders.</>,
  paragraph2 = <>Our process is rooted in understanding your core objectives<br/>and transforming them into a striking visual language that<br/>commands attention.</>
}: ContentWithImageSectionProps) => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
      <ImageLayout src={imageSrc} alt="The ContentWithImageSection" />
      <div className="w-full lg:w-[512px] flex flex-col justify-start items-start gap-6 shrink-0">
        <div className="self-stretch flex flex-col justify-start items-start">
          <Subtitle text={subtitle} />
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <BodyText variant="standard">{paragraph1}</BodyText>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <BodyText variant="standard">{paragraph2}</BodyText>
        </div>
        <div className="pt-4">
          <Button label="Start a Project" />
        </div>
      </div>
    </section>
  );
};
