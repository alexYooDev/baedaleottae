import styled, { css } from "styled-components";

interface IProps {
  defaultChecked?: boolean;
}

export const ButtonLabel = styled.label`
  border-radius: 4px;
  margin: 10px;
  padding: 20px 10px;
  transition: 200ms ease;
  cursor: pointer;
  ${({ defaultChecked }: IProps) =>
    defaultChecked &&
    css`
      background-color: green;
      color: white;
      border: none;
    `}
`;

export const ButtonInput = styled.input`
  display: none;
`;
