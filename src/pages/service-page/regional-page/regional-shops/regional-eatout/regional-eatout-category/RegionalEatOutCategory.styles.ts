import styled, { css } from 'styled-components';

interface Props {
  selected?: number;
  imgUrl?: string;
}

export const CategoryTemplate = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to top, #ffefba, #ffffff);
  height: 100vh;
`;

export const CategoryListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  margin: 0 auto;
  background-color: white;
`;

export const CategoryContainer = styled.div`
  ${({ imgUrl }: Props) =>
    css`
      background-image: url(${imgUrl});
    `}
  background-size: cover;
  background-position: center;
  height: 200px;
  width: 200px;
  margin: 10px;
  border-radius: 6px;
  cursor: pointer;
  opacity: 0.85;

  &:hover {
    box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
    background-color: #88aed0;
    opacity: 1;
    transition: 200ms ease;
    transform: scale(1.03);
  }
`;

export const CategoryTitle = styled.h3`
  background-color: white;
  color: black;
  margin-top: 0;
  text-align: center;
  border-radius: 6px 6px 0 0;
`;

export const PageTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

export const OptionsInstruction = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 10px auto;
`;

export const SelectedOptionsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0;
  text-align: center;
`;

export const SelectedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  height: 120px;
  width: 240px;
  margin: 20px auto;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
`;

export const PlaceHolder = styled.p`
  display: block;
  margin: auto;
  font-weight: bold;
  color: grey;
  ${({ selected }: Props) =>
    selected &&
    css`
      display: none;
    `}
`;

export const SelectedCategory = styled.div`
  display: inline-block;
  ${({ imgUrl }: Props) =>
    css`
      background-image: url(${imgUrl});
    `}
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  height: 100px;
  width: 100px;
  margin: 5px 10px;
  cursor: pointer;
  opacity: 0.85;

  &:hover {
    box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
    transition: 200ms ease;
    transform: scale(1.03);
    opacity: 1;
  }
`;

export const SelectedTitle = styled.h3`
  background-color: white;
  color: black;
  font-size: 2px;
  margin: 0;
  border-radius: 3px 3px 0 0;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  margin: 0 auto;
`;

export const ToMainButton = styled.button`
  background-color: white;
  width: 120px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  box-sizing: border-box;
  padding: 0;
  &:hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;

export const NextButton = styled.button`
  background-color: white;
  width: 120px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  box-sizing: border-box;
  padding: 0;
  &:hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;
