import React from 'react';
import { ModalContainer } from './Modal.styles';

interface Props {
  message: string;
  onCancel: () => void;
}

const Modal = ({ message, onCancel }: Props) => {
  const handleCancel = () => {
    onCancel();
  };
  return (
    <ModalContainer>
      {message}
      <span
        style={{
          position: 'absolute',
          right: 10,
          top: 0,
          cursor: 'pointer',
          fontSize: '20px',
        }}
        onClick={handleCancel}
      >
        x
      </span>
    </ModalContainer>
  );
};

export default Modal;
