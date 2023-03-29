import React, {FC} from 'react';
import { ReactComponent as WindowsIcon } from '../../../src/assets/icons/windows.svg';

type Props = {
  icon: keyof typeof ICONS,
}

const ICONS: {[key: string]: FC<React.SVGProps<SVGSVGElement>>} = {
  windows: WindowsIcon,
} as const;

const Icon = ({icon}: Props) => {
  const SelectedIcon =  ICONS[icon];

  return <SelectedIcon/>
}

export default Icon;