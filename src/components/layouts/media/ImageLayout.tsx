import React from 'react';

export interface ImageLayoutProps {
  /** 
   * The source URL of the image
   * @default "https://placehold.co/512x640"
   */
  src?: string;
  /** 
   * The alt text for the image
   * @default "Image Template"
   */
  alt?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const ImageLayout = ({ 
  src = "https://placehold.co/512x640", 
  alt = "Image Template",
  className = ''
}: ImageLayoutProps) => {
  return (
    <div className={`w-full max-w-[544px] aspect-[4/5] p-4 bg-neutral-100 rounded-[32px] flex justify-center items-center shrink-0 ${className}`}>
      <img 
        className="w-full h-full relative rounded-3xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg object-cover" 
        src={src} 
        alt={alt} 
      />
    </div>
  );
};
