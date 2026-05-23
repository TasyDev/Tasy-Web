import React from 'react';
import { Button } from '../../atoms/actions/Button';

export const Navbar = () => {
  return (
    <div className="px-5 py-5 bg-gradient-to-r from-amber-600 via-amber-800 to-neutral-900 rounded-full outline outline-1 outline-offset-[-1px] outline-white/20 flex justify-between items-center w-full max-w-xl mx-auto shadow-lg backdrop-blur-md">

      <a href="/" className="text-white/90 text-sm font-medium font-sans leading-5 whitespace-nowrap hover:opacity-80 transition-opacity">
        Inicio
      </a>

      <a href="/non-profit" className="text-white/90 text-sm font-medium font-sans leading-5 whitespace-nowrap hover:opacity-80 transition-opacity">
        Para Fundaciones
      </a>

      <a href="/portafolio">
        <Button variant="dark" label="Portafolio" className="!px-4 !py-2 text-sm" />
      </a>

    </div>
  );
};