import React from 'react';
import * as style from './style.module.scss';
import DesktopItem from '../DesktopItem';
import AboutMe from '../Pages/AboutMe';

const ITEMS = [
  // {
  //   label: 'My Computer',
  //   disabled: true,
  // },
  // {
  //   label: 'My Documents',
  //   disabled: true,
  // },
  // {
  //   label: 'Network Neighborhood',
  //   disabled: true,
  // },
  // {
  //   label: 'Recycle Bin',
  //   disabled: true,
  // },
  // {
  //   label: 'Internet Explorer',
  //   disabled: true,
  // },
  {
    label: 'About me',
    icon: 'documents',
    children: <AboutMe />,
  },
  {
    label: 'My Projects',
    icon: 'documents',
  },
]

const Desktop = () => {
  return (
    <div className={style.desktop}>
      {ITEMS.map(item => (
        <DesktopItem label={item.label} icon={item.icon || 'placeholder'} key={item.label} >
          {item.children}
        </DesktopItem>
      ))}
    </div>
  );
};

export default Desktop;