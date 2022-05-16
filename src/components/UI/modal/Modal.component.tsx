import React from 'react';
import styled from 'styled-components';

type Props = {
  message: string;
  onCancel: () => void;
};

const Modal = ({ message, onCancel }: Props) => {
  const handleCancel = () => {
    onCancel();
  };
  return (
    <ModalContainer>
      {message}
      <ModalCloseBtn onClick={handleCancel}>x</ModalCloseBtn>
    </ModalContainer>
  );
};

const ModalCloseBtn = styled.button`
  position: absolute;
  right: 10;
  top: 0;
  border: 0;
  background-color: none;
  cursor: pointer;
  font-size: 20px;
`;

const ModalContainer = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  text-align: center;
  width: 30rem;
  z-index: 11;
  position: fixed;
  top: 25vh;
  left: calc(50% - 15rem);
`;

export default Modal;
