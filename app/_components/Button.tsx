import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  className = "", 
  children = "Schedule a Consultation", 
  variant = "primary" 
}) => {
  const baseClasses = "font-normal py-4 sm:py-5 px-8 sm:px-12 rounded-full transition-colors duration-200 text-sm sm:text-base uppercase tracking-wider";
  
  const variantClasses: Record<'primary' | 'secondary' | 'outline', string> = {
    primary: "bg-teal-500 hover:bg-teal-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    outline: "border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;