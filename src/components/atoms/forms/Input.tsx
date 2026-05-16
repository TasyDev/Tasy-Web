import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className={`self-stretch flex flex-col justify-start items-start gap-2 w-full ${className}`}>
        {label && (
          <label className="self-stretch justify-center text-neutral-900 text-sm font-semibold font-sans leading-5">
            {label}
          </label>
        )}
        <input 
          ref={ref}
          className="self-stretch px-4 py-3 bg-stone-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 text-neutral-900 placeholder:text-neutral-400 text-base font-normal font-sans leading-6"
          {...props}
        />
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';
