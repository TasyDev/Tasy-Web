import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiAstro, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript,
  SiNodedotjs, SiExpress, SiPostgresql, SiPython, SiSqlite, SiFastapi,
  SiGit, SiFigma, SiDocker, SiVisualstudiocode, SiPostman, SiGithub
} from 'react-icons/si';

const row1 = [
  { icon: SiReact, color: '#61DAFB' },
  { icon: SiAstro, color: '#FF5D01' },
  { icon: SiNextdotjs, color: '#000000' },
  { icon: SiTailwindcss, color: '#06B6D4' },
  { icon: SiTypescript, color: '#3178C6' },
  { icon: SiJavascript, color: '#F7DF1E' },
];

const row2 = [
  { icon: SiNodedotjs, color: '#339933' },
  { icon: SiExpress, color: '#000000' },
  { icon: SiPostgresql, color: '#4169E1' },
  { icon: SiPython, color: '#3776AB' },
  { icon: SiSqlite, color: '#003B57' },
  { icon: SiFastapi, color: '#009688' },
];

const row3 = [
  { icon: SiGit, color: '#F05032' },
  { icon: SiFigma, color: '#F24E1E' },
  { icon: SiDocker, color: '#2496ED' },
  { icon: SiVisualstudiocode, color: '#007ACC' },
  { icon: SiPostman, color: '#FF6C37' },
  { icon: SiGithub, color: '#181717' },
];

interface MarqueeRowProps {
  items: Array<{ icon: any; color: string }>;
  direction?: 'left' | 'right';
  speed?: number;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction = 'left', speed = 25 }) => {
  // To ensure seamless loop, we repeat the items multiple times to fill the width
  const repeatedItems = [...items, ...items, ...items, ...items];
  const xValue = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className="w-full overflow-hidden flex whitespace-nowrap py-2">
      <motion.div 
        className="flex gap-6 pr-6"
        animate={{ x: xValue }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed
        }}
      >
        {repeatedItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-white rounded-2xl border border-neutral-100 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:scale-105 transition-all duration-300 transform skew-y-3 cursor-pointer shrink-0"
            >
              <Icon className="w-12 h-12 md:w-14 md:h-14 transition-colors duration-300" style={{ color: item.color }} />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export const TechCarouselSection: React.FC = () => {
  return (
    <div className="w-full relative flex flex-col justify-center items-center py-20 bg-white overflow-hidden">
      
      {/* Title */}
      <div className="w-full max-w-[1200px] px-8 mb-16 text-center">
        <span className="text-amber-700 text-sm font-bold font-sans uppercase tracking-wider">TECNOLOGÍAS</span>
        <h2 className="text-neutral-900 text-3xl md:text-5xl font-bold font-sans mt-2">
          Mi Stack Tecnológico
        </h2>
        <p className="text-neutral-500 text-lg font-sans mt-4 max-w-[600px] mx-auto">
          Herramientas y lenguajes que utilizo para dar vida a soluciones robustas y escalables.
        </p>
      </div>

      {/* Skewed Container (Inclinación caída a la izquierda: -skew-y-3) */}
      <div className="w-full flex flex-col gap-4 transform -skew-y-3 scale-105 my-8">
        <MarqueeRow items={row1} direction="left" speed={28} />
        <MarqueeRow items={row2} direction="right" speed={24} />
        <MarqueeRow items={row3} direction="left" speed={30} />
      </div>
      
    </div>
  );
};
