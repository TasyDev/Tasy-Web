import React from 'react';

/**
 * @params image - URL of the blog post cover image
 * @params category - Category name (e.g. DESIGN, UI/UX)
 * @params date - Published date string
 * @params title - Blog post title
 * @params description - Short snippet of the blog content
 * @params href - Link to the full article
 */
interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  href?: string;
}

export function BlogCard({ image, category, date, title, description, href = "#" }: BlogCardProps) {
  return (
    <a href={href} className="p-8 bg-white rounded-3xl shadow-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="w-full h-56 relative border-b border-gray-200 flex flex-col justify-center items-start overflow-hidden rounded-t-xl mb-8">
        <img className="w-full h-full object-cover relative group-hover:scale-105 transition-transform duration-500" src={image} alt={title} />
        <div className="px-3 py-1 left-[16px] top-[16px] absolute bg-white/90 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200/50 backdrop-blur-xs flex flex-col justify-start items-start">
          <div className="justify-center text-amber-700 text-xs font-bold font-sans uppercase leading-4 tracking-wide">
            {category}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <div className="w-full flex flex-col justify-start items-start">
          <div className="justify-center text-neutral-400 text-sm font-semibold font-sans leading-5">
            {date}
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="justify-center text-neutral-900 text-2xl font-bold font-sans leading-8 line-clamp-2">
            {title}
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="justify-center text-neutral-900/80 text-base font-normal font-sans leading-6 line-clamp-3">
            {description}
          </div>
        </div>
        <div className="w-full pt-4 flex flex-col justify-start items-start mt-auto">
          <div className="w-full pt-4 border-t border-gray-200 inline-flex justify-between items-center">
            <div className="inline-flex flex-col justify-start items-start">
              <div className="justify-center text-amber-700 text-base font-semibold font-sans leading-6 group-hover:text-amber-800 transition-colors">
                Read Article
              </div>
            </div>
            <div className="w-8 h-8 bg-neutral-100 rounded-full flex justify-center items-center group-hover:bg-amber-100 transition-colors">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
