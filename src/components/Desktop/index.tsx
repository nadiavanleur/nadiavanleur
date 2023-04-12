import React from 'react';
import * as style from './style.module.scss';
import DesktopItem from './item';

const ITEMS = [
  {
    label: 'My Computer',
    icon: 'windows',
    onClick: () => { }
  },
  {
    label: 'My Documents',
    icon: 'placeholder',
    onClick: () => { }
  },
  {
    label: 'Network Neighborhood',
    icon: 'placeholder',
    onClick: () => { }
  },
  {
    label: 'Recycle Bin',
    icon: 'placeholder',
    onClick: () => { }
  },
  {
    label: 'Internet Explorer',
    icon: 'placeholder',
    onClick: () => { }
  },
]

const Desktop = () => {

  return (
    <div className={style.desktop}>
      {ITEMS.map(item => (
        <DesktopItem label={item.label} icon={item.icon} onClick={item.onClick} />
      ))}
    </div>
  );
};

export default Desktop;