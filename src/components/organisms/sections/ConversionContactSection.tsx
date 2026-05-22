import React from 'react';
import { Heading } from '../../atoms/text/Heading';
import { BodyText } from '../../atoms/text/BodyText';
import { ContactForm } from '../forms/ContactForm';

/**
 * Organism representing the Conversion Contact Section.
 */
export const ConversionContactSection = () => {
  return (
    <div className="w-full py-32 bg-neutral-900 flex justify-center items-start">
      <div className="w-full max-w-[1200px] px-8 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-16 mx-auto">
        
        <div className="flex-1 flex flex-col justify-start items-start gap-8 w-full">
          <div className="pb-4 flex flex-col justify-start items-start">
            <div className="w-16 h-16 bg-amber-700/20 rounded-full flex justify-center items-center">
              <div className="w-7 h-7 relative overflow-hidden">
                <div className="w-6 h-1.5 left-[2px] top-[8px] absolute outline outline-2 outline-amber-700" />
                <div className="w-6 h-5 left-[2px] top-[5px] absolute outline outline-2 outline-amber-700" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-start items-start w-full">
            <Heading level={2} variant="hero" className="text-left !text-5xl md:!text-6xl !leading-tight">
              <span className="text-white block">Let's Fix Your</span>
              <span className="text-amber-700 block">Conversion Flow</span>
            </Heading>
          </div>
          
          <div className="max-w-96 flex flex-col justify-start items-start w-full">
            <BodyText variant="small-light">
              Ready to elevate your product experience?<br/>Reach out to start the conversation.
            </BodyText>
          </div>
          
          <div className="pt-4 flex flex-col justify-start items-start w-full gap-6">
            <div className="flex justify-start items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex justify-center items-center">
                <div className="w-5 h-5 relative overflow-hidden flex justify-center items-center">
                  <div className="w-4 h-1 absolute outline outline-[1.67px] outline-amber-700" />
                  <div className="w-4 h-3.5 absolute outline outline-[1.67px] outline-amber-700" />
                </div>
              </div>
              <div className="text-gray-300 text-lg font-normal font-sans leading-7">hello@designagency.com</div>
            </div>
            
            <div className="flex justify-start items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex justify-center items-center">
                <div className="w-5 h-5 relative overflow-hidden flex justify-center items-center">
                  <div className="w-3.5 h-4 absolute outline outline-[1.67px] outline-amber-700" />
                  <div className="w-1 h-1 absolute outline outline-[1.67px] outline-amber-700" />
                </div>
              </div>
              <div className="text-gray-300 text-lg font-normal font-sans leading-7">123 Creative Street, NY</div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-start items-start w-full max-w-xl lg:max-w-none">
          <ContactForm />
        </div>
        
      </div>
    </div>
  );
};
