import e from 'express';
import styled, { css } from 'styled-components';
import {
  pageDefault,
  customAnimation,
} from '../../components/UI/global/css.styles';

interface Props {
  position: number;
  toLeft?: boolean;
  toRight?: boolean;
  fadeIn?: boolean;
  aniLevitate?: boolean;
}

export const HomePageContainer = styled.div`
  ${pageDefault}
  ${customAnimation}
  background-image: linear-gradient(rgba(244, 255, 252, 0), rgb(238, 253, 250), rgb(235, 252, 248));
`;

export const ContentsContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 170px;
  margin: 0 10px 0 100px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const TitleContainer = styled.h1<Props>`
  font-size: 3rem;
  font-weight: unset;
  margin: 0;
  ${({ position }: Props) =>
    position - 200 <= 0 &&
    css`
      display: block;
      animation: pop-up 2s;
    `}
`;

export const SubtitleContainer = styled.h2<Props>`
  font-size: 2.5rem;
  font-weight: unset;
  margin: 14px 0;
  animation: ${({ aniLevitate }: Props) =>
    aniLevitate ? `fadein 2s` : 'none'};
`;

export const IntroductionTitle = styled.p<Props>`
  font-size: 2.5rem;
  font-weight: unset;
  margin: 14px 0;
  ${({ position }: Props) =>
    css`
      transform: translateY: ${-position}px;
    `}
`;

export const DescContainer = styled.span<Props>`
  position: relative;
  font-size: 2rem;
  font-weight: unset;
  animation: ${({ aniLevitate }: Props) =>
    aniLevitate ? `pop-up 1s ease-in-out` : 'none'};
`;

export const ToIntroButton = styled.button`
  background-color: white;
  margin-top: 54px;
  width: 248px;
  height: 64px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  postition: absolute;
  box-sizing: border-box;
  padding: 0;
  :hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;

export const StartButton = styled.button`
  background-color: white;
  margin-top: 54px;
  width: 248px;
  height: 64px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  postition: absolute;
  box-sizing: border-box;
  padding: 0;
  :hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;

export const RegIntroContainer = styled.div`
  ${pageDefault}
  background-color: #fffcf5;
`;

export const PrefIntroContainer = styled.div`
  backgroundcolor: yellow;
  ${pageDefault};
`;

export const TeamIntroContainer = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    rgb(235, 252, 248),
    rgb(238, 253, 250),
    rgba(244, 255, 252, 0)
  );
  ${pageDefault}
`;

export const TeamImage = styled.img`
  width: 100%;
`;

export const Notice = styled.p`
  color: darkred;
`;
