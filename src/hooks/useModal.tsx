import { useState } from 'react';

export type ModalHookReturnTypeValue = boolean;
export type ModalHookReturnTypeFunctions = {
  openModal: () => void,
  closeModal: () => void,
  toggleModal: () => void
};
export type ModalHookReturnType = [
  ModalHookReturnTypeValue,
  ModalHookReturnTypeFunctions
];

const useModal = (defaultValue = false): ModalHookReturnType => {
  const [isOpen, setIsOpen] = useState(defaultValue);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return [isOpen, { openModal, closeModal, toggleModal }];
}

export default useModal;