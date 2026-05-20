import React from 'react';
import { useForm } from 'react-hook-form';

export interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export const CTASection = ({ 
  title = "Ready to elevate your digital presence?", 
  description = "Join hundreds of forward-thinking brands that trust our design philosophy. Let's build something extraordinary together.",
  buttonText = "Get Started"
}: CTASectionProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<{ email: string }>();
  
  const onSubmit = async (data: {email: string}) => {
  const res = await fetch("https://formspree.io/f/xnjrjwnp", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (res.ok) {
    alert("Message sent successfully! We'll get back to you soon.");
  } else {
    alert("Error sending message. Please try again later.");
  }
};

  return (
    <div className="w-full max-w-[1000px] px-8 pt-40 pb-48 mx-auto">
      <div className="self-stretch p-10 md:p-20 relative bg-linear-to-br from-amber-700 via-amber-700/80 to-neutral-900 rounded-[40px] shadow-2xl flex flex-col justify-start items-center overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="w-64 h-64 left-[680px] top-0 absolute bg-white/20 rounded-full blur-[32px]" />
        <div className="w-64 h-64 left-0 top-[204px] absolute bg-black/40 rounded-full blur-[32px]" />
        
        <div className="flex flex-col justify-start items-center gap-6 relative z-10">
          <div className="px-4 md:px-14 flex flex-col justify-start items-center">
            <div className="text-center justify-center text-white text-3xl md:text-5xl font-bold font-sans leading-tight md:leading-[60px]">
              {title}
            </div>
          </div>
          <div className="max-w-[576px] px-7 flex flex-col justify-start items-center">
            <div className="text-center justify-center text-white/80 text-lg font-normal font-sans leading-7">
              {description}
            </div>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-96 pt-4 flex flex-col justify-start items-start">
            <div className="w-full p-1 bg-white rounded-full inline-flex justify-start items-start gap-2">
              <div className="flex-1 self-stretch px-4 py-2 flex justify-center items-center">
                <input 
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  placeholder="Enter your email"
                  className="flex-1 text-neutral-900 text-base font-normal font-sans leading-6 bg-transparent outline-none placeholder:text-neutral-400"
                />
              </div>
              <button 
                type="submit"
                className="px-7 py-3.5 bg-neutral-900 rounded-full flex justify-center items-center cursor-pointer hover:bg-neutral-800 transition-colors"
              >
                <div className="text-center justify-center text-white text-base font-semibold font-sans leading-6">
                  {buttonText}
                </div>
              </button>
            </div>
            {errors.email && <span className="text-white text-xs mt-2 ml-4">Please enter a valid email</span>}
          </form>
        </div>
      </div>
    </div>
  );
};
