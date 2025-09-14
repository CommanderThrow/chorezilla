import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string | undefined;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
