import React from 'react';

export interface SubtitleProps {
  /** 
   * The text to display in the subtitle
   * @default "The Vision"
   */
  text?: React.ReactNode;
  /**
   * The heading level (h1, h2, h3, h4)
   * @default "h2"
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4';
  /**
   * The visual variant matching the level
   * @default "h2"
   */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h4-light';
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const Subtitle = ({ 
  text = "The Vision", 
  level = 'h2',
  variant = 'h2',
  className = '' 
}: SubtitleProps) => {
  const Tag = level;
  
  const variants = {
    'h1': "text-neutral-900 text-5xl md:text-6xl font-bold leading-tight md:leading-[72px] break-words",
    'h2': "text-neutral-900 text-4xl md:text-5xl font-bold leading-tight md:leading-[48px] break-words",
    'h3': "text-neutral-900 text-4xl md:text-5xl font-bold leading-tight md:leading-[48px] break-words",
    'h4': "text-neutral-900 text-xl md:text-2xl font-semibold leading-snug md:leading-8 break-words",
    'h4-light': "text-white text-xl md:text-2xl font-semibold leading-snug md:leading-8 break-words"
  };

  return (
    <Tag className={`justify-center font-sans ${variants[variant]} ${className}`}>
      {typeof text === 'string' && text.includes('<') ? (
        <span dangerouslySetInnerHTML={{ __html: text }} />
      ) : text}
    </Tag>
  );
};
