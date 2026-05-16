import React from 'react';

export interface TagProps {
  label: string;
  className?: string;
}

export const Tag = ({ label, className = '' }: TagProps) => {
  return (
    <div className={`px-4 py-2 bg-neutral-100 rounded-full inline-flex flex-col justify-start items-start ${className}`}>
      <div className="justify-center text-neutral-900 text-sm font-semibold font-sans leading-5">
        {label}
      </div>
    </div>
  );
};
