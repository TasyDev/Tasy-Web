import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../atoms/forms/Input';
import { Textarea } from '../../atoms/forms/Textarea';
import { Button } from '../../atoms/actions/Button';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // TODO: Integrate with backend endpoint
    // console.log("Form data ready to send:", data);
    alert("Thanks for your message! This is a demo form.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full self-stretch p-8 bg-white rounded-3xl shadow-[0px_8px_30px_0px_rgba(0,0,0,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-6">
      <Input 
        label="Name" 
        placeholder="John Doe" 
        {...register("name", { required: "Name is required" })}
        error={errors.name?.message}
      />
      <Input 
        label="Email" 
        type="email"
        placeholder="john@example.com" 
        {...register("email", { 
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
        })}
        error={errors.email?.message}
      />
      <Textarea 
        label="Message" 
        placeholder="Tell us about your project..." 
        {...register("message", { required: "Message is required" })}
        error={errors.message?.message}
      />
      
      <div className="self-stretch pt-4 flex flex-col justify-start items-start">
        <Button type="submit" label="Send Message" variant="primary" />
      </div>
    </form>
  );
};
