import styled, { css } from 'styled-components';

interface Props {
  url?: string;
  layout?: number;
}

export const DeliveryShopListTitle = styled.h1`
  text-align: center;
  margin: 10px 0 20px 0px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ToMainPageButton = styled.button`
  background-color: white;
  width: 80px;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  box-sizing: border-box;
  padding: 0;
  display: absolute;
  margin: 10px 8px 0 0;
  + button {
    margin: 10px 120px 0 0;
  }

  :hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;

export const CategoryIndicator = styled.h2``;

export const CategoryNameContainer = styled.span``;

export const LoaderContainer = styled.div`
  margin: auto;
`;

export const ShopListContainer = styled.div<Props>`
  display: grid;
  margin: 30px 80px;
  ${({ layout }: Props) =>
    layout === 1
      ? css`
          display: block;
          margin: 120px auto;
          width: fit-content;
        `
      : layout === 2
      ? css`
          grid-template-columns: 1fr 1fr;
        `
      : Number(layout) % 2 !== 0 && Number(layout) % 3 === 0
      ? css`
          grid-template-columns: 1fr 1fr 1fr;
        `
      : css`
          grid-template-columns: 1fr 1fr 1fr 1fr;
        `}
  place-items: center;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
`;

export const ShopTitleContainer = styled.p`
  height: fit-content;
  font-size: 18px;
  text-align: center;
  border-radius: 6px 6px 0 0;
`;
export const ShopDescContainer = styled.p`
  height: fit-content;
  margin: 10px;
  display: none;
  text-align: left;
  font-size: 13px;
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const DescItem = styled.p``;

export const DescName = styled.span`
  font-weight: bold;
`;

export const ShopImgContainer = styled.div<Props>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 6px;

  ${({ url }: Props) =>
    css`
      background-image: url(https://www.yogiyo.co.kr/${url});
    `};
  &:hover {
    opacity: 0.85;
  }
`;

export const ShopContainer = styled.div`
  height: 20rem;
  width: 16rem;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  border-radius: 6px;

  &:hover {
    opacity: 0.85;
    transition: all 200ms ease;
    cursor: pointer;
    transform: scale(1.2);
    box-shadow: 0 4px 16px rgb(0 0 0 / 26%);
    background-color: white;
  }

  &:hover ${ShopDescContainer} {
    display: block;
  }

  &: hover ${ShopTitleContainer} {
    margin: 8px 0;
    font-weight: bold;
  }
`;

export const SortButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const SortButton = styled.button`
  background-color: white;
  width: 80px;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  box-sizing: border-box;
  padding: 0;
  display: absolute;
  margin: 10px 8px 0 0;
  + button {
    margin: 10px 120px 0 0;
  }

  :hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;

export const Threshold = styled.div``;
