import React from 'react';
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

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form data:', data);
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="flex flex-col gap-6 w-full max-w-2xl bg-white p-10 rounded-[32px] shadow-xl"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <Input 
          label="Full Name" 
          placeholder="John Doe" 
          {...register("name", { required: "Name is required" })}
          error={errors.name?.message}
        />
        <Input 
          label="Email Address" 
          placeholder="john@example.com" 
          {...register("email", { 
            required: "Email is required", 
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address"
            }
          })}
          error={errors.email?.message}
        />
      </div>
      
      <Input 
        label="Subject" 
        placeholder="How can I help you?" 
        {...register("subject", { required: "Subject is required" })}
        error={errors.subject?.message}
      />
      
      <Textarea 
        label="Message" 
        placeholder="Tell me more about your project..." 
        rows={6}
        {...register("message", { required: "Message is required" })}
        error={errors.message?.message}
      />

      <div className="pt-4 flex justify-end">
        {/* Espacio del sent (Submit button) */}
        <Button 
          type="submit" 
          variant="primary" 
          size="lg"
          text="Send Message"
          className="w-full md:w-auto"
        />
      </div>
    </form>
  );
};
