import { HiDocumentText, HiLink } from "react-icons/hi2";

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
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * Optional icon to display before the label
   */
  icon?: React.ReactNode;
  /**
   * Serializable icon name for Astro hydration
   */
  iconName?: 'cv' | 'linkedin';
}

export const Button = ({ label = "Start a Project", variant = 'primary', icon, iconName, className = '', ...props }: ButtonProps) => {
  const baseStyle = "px-7 py-3.5 rounded-full inline-flex justify-center items-center transition-colors cursor-pointer";
  const textBase = "text-center justify-center text-base font-semibold font-sans leading-6";
  
  const iconMap = {
    cv: <HiDocumentText />,
    linkedin: <HiLink />
  };

  const finalIcon = icon || (iconName ? iconMap[iconName] : null);

  const variants = {
    primary: {
      button: "bg-amber-700 hover:bg-amber-600",
      text: "text-white"
    },
    secondary: {
      button: "bg-neutral-100 hover:bg-neutral-200",
      text: "text-neutral-900"
    },
    outline: {
      button: "bg-transparent outline outline-2 outline-offset-[-2px] outline-neutral-900 hover:bg-neutral-50",
      text: "text-neutral-900"
    }
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant].button} ${className} gap-2`}
      {...props}
    >
      {finalIcon && <span className="text-xl">{finalIcon}</span>}
      <span className={`${textBase} ${variants[variant].text}`}>
        {label}
      </span>
    </button>
  );
};
