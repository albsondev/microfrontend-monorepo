import * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

declare const Button: React.FC<ButtonProps>;

export default Button;
