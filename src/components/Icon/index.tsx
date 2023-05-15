import React, { FC } from 'react';
import { ReactComponent as PlaceholderIcon } from '../../../src/assets/icons/placeholder.svg';
import { ReactComponent as WindowsIcon } from '../../../src/assets/icons/windows.svg';
import { ReactComponent as DocumentsIcon } from '../../../src/assets/icons/documents.svg';
import { ReactComponent as CloseIcon } from '../../../src/assets/icons/close.svg';
import { ReactComponent as TextFileIcon } from '../../../src/assets/icons/text-file.svg';

export type IconNameType = keyof typeof ICONS;

type Props = {
  icon: IconNameType,
  className?: string
}

export const ICONS: { [key: string]: FC<React.SVGProps<SVGSVGElement>> } = {
  placeholder: PlaceholderIcon,
  windows: WindowsIcon,
  documents: DocumentsIcon,
  close: CloseIcon,
  'text-file': TextFileIcon,
} as const;

const Icon = ({ icon, className }: Props) => {
  const SelectedIcon = ICONS[icon];

  return <SelectedIcon className={className} />
}

export default Icon;