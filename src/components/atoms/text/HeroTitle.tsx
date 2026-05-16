import React from 'react';

export interface HeroTitleProps {
  /** 
   * The first part of the title (usually white text)
   * @default "Crafting Premium\n"
   */
  prefix?: React.ReactNode;
  /** 
   * The highlighted part of the title (amber color)
   * @default "Digital Experiences"
   */
  highlight?: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const HeroTitle = ({ 
  prefix = <>Crafting Premium<br/></>, 
  highlight = "Digital Experiences",
  className = ''
}: HeroTitleProps) => {
  return (
    <h1 className={`text-center justify-center ${className}`}>
      <span className="text-white text-5xl md:text-7xl font-bold font-sans leading-tight md:leading-[90px]">
        {prefix}
      </span>
      <span className="text-amber-700 text-5xl md:text-7xl font-bold font-sans leading-tight md:leading-[90px]">
        {highlight}
      </span>
    </h1>
  );
};
