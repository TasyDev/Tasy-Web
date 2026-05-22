import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../atoms/forms/Input';
import { Textarea } from '../../atoms/forms/Textarea';
import { Button } from '../../atoms/actions/Button';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormProps {
  nameLabel?: string;
  namePlaceholder?: string;
  nameRequiredMsg?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  emailRequiredMsg?: string;
  emailInvalidMsg?: string;
  subjectLabel?: string;
  subjectPlaceholder?: string;
  subjectRequiredMsg?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  messageRequiredMsg?: string;
  submitLabel?: string;
}

export const ContactForm = ({
  nameLabel = "Nombre completo",
  namePlaceholder = "María García",
  nameRequiredMsg = "El nombre es obligatorio",
  emailLabel = "Correo electrónico",
  emailPlaceholder = "maria@correo.com",
  emailRequiredMsg = "El correo es obligatorio",
  emailInvalidMsg = "El correo no es válido",
  subjectLabel = "Asunto",
  subjectPlaceholder = "¿En qué te puedo ayudar?",
  subjectRequiredMsg = "El asunto es obligatorio",
  messageLabel = "Mensaje",
  messagePlaceholder = "Cuéntame más sobre tu proyecto...",
  messageRequiredMsg = "El mensaje es obligatorio",
  submitLabel = "Enviar mensaje"
}: ContactFormProps) => {
  const [hydrated, setHydrated] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  useEffect(() => {
    setHydrated(true);
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch("https://formspree.io/f/xnjrjwnp", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (res.ok) {
      alert("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.");
    } else {
      alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      data-testid="contact-form"
      data-hydrated={hydrated ? 'true' : undefined}
      className="flex flex-col gap-6 w-full max-w-2xl bg-white p-10 rounded-[32px] shadow-xl"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <Input 
          id="contact-name"
          label={nameLabel}
          placeholder={namePlaceholder}
          {...register("name", { required: nameRequiredMsg })}
          error={errors.name?.message}
        />
        <Input 
          id="contact-email"
          label={emailLabel}
          placeholder={emailPlaceholder}
          {...register("email", { 
            required: emailRequiredMsg, 
            pattern: {
              value: /^\S+@\S+$/i,
              message: emailInvalidMsg
            }
          })}
          error={errors.email?.message}
        />
      </div>
      
      <Input 
        id="contact-subject"
        label={subjectLabel}
        placeholder={subjectPlaceholder}
        {...register("subject", { required: subjectRequiredMsg })}
        error={errors.subject?.message}
      />
      
      <Textarea 
        id="contact-message"
        label={messageLabel}
        placeholder={messagePlaceholder}
        rows={6}
        {...register("message", { required: messageRequiredMsg })}
        error={errors.message?.message}
      />

      <div className="pt-4 flex justify-end">
        <Button 
          type="submit" 
          variant="primary" 
          size="lg"
          label={submitLabel}
          className="w-full md:w-auto"
        />
      </div>
    </form>
  );
};
