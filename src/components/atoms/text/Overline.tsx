import React from 'react';

export interface OverlineProps {
  /** 
   * The text to display in the overline
   * @default "DIGITAL INNOVATION"
   */
  text?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const Overline = ({ text = "DIGITAL INNOVATION", className = '' }: OverlineProps) => {
  return (
    <div className={`text-center justify-center text-amber-700 text-base font-bold font-sans uppercase leading-6 tracking-widest ${className}`}>
      {text}
    </div>
  );
};
