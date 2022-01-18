import styled, { css } from "styled-components";
import { customAnimation } from "../../../../components/UI/global/css.styles";

interface IProps {
  id: string;
}

export const ReportContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${customAnimation}
`;

export const ReportTitle = styled.h1`
  color: #2c3e50;
  font-size: 40px;
  width: 100%;
  heigth: 100%;
  margin: 0;
  padding: 50px 0 80px 0;
  line-height: 60px 50px;
  text-align: center;
  background: linear-gradient(to top, #ffefba, #ffffff);
`;

export const ReportSubtitle = styled.h2`
  font-size: 24px;
  text-align: center;
  word-break: all;
`;

export const GraphContainer = styled.div`
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  background-color: white;
  padding: 1rem;
  text-align: center;
  width: fit-content;
  height: fit-content;
  margin: 0 50px;
  animation: fadein 1s;
`;

/* 리포트 전체를 묶는 란, id 에 따라 
짝수번째는 왼쪽 정렬, 홀수는 오른쪽으로 정렬합니다.*/
export const ReportSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  ${({ id }: IProps) =>
    Number(id) % 2 === 0
      ? css`
          background: linear-gradient(to bottom, #ffefba, #ffffff);
        `
      : css`
          background: linear-gradient(to top, #ffefba, #ffffff);
          flex-direction: row-reverse;
        `}
`;

/* 버튼들을 flex 레이아웃 지정 */
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const NextButton = styled.button`
  background-color: white;
  margin: 40px auto;
  margin-top: 0;
  padding: 5px 20px;
  width: 200px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  postition: absolute;
  box-sizing: border-box;

  + button {
    margin-left: 20px;
  }

  :hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;
