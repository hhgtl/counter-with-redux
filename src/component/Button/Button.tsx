import { ButtonHTMLAttributes } from 'react';
import s from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isDisabled?: boolean;
};

export const Button = ({ children, onClick, isDisabled }: ButtonProps) => {
  return (
    <button className={s.buttonComponent} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};
