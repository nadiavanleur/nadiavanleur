import React, { forwardRef, HTMLProps } from 'react';
import Icon, { IconNameType } from '../Icon'
import * as style from './style.module.scss';

type Props = {
  label: string | JSX.Element,
  icon: IconNameType,
  disabled?: boolean,
  isBold?: boolean,
  isActive?: boolean,
  isSmall?: boolean,
  styleModifier?: "buttonMenu" | "buttonMenuLg",
  labelHidden?: boolean,
  onClick?: () => void,
};

const Button = forwardRef<HTMLButtonElement, Props>(({ label, icon, onClick, isBold, isActive, isSmall, styleModifier, labelHidden, disabled }, ref) => { // Use forwardRef

  return (
    <button ref={ref} onClick={onClick} className={`${style.button} ${isSmall ? style.buttonSmall : ''} ${isBold ? style.buttonBold : ''} ${isActive ? style.buttonActive : ''} ${styleModifier ? style[styleModifier] : ''}`.trim()} disabled={disabled}>
      <div>
        {icon && <Icon icon={icon} className={style.icon} />}
      </div>
      <div className={`${style.label} ${labelHidden ? 'u-visually-hidden' : ''}`.trim()}>{label}</div>
    </button>
  )
});

export default Button;