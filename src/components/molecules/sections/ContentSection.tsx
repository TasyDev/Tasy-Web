import React from 'react';
import { Heading } from '../../atoms/text/Heading';
import { Quote } from '../../atoms/text/Quote';

export interface ContentSectionProps {
  children: React.ReactNode;
  image?: {
    src: string;
    alt: string;
  };
}

export const ContentSection = ({ children, image }: ContentSectionProps) => {
  return (
    <div className="w-full max-w-[800px] p-8 mx-auto flex flex-col justify-start items-start gap-8">
      {children}
      {image && (
        <div className="w-full py-8 flex flex-col justify-start items-center">
          <img className="w-full h-auto max-h-[500px] relative rounded-[32px] object-cover shadow-lg" src={image.src} alt={image.alt} />
        </div>
      )}
    </div>
  );
};
