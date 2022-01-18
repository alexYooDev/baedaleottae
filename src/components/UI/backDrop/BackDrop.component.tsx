import React from 'react';
import { BackDropContainer } from './BackDrop.styles';

interface Props {
  onCancel: () => void;
}

const BackDrop = ({ onCancel }: Props) => {
  const handleCloseModal = () => {
    onCancel();
  };
  return <BackDropContainer onClick={handleCloseModal} />;
};

export default BackDrop;
