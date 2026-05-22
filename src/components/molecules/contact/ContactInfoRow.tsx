import React from 'react';

export interface ContactInfoRowProps {
  icon: React.ReactNode;
  text: string;
}

export const ContactInfoRow = ({ icon, text }: ContactInfoRowProps) => {
  return (
    <div className="self-stretch inline-flex justify-start items-center gap-4">
      <div className="w-12 h-12 bg-neutral-100 rounded-full flex justify-center items-center text-amber-700 text-xl shrink-0">
        {icon}
      </div>
      <div className="inline-flex flex-col justify-start items-start">
        <span className="justify-center text-neutral-900 text-lg font-normal font-sans leading-7">
          {text}
        </span>
      </div>
    </div>
  );
};
