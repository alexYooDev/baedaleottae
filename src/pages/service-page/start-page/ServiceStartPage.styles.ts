import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  background: linear-gradient(
    rgba(244, 255, 252, 0),
    rgb(238, 253, 250),
    rgb(235, 252, 248)
  );
  width: 100vw;
  height: 100vh;
`;

export const GPSRequestContainer = styled.div`
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  height: -moz-fit-content;
  background-color: white;
  width: 45rem;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RequestTitleContainer = styled.h2`
  font-size: 30px;
  font-weight: bold;
  line-height: 20px;
  word-break: keep-all;
`;

export const RequestDescContainer = styled.p`
  position: relative;
  font-size: 20px;
  font-weight: bold;
  word-break: keep-all;
  margin: 20px 46px;
`;

export const ApprovalContainer = styled.form`
  margin: 0 auto;
  border-radius: 5px;
  background-color: lightgrey;
  width: 215px;
  height: 30px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  &:active {
    background-color: grey;
  }
`;

export const ApproveLabel = styled.label`
  padding-top: 4px;
  height: 100%;
  text-align: center;
  padding; 5px;
  cursor: pointer;
  line-height: 20px;
`;

export const ApprovalCheck = styled.input`
  display: none;
  background-color: grey;

  &:checked {
    display: inline;
    background-color: lightgrey;
  }
`;

export const ToServiceBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ExampleTitle = styled.h2`
  margin: 0;
`;

export const ToServiceBtn = styled.button`
  font: inherit;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1.05rem;
  border: none;
  border-radius: 7px;
  justify-content: space-between;
  width: fit-content;
  margin: 15px 5px;

  &:hover {
    transition: ease-in 200ms;
    background-color: white;
    box-shadow: 1px 1px 2px 1px grey;
  }
`;
