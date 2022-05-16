import React from 'react';
import styled from 'styled-components';

type Props = {
  onCancel: () => void;
};

const BackDrop = ({ onCancel }: Props) => {
  const handleCloseModal = () => {
    onCancel();
  };
  return <BackDropContainer onClick={handleCloseModal} />;
};

const BackDropContainer = styled.div`
  position: fixed;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

export default BackDrop;
