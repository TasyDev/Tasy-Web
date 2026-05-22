import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { BodyText } from '../../atoms/text/BodyText';
import { ContactInfoRow } from '../../molecules/contact/ContactInfoRow';
import { ContactForm, type ContactFormProps } from '../forms/ContactForm';

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export interface ContactSectionProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  email?: string;
  address?: string;
  phone?: string;
  formProps?: ContactFormProps;
}

export const ContactSection = ({
  title = <>Construyamos algo<br/>juntos</>,
  description = <>¿Tienes un problema que resolver? Escríbeme y empecemos la conversación.</>,
  email = "sebastian@tasy.work",
  address = "Medellín, Colombia",
  phone,
  formProps
}: ContactSectionProps) => {
  return (
    <div className="w-full max-w-[1200px] px-4 md:px-8 py-12 md:py-24 mx-auto flex flex-col md:flex-row justify-center items-start gap-16">
      
      {/* Left Column (Static Content) */}
      <div className="flex-1 self-stretch flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-start">
          <Subtitle text={title} level="h2" variant="h2" />
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <BodyText variant="standard">{description}</BodyText>
        </div>
        
        <div className="self-stretch pt-8 flex flex-col justify-start items-start gap-6">
          <ContactInfoRow icon={<FaEnvelope />} text={email} />
          <ContactInfoRow icon={<FaMapMarkerAlt />} text={address} />
          {phone && <ContactInfoRow icon={<FaPhone />} text={phone} />}
        </div>
      </div>
      
      {/* Right Column (Client Form) */}
      <div className="flex-1 self-stretch flex flex-col justify-start items-start">
        <ContactForm {...formProps} />
      </div>

    </div>
  );
};
