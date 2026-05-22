import React from 'react';

/**
 * @params label - The text to display
 * @params isActive - Whether the pill is currently selected
 */
interface CategoryPillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function CategoryPill({ label, isActive = false, onClick }: CategoryPillProps) {
  const baseClasses = "px-5 py-2 rounded-full outline outline-1 outline-offset-[-1px] inline-flex flex-col justify-center items-center cursor-pointer transition-colors";
  const activeClasses = isActive 
    ? "bg-amber-700 outline-amber-700 text-white" 
    : "bg-white outline-gray-200 text-neutral-900 hover:bg-neutral-50";

  return (
    <div className={`${baseClasses} ${activeClasses}`} onClick={onClick}>
      <div className="inline-flex justify-center items-start">
        <div className="text-center justify-center text-sm font-semibold font-sans leading-5">
          {label}
        </div>
      </div>
    </div>
  );
}
