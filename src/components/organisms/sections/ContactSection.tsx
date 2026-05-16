import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { BodyText } from '../../atoms/text/BodyText';
import { ContactInfoRow } from '../../molecules/contact/ContactInfoRow';
import { ContactForm } from '../forms/ContactForm';

import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const ContactSection = () => {
  return (
    <div className="w-full max-w-[1200px] px-8 py-24 mx-auto flex flex-col md:flex-row justify-center items-start gap-16">
      
      {/* Left Column (Static Content) */}
      <div className="flex-1 self-stretch flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-start">
          <Subtitle text={<>Let's Build Something<br/>Great</>} level="h2" variant="h2" />
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <BodyText variant="standard">Ready to elevate your brand? Reach out to us to start the<br/>conversation.</BodyText>
        </div>
        
        <div className="self-stretch pt-8 flex flex-col justify-start items-start gap-6">
          <ContactInfoRow icon={<FaEnvelope />} text="hello@agency.com" />
          <ContactInfoRow icon={<FaMapMarkerAlt />} text="123 Creative Street, NY" />
        </div>
      </div>
      
      {/* Right Column (Client Form) */}
      <div className="flex-1 self-stretch flex flex-col justify-start items-start">
        <ContactForm />
      </div>

    </div>
  );
};
