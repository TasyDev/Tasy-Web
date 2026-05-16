import React from 'react';

export interface QuoteProps {
  children: React.ReactNode;
  className?: string;
}

export const Quote = ({ children, className = '' }: QuoteProps) => {
  return (
    <div className={`pl-6 py-2 border-l-4 border-amber-700 flex flex-col justify-start items-start ${className}`}>
      <div className="justify-center text-neutral-900 text-2xl font-semibold font-sans leading-8 italic">
        {children}
      </div>
    </div>
  );
};
