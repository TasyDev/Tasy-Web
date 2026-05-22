import React from 'react';

/**
 * @params badge - Small text badge above title
 * @params titleNormal - Normal part of the title
 * @params titleHighlight - Highlighted part of the title
 * @params description - Description text under title
 */
interface PageHeroProps {
  badge: string;
  titleNormal: string;
  titleHighlight: string;
  description: string;
}

export function PageHero({ badge, titleNormal, titleHighlight, description }: PageHeroProps) {
  return (
    <div className="w-full px-8 py-32 relative flex flex-col justify-center items-center overflow-hidden">
      <div className="w-[500px] h-[500px] right-[-100px] top-[-250px] absolute bg-amber-700/5 rounded-full blur-3xl pointer-events-none" />
      <div className="w-96 h-96 left-[-200px] top-[100px] absolute bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="w-full h-full left-0 top-0 absolute bg-neutral-100/30 border-b border-gray-200 pointer-events-none" />
      <div className="max-w-[768px] z-10 flex flex-col justify-start items-center gap-4 text-center">
        <div className="px-4 py-1.5 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-amber-700/20 flex flex-col justify-start items-center">
          <div className="text-center justify-center text-amber-700 text-sm font-bold font-sans uppercase leading-5 tracking-wider">
            {badge}
          </div>
        </div>
        <h1 className="text-center justify-center text-neutral-900 text-6xl md:text-7xl font-bold font-sans leading-tight">
          <span className="text-neutral-900">{titleNormal} </span>
          <span className="text-amber-700">{titleHighlight}</span>
        </h1>
        <div className="max-w-[672px] pt-4 flex flex-col justify-center items-center">
          <div className="text-center text-neutral-500 text-lg md:text-xl font-normal font-sans leading-8">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
