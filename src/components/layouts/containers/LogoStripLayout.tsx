import React from 'react';

export interface LogoStripLayoutProps {
  /** Array of icon elements */
  icons: React.ReactNode[];
}

export const LogoStripLayout = ({ icons }: LogoStripLayoutProps) => {
  return (
    <div className="self-stretch opacity-50 bg-blend-saturation flex justify-center md:justify-between flex-wrap gap-8 items-center overflow-hidden">
      {icons.map((icon, index) => (
        <div key={index} className="text-5xl text-neutral-900">
          {icon}
        </div>
      ))}
    </div>
  );
};
