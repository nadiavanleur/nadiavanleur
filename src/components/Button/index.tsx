import React, { forwardRef, HTMLProps } from 'react';
import Icon from '../Icon'
import * as style from './style.module.scss';

type Props = {
  label: string | JSX.Element,
  icon: string,
  isBold?: boolean,
  isActive?: boolean,
  styleModifier?: string,
  onClick?: () => void,
};

const Button = forwardRef<HTMLButtonElement, Props>(({ label, icon, onClick, isBold, isActive, styleModifier }, ref) => { // Use forwardRef

  return (
    <button ref={ref} onClick={onClick} className={`${style.button} ${isBold ? style.buttonBold : ''} ${isActive ? style.buttonActive : ''} ${styleModifier ? style[styleModifier] : ''}`.trim()}>
      <div>
        {icon && <Icon icon={icon} className={style.icon} />}
      </div>
      <div className={style.label}>{label}</div>
    </button>
  )
});

export default Button;