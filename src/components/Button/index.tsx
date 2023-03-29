import React from 'react';
import Icon from '../Icon'
import * as style from './style.module.scss';

type Props = {
  label: string,
  icon: string,
  onClick: () => void,
}

const Button = ({ label, icon, onClick }: Props) => (
  <button onClick={onClick} className={style.button}>
    {icon && <Icon icon="windows" />}
    {label}
  </button>
);

export default Button;