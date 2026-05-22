import React from 'react';

export interface LogoStripLayoutProps {
  /** Array of icon elements */
  icons: React.ReactNode[];
  /** Duration in seconds for one full loop (default: 25) */
  speed?: number;
  /** Whether to animate the strip as a marquee (default: true) */
  animated?: boolean;
}

export const LogoStripLayout = ({ icons, speed = 25, animated = true }: LogoStripLayoutProps) => {
  if (!animated) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem', width: '100%' }}>
        {icons.map((icon, index) => (
          <div key={index} style={{ fontSize: '3rem', color: '#171717', flexShrink: 0, opacity: 0.7 }}>
            {icon}
          </div>
        ))}
      </div>
    );
  }

  // Two copies are enough: animation goes from 0 to -50% (= exactly 1 copy), loops seamlessly
  const repeated = [...icons, ...icons];

  return (
    <div
      style={{ overflow: 'hidden', width: '100%' }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          width: 'max-content',
          alignItems: 'center',
          gap: '4rem',
          paddingRight: '4rem',
          ['--marquee-duration' as string]: `${speed}s`,
        }}
      >
        {repeated.map((icon, index) => (
          <div
            key={index}
            style={{ fontSize: '3rem', color: '#171717', flexShrink: 0, opacity: 0.5 }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoStripLayout;
