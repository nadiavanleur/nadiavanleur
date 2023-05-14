import React from 'react';
import * as style from './style.module.scss';
import Icon from '../Icon';
import Modal from '../Modal';
import useModal from '../../hooks/useModal';
import useElementActive from '../../hooks/useElementActive';
import Draggable from 'react-draggable';

type Props = {
  label: string,
  icon: string,
  children: React.ReactNode,
}

const DesktopItem = ({ icon, label, children }: Props) => {
  const { isActive, containerRef } = useElementActive();
  const [isOpen, modalFunctions] = useModal();
  const { openModal } = modalFunctions;

  return (
    <div ref={containerRef} className={`${style.desktopItemContainer}`}>
      <Draggable>
        <button type="button" onDoubleClick={openModal} className={style.desktopItem}>
          <div className={style.iconContainer}>
            <Icon icon={icon} className={style.icon} />
          </div>
          <div className={style.label}>{label}</div>
        </button>
      </Draggable>
      <Modal title={label} isOpen={isOpen} modalFunctions={modalFunctions} isActive={isActive}>
        {children}
      </Modal>
    </div>
  );
};

export default DesktopItem;