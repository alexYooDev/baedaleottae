import { Dispatch, SetStateAction, useCallback, useMemo } from "react";
import { ButtonInput, ButtonLabel } from "./Button.styles";

interface IProps {
  gu: string;
  number: string;
  checkedVal: string[];
  onSetCheck: Dispatch<SetStateAction<any>>;
}

const Button = ({ gu, number, checkedVal, onSetCheck }: IProps) => {
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
      <ButtonInput type="radio" id={number} />
    </>
  );
};

export default Button;
