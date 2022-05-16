import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  gu: string;
  number: string;
  checkedVal: string[];
  onSetCheck: Dispatch<SetStateAction<any>>;
};

type StyleProps = {
  defaultChecked?: boolean;
};

const Button = ({ gu, number, checkedVal, onSetCheck }: Props) => {
  const useHandleClick = (e: any) => {
    if (checkedVal && checkedVal.length < 1) {
      onSetCheck((prev: any) => [...prev, e.target.textContent]);
    }
    if (checkedVal.includes(e.target.textContent)) {
      onSetCheck((prev: any) =>
        prev.filter((item: any) => item !== e.target.textContent)
      );
    }
  };

  return (
    <>
      <ButtonLabel
        htmlFor={number}
        onClick={useHandleClick}
        defaultChecked={checkedVal.includes(gu)}
      >
        <span>{gu}</span>
      </ButtonLabel>
      <ButtonInput type='radio' id={number} />
    </>
  );
};

const ButtonLabel = styled.label`
  border-radius: 4px;
  margin: 10px;
  padding: 20px 10px;
  transition: 200ms ease;
  cursor: pointer;
  ${({ defaultChecked }: StyleProps) =>
    defaultChecked &&
    css`
      background-color: green;
      color: white;
      border: none;
    `}
`;

const ButtonInput = styled.input`
  display: none;
`;

export default Button;
