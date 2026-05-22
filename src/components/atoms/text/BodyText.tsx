import React from 'react';

export interface BodyTextProps {
  /** 
   * The body content
   * @default "We build highly professional..."
   */
  children?: React.ReactNode;
  /**
   * The visual variant
   * @default "hero"
   */
  variant?: 'hero' | 'standard' | 'small' | 'small-light';
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const BodyText = ({ 
  children = <>We build highly professional, elegant, and innovative<br/>interfaces for modern startups and forward-thinking brands.</>,
  variant = 'hero',
  className = ''
}: BodyTextProps) => {
  const baseStyle = "font-normal font-sans";
  
  const variants = {
    'hero': "text-center justify-center text-gray-300 text-2xl leading-10",
    'standard': "justify-center text-neutral-400 text-lg leading-7 text-left",
    'small': "justify-center text-neutral-400 text-base leading-6 text-left",
    'small-light': "justify-center text-white/80 text-base leading-6 text-left"
  };

  return (
    <div className={`${baseStyle} ${variants[variant]} ${className}`}>
      {typeof children === 'string' && children.includes('<') ? (
        <span dangerouslySetInnerHTML={{ __html: children }} />
      ) : children}
    </div>
  );
};
