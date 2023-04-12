import React from 'react';
import * as style from './style.module.scss';
import Icon from '../Icon';

type Props = {
  label: string,
  icon: string,
  onClick: () => void,
}

const DesktopItem = ({ icon, label, onClick }: Props) => {

  return (
    <button type="button" onClick={onClick} className={style.desktopItem}>
      <div className={style.iconContainer}>
        <Icon icon={icon} className={style.icon} />
      </div>
      <div className={style.label}>{label}</div>
    </button >
  );
};

export default DesktopItem;