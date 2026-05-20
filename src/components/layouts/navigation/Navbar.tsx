import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { Button } from '../../atoms/actions/Button';

export const Navbar = () => {
  return (
    <div className="px-6 py-2 bg-gradient-to-r from-amber-600 via-amber-800 to-neutral-900 rounded-full outline outline-1 outline-offset-[-1px] outline-white/20 inline-flex justify-between items-center gap-6 w-full max-w-xl mx-auto shadow-lg backdrop-blur-md">
      <div className="flex justify-start items-center gap-5">
        <a href="/" className="inline-flex flex-col justify-start items-start hover:opacity-80 transition-opacity">
          <div className="justify-center text-white/90 text-sm font-medium font-sans leading-5">Inicio</div>
        </a>
        <a href="/non-profit" className="inline-flex flex-col justify-start items-start hover:opacity-80 transition-opacity">
          <div className="justify-center text-white/70 text-sm font-medium font-sans leading-5">Fundaciones</div>
        </a>
        <a href="/blog" className="inline-flex flex-col justify-start items-start hover:opacity-80 transition-opacity">
          <div className="justify-center text-white/70 text-sm font-medium font-sans leading-5">Non Profit blogs</div>
        </a>
      </div>

      <a href="/portafolio">
        <Button variant="dark" label="Portafolio" className="!px-5 !py-2 text-sm" />
      </a>
    </div>
  );
};

