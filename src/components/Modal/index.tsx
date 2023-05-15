import React, { useEffect } from 'react';
import Button from '../Button';
import * as style from "./style.module.scss";
import { ModalHookReturnTypeValue, ModalHookReturnTypeFunctions } from '../../hooks/useModal';
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';
import ResizeHandle from './ResizeHandle';
import useWindowResize from '../../hooks/useWindowResize';

type Props = {
  title?: string,
  children: React.ReactNode
  isOpen: ModalHookReturnTypeValue,
  modalFunctions: ModalHookReturnTypeFunctions,
  isActive?: boolean,
}

const Modal = ({ title, children, isOpen, modalFunctions, isActive = true }: Props) => {
  const { closeModal } = modalFunctions;
  const [modalMaxConstraints, setModalMaxConstraints] = React.useState<[width: number, height: number]>([300, 300]);
  const onResize = () => setModalMaxConstraints([window.innerWidth * 0.9, window.innerHeight * 0.9]);
  useWindowResize(onResize);

  return (
    <div className={style.modalContainer} hidden={!isOpen}>
      <Draggable
        handle='.handle'
      >
        <ResizableBox
          width={200}
          height={200}
          minConstraints={[100, 100]}
          maxConstraints={modalMaxConstraints}
          handle={<ResizeHandle />}
        >
          <div className={`${style.modal} ${isActive ? '' : style.modalInactive}`.trim()}>
            <header className={`handle ${style.header}`}>
              <div className={style.headerTop}>
                {!!title && <h2 className={style.title}>{title}</h2>}
                <nav className={style.headerNav}>
                  <Button
                    icon="close"
                    onClick={closeModal}
                    label="Close"
                    labelHidden
                    isSmall
                  />
                </nav>
              </div>
              <nav className={style.mainNav}></nav>
            </header>
            <div className={style.contentContainer}>
              {children}
            </div>
          </div>
        </ResizableBox>
      </Draggable>
    </div>
  )
}

export default Modal;