import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { BodyText } from '../../atoms/text/BodyText';
import { LogoStripLayout } from '../../layouts/containers/LogoStripLayout';

import { FaApple, FaAmazon, FaFigma, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { 
  SiReact, 
  SiAstro, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiGit, 
  SiFigma, 
  SiGithub 
} from 'react-icons/si';

const iconMap: Record<string, React.ReactNode> = {
  react: <SiReact key="react" style={{ color: '#61DAFB' }} />,
  astro: <SiAstro key="astro" style={{ color: '#FF5D01' }} />,
  next: <SiNextdotjs key="next" style={{ color: '#000000' }} />,
  tailwind: <SiTailwindcss key="tailwind" style={{ color: '#06B6D4' }} />,
  typescript: <SiTypescript key="typescript" style={{ color: '#3178C6' }} />,
  node: <SiNodedotjs key="node" style={{ color: '#339933' }} />,
  python: <SiPython key="python" style={{ color: '#3776AB' }} />,
  git: <SiGit key="git" style={{ color: '#F05032' }} />,
  figma: <SiFigma key="figma" style={{ color: '#F24E1E' }} />,
  github: <SiGithub key="github" style={{ color: '#181717' }} />
};

export interface LogoTickerSectionProps {
  title?: string;
  description?: string;
  icons?: React.ReactNode[];
  iconNames?: string[];
}

export const LogoTickerSection = ({
  title = "Trusted By Leaders",
  description = "Partnering with the world's most innovative teams.",
  icons,
  iconNames
}: LogoTickerSectionProps) => {
  let resolvedIcons = icons;

  if (iconNames && iconNames.length > 0) {
    resolvedIcons = iconNames
      .map(name => iconMap[name])
      .filter(Boolean);
  }

  if (!resolvedIcons || resolvedIcons.length === 0) {
    resolvedIcons = [
      <FaApple key="apple" />,
      <FaAmazon key="amazon" />,
      <FaFigma key="figma" />,
      <FaReact key="react" />,
      <FaNodeJs key="nodejs" />,
      <FaGithub key="github" />
    ];
  }

  return (
    <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-center gap-12 overflow-hidden">
      <div className="w-full flex flex-col justify-start items-center gap-4">
        <div className="self-stretch flex flex-col justify-start items-center">
          <Subtitle text={title} level="h3" variant="h3" className="text-center" />
        </div>
        <div className="self-stretch flex flex-col justify-start items-center">
          <BodyText variant="standard" className="text-center">{description}</BodyText>
        </div>
      </div>
      
      <LogoStripLayout icons={resolvedIcons} />
    </div>
  );
};

export default LogoTickerSection;
