import styled from "styled-components";

export const ConfirmPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const ConfirmMessage = styled.div`
  font-size: 18px;
`;

export const GuLabel = styled.p`
  transition: 200ms ease-in;
`;

export const GuSelectionForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  place-items: center;
  border: 1px solid black;
  border-radius: 4px;
`;

export const WarningMessage = styled.p``;

export const ConfirmCard = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  text-align: center;
  width: 30rem;
  z-index: 11;
  position: fixed;
  top: 10vh;
  left: calc(50% - 15rem);
`;

export const ConfirmButton = styled.button`
  width: 120px;
  height; 80px;
  background: none;
  border: none;
  cursor: pointer;
`;
