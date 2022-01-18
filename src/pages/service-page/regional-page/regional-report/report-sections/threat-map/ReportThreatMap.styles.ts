import styled, { css } from 'styled-components';

interface Props {
  addOnOpen?: boolean;
  imgUrl?: string;
}

export const DescriptionSection = styled.section`
  margin-bottom: 5%;
  display: flex;
  align-items: center;
`;

export const AddOnButton = styled.button`
  background-color: white;
  width: 248px;
  height: 64px;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  postition: absolute;
  box-sizing: border-box;
  padding: 0;
  margin: 20px 0;
  :hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;

export const GraphContainer = styled.div`
  text-align: center;
  border-radius: 6px;
  background-color: white;
  height: -moz-fit-content;
  width: 34.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddOn = styled.div<Props>`
  display: none;
  background-color: white;
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  text-align: center;
  width: 70rem;
  height: 48rem;
  z-index: 10;
  position: fixed;
  top: 5vh;
  left: calc(50%- 50rem);
  ${({ addOnOpen }: Props) =>
    addOnOpen &&
    css`
      display: block;
    `}
`;

export const AddOnCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 0;
  border: none;
  background: none;
  font-size: 25px;
  cursor: pointer;
`;

export const AddOnTitle = styled.h2`
  font-size: 20px;
`;

export const AddOnDesc = styled.p`
  word-break: keep-all;
`;

export const AddOnName = styled.span`
  font-size: bold;
`;

export const GradeSection = styled.section``;

export const GradeList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const GradeListItem = styled.li``;

export const RateDesc = styled.p`
  text-align: center;
  font-size: 20px;
`;

export const ContentDivider = styled.hr`
  font-size: 2px;
`;

export const ElementDescSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const RateSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddOnGraphContainer = styled.div<Props>`
  height: 270px;
  width: 420px;
  margin-top: 0;
  ${({ imgUrl }: Props) => css`
    background-image: url(${imgUrl});
  `}
  background-size: cover;
  background-position: center;
`;

export const ReportTitle = styled.h1`
  font-size: 40px;
  text-align: center;
`;

export const ReportSubtitle = styled.div`
  font-size: 24px;
  text-align: center;
  margin-left: 40px;
  word-break: all;
`;

export const ReportDesc = styled.p``;
