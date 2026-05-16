import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { BodyText } from '../../atoms/text/BodyText';
import { LogoStripLayout } from '../../layouts/containers/LogoStripLayout';

import { FaApple, FaAmazon, FaFigma, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';

export const LogoTickerSection = () => {
  const icons = [
    <FaApple key="apple" />,
    <FaAmazon key="amazon" />,
    <FaFigma key="figma" />,
    <FaReact key="react" />,
    <FaNodeJs key="nodejs" />,
    <FaGithub key="github" />
  ];

  return (
    <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-center gap-12 overflow-hidden">
      <div className="w-full flex flex-col justify-start items-center gap-4">
        <div className="self-stretch flex flex-col justify-start items-center">
          <Subtitle text="Trusted By Leaders" level="h3" variant="h3" className="text-center" />
        </div>
        <div className="self-stretch flex flex-col justify-start items-center">
          <BodyText variant="standard" className="text-center">Partnering with the world's most innovative teams.</BodyText>
        </div>
      </div>
      
      <LogoStripLayout icons={icons} />
    </div>
  );
};
