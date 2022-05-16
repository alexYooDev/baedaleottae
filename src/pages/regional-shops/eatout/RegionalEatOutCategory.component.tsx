import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { eatoutCategories } from '../../../assets/data/eatoutCategories';
import Modal from '../../../components/UI/modal/Modal.component';
import BackDrop from '../../../components/UI/BackDrop/BackDrop.component';
import { EATOUT_IMAGES } from '../../../assets/data/imgMapper';
import { selectedEatOutCategory } from '../../../store/store';

import styled, { css } from 'styled-components';

type Props = {
  selected?: number;
  imgUrl?: string;
};

const RegionalDeliveryCategoryPage: React.FC = () => {
  const navigate = useNavigate();
  const [categoryStored, setCategoryStored] = useRecoilState<any>(
    selectedEatOutCategory
  );
  const [isModalClosed, setIsModalClosed] = useState(true);
  const [message, setMessage] = useState('');

  const handleToShopList = () => {
    navigate('/service/regional/eatout-shop-list');
  };

  const handleToMain = () => {
    navigate('/');
  };

  const handleCloseModal = () => {
    setIsModalClosed((prev) => !prev);
  };

  const handleToggleCategory = (event: any) => {
    if (
      categoryStored.length >= 2 &&
      !categoryStored.includes(event.target.textContent)
    ) {
      setMessage('카테고리 선택은 2개까지만 가능합니다!');
      setIsModalClosed((prev) => !prev);
    }
    if (categoryStored.includes(event.target.textContent)) {
      setCategoryStored((prev: any) =>
        prev.filter((cat: string) => cat !== event.target.textContent)
      );
    } else if (categoryStored.length < 2) {
      setCategoryStored((prev: any) => [...prev, event.target.textContent]);
    }
  };

  return (
    <>
      {!isModalClosed && (
        <Modal message={message} onCancel={handleCloseModal} />
      )}
      {!isModalClosed && <BackDrop onCancel={handleCloseModal} />}
      <CategoryTemplate>
        <SelectedOptionsTitle>외식점 메뉴 선택</SelectedOptionsTitle>
        <ButtonsContainer>
          <ToMainButton onClick={handleToMain}>메인으로</ToMainButton>
          <SelectedContainer>
            <PlaceHolder selected={categoryStored.length}>
              카테고리를 선택해주세요.
            </PlaceHolder>
            {categoryStored.map((item: any) => (
              <SelectedCategory
                onClick={handleToggleCategory}
                imgUrl={EATOUT_IMAGES[item]}
                key={item.restaurant_id}
              >
                <SelectedTitle>{item}</SelectedTitle>
              </SelectedCategory>
            ))}
          </SelectedContainer>
          <NextButton
            onClick={handleToShopList}
            disabled={categoryStored.length < 1}
          >
            추천 가게
          </NextButton>
        </ButtonsContainer>
        <CategoryListContainer>
          {eatoutCategories.map((cat: string, idx: number) => (
            <CategoryContainer
              key={idx}
              onClick={handleToggleCategory}
              imgUrl={EATOUT_IMAGES[cat]}
            >
              <CategoryTitle>{cat}</CategoryTitle>
            </CategoryContainer>
          ))}
        </CategoryListContainer>
      </CategoryTemplate>
    </>
  );
};

const CategoryTemplate = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to top, #ffefba, #ffffff);
  height: 100vh;
`;

const CategoryListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  margin: 0 auto;
  background-color: white;
`;

const CategoryContainer = styled.div`
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

const CategoryTitle = styled.h3`
  background-color: white;
  color: black;
  margin-top: 0;
  text-align: center;
  border-radius: 6px 6px 0 0;
`;

const PageTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

const OptionsInstruction = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 10px auto;
`;

const SelectedOptionsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0;
  text-align: center;
`;

const SelectedContainer = styled.div`
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

const PlaceHolder = styled.p`
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

const SelectedCategory = styled.div`
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

const SelectedTitle = styled.h3`
  background-color: white;
  color: black;
  font-size: 2px;
  margin: 0;
  border-radius: 3px 3px 0 0;
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  margin: 0 auto;
`;

const ToMainButton = styled.button`
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

const NextButton = styled.button`
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

export default RegionalDeliveryCategoryPage;
