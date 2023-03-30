import React, { FC } from 'react';
import { ReactComponent as PlaceholderIcon } from '../../../src/assets/icons/placeholder.svg';
import { ReactComponent as WindowsIcon } from '../../../src/assets/icons/windows.svg';

type Props = {
  icon: keyof typeof ICONS,
  className: string
}

const ICONS: { [key: string]: FC<React.SVGProps<SVGSVGElement>> } = {
  placeholder: PlaceholderIcon,
  windows: WindowsIcon,
} as const;

const Icon = ({ icon, className }: Props) => {
  const SelectedIcon = ICONS[icon];

  return <SelectedIcon className={className} />
}

export default Icon;