import React from 'react';
import Icon from '../Icon'
import * as style from './style.module.scss';

type Props = {
  label: string,
  icon: string,
  isBold?: boolean,
  isActive?: boolean,
  styleModifier?: string,
  onClick: () => void,
}

const Button = ({ label, icon, onClick, isBold, isActive, styleModifier }: Props) => {
  return (
    <button onClick={onClick} className={`${style.button} ${isBold ? style.buttonBold : ''} ${isActive ? style.buttonActive : ''} ${styleModifier ? style[styleModifier] : ''}`.trim()}>
      <div>
        {icon && <Icon icon={icon} className={style.icon} />}
      </div>
      <div className={style.label}>{label}</div>
    </button>
  )
};

export default Button;