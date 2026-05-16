import React from 'react';
import { Heading } from '../../atoms/text/Heading';
import { Overline } from '../../atoms/text/Overline';

export interface BlogPostHeroProps {
  category: string;
  date: string;
  title: string;
  subtitle: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

export const BlogPostHero = ({ 
  category = "DESIGN", 
  date = "OCTOBER 12, 2023", 
  title = "The Future of Premium Digital Interfaces",
  subtitle = "Exploring how modern startups are using bold typography, oxidized orange, and abstract shapes to dominate the market.",
  author = {
    name: "Sarah Jenkins",
    role: "Lead Designer",
    image: "https://placehold.co/44x44"
  }
}: BlogPostHeroProps) => {
  return (
    <div className="w-full px-8 pt-32 pb-16 flex flex-col justify-center items-center">
      <div className="max-w-[896px] flex flex-col justify-start items-center gap-4">
        <div className="pb-4 flex flex-col justify-start items-start">
          <div className="inline-flex justify-start items-center gap-2">
            <div className="inline-flex flex-col justify-start items-center">
              <div className="text-center justify-center text-amber-700 text-sm font-bold font-sans uppercase leading-5 tracking-wider">
                {category}
              </div>
            </div>
            <div className="w-1 h-1 bg-amber-700 rounded-full" />
            <div className="inline-flex flex-col justify-start items-center">
              <div className="text-center justify-center text-amber-700 text-sm font-bold font-sans uppercase leading-5 tracking-wider">
                {date}
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-4 md:px-24 flex flex-col justify-start items-center">
          <Heading level={1} variant="display" className="text-center">
            {title}
          </Heading>
        </div>

        <div className="max-w-[672px] pt-4 flex flex-col justify-start items-start">
          <div className="px-8 flex flex-col justify-start items-center">
            <div className="text-center justify-center text-neutral-400 text-xl font-normal font-sans leading-8">
              {subtitle}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col justify-start items-start">
          <div className="inline-flex justify-start items-center gap-4">
            <div className="w-12 h-12 bg-neutral-100 rounded-full outline outline-2 outline-offset-[-2px] outline-amber-700 inline-flex flex-col justify-center items-start overflow-hidden">
              <img className="self-stretch flex-1 relative object-cover" src={author.image} alt={author.name} />
            </div>
            <div className="inline-flex flex-col justify-start items-start">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-neutral-900 text-base font-semibold font-sans leading-6">
                  {author.name}
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-neutral-400 text-sm font-normal font-sans leading-5">
                  {author.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
