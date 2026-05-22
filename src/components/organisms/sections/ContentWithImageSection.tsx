import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { BodyText } from '../../atoms/text/BodyText';
import { Button } from '../../atoms/actions/Button';
import { ImageLayout } from '../../layouts/media/ImageLayout';

export interface ButtonAction {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  iconName?: 'cv' | 'linkedin';
  onClick?: () => void;
}

export interface ContentWithImageSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  subtitle?: React.ReactNode;
  subtitleLevel?: 'h1' | 'h2' | 'h3' | 'h4';
  subtitleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h4-light';
  paragraph1?: React.ReactNode;
  paragraph2?: React.ReactNode;
  buttons?: ButtonAction[];
  reverse?: boolean;
  imageClassName?: string;
}

export const ContentWithImageSection = ({
  imageSrc = "https://placehold.co/512x640",
  imageAlt,
  subtitle = "The ContentWithImageSection",
  subtitleLevel = 'h2',
  subtitleVariant = 'h2',
  paragraph1 = <>We believe that design should not just look good, but perform<br />exceptionally. With an emphasis on aesthetic precision and<br />scalable architecture, we deliver solutions that define market<br />leaders.</>,
  paragraph2 = <>Our process is rooted in understanding your core objectives<br />and transforming them into a striking visual language that<br />commands attention.</>,
  buttons = [{ label: "Start a Project", variant: "primary" }],
  reverse = false,
  imageClassName = ""
}: ContentWithImageSectionProps) => {
  return (
    <section className={`w-full max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-center items-center gap-10 lg:gap-20`}>
      <div className="relative flex justify-center items-center">
        {imageClassName && <div className={imageClassName} />}
        <ImageLayout src={imageSrc} alt={imageAlt || (typeof subtitle === 'string' ? subtitle : "Image")} />
      </div>
      <div className="w-full lg:w-[512px] flex flex-col justify-start items-start gap-6 shrink-0">
        <div className="self-stretch flex flex-col justify-start items-start">
          <Subtitle text={subtitle} level={subtitleLevel} variant={subtitleVariant} />
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <BodyText variant="standard">{paragraph1}</BodyText>
        </div>
        {paragraph2 && (
          <div className="self-stretch flex flex-col justify-start items-start">
            <BodyText variant="standard">{paragraph2}</BodyText>
          </div>
        )}

        {buttons.map((btn, idx) => (
          <div key={idx} className="flex-shrink-0">

            <a
              href={btn.url}
              target={btn.target}
              rel={btn.rel}
            >
              <Button
                label={btn.label}
                variant={btn.variant}
                icon={btn.icon}
                iconName={btn.iconName}
                className="whitespace-nowrap px-5 md:px-7"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
