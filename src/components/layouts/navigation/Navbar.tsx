import React from 'react';
import { Button } from '../../atoms/actions/Button';

export const Navbar = () => {
  return (
    <div className="px-3 py-5 bg-gradient-to-r from-amber-600 via-amber-800 to-neutral-900 rounded-full outline outline-1 outline-offset-[-1px] outline-white/20 flex justify-center items-center w-full max-w-xl mx-auto shadow-lg backdrop-blur-md relative">

      <div className="flex justify-start items-center gap-5 text-center">

        {/* Link: Inicio */}
        <a
          href="/"
          className="inline-flex flex-col justify-start items-start hover:opacity-80 transition-opacity"
        >
          <div className="justify-center text-white/90 text-sm font-medium font-sans leading-5">
            Inicio
          </div>
        </a>

        {/* Link: Fundaciones */}
        <a
          href="/non-profit"
          className="inline-flex flex-col justify-start items-start hover:opacity-80 transition-opacity"
        >
          <div className="justify-center text-white/90 text-sm font-medium font-sans leading-5">
            Para Fundaciones
          </div>
        </a>

      </div>

      {/* Button: Portafolio */}
      <a href="/portafolio" className="absolute right-2">
        <Button
          variant="dark"
          label="Portafolio"
          className="!px-5 !py-2 text-sm"
        />
      </a>

    </div>
  );
};