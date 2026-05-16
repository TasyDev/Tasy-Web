import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 
   * The text inside the button
   * @default "Start a Project"
   */
  label?: string;
  /**
   * The color variant
   * @default "primary"
   */
  variant?: 'primary' | 'secondary';
}

export const Button = ({ label = "Start a Project", variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyle = "px-7 py-3.5 rounded-full inline-flex justify-center items-center transition-colors cursor-pointer";
  const textBase = "text-center justify-center text-base font-semibold font-sans leading-6";
  
  const variants = {
    primary: {
      button: "bg-amber-700 hover:bg-amber-600",
      text: "text-white"
    },
    secondary: {
      button: "bg-neutral-100 hover:bg-neutral-200",
      text: "text-neutral-900"
    }
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant].button} ${className}`}
      {...props}
    >
      <span className={`${textBase} ${variants[variant].text}`}>
        {label}
      </span>
    </button>
  );
};
