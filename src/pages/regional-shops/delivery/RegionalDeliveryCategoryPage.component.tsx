import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import styled, { css } from 'styled-components';
import { weekDay, hour } from '../../../assets/data/weekDay';
import { deliveryCategories } from '../../../assets/data/deliveryCategories';
import Modal from '../../../components/UI/modal/Modal.component';
import BackDrop from '../../../components/UI/BackDrop/BackDrop.component';
import { DELIVERY_IMAGES } from '../../../assets/data/imgMapper';
import { selectedDeliveryCategory } from '../../../store/store';
import { CATEGORY_TOP_5 } from '../../../assets/data/requestUrls';

type StyleProps = {
  selected?: number;
  imgUrl?: string;
};

const RegionalDeliveryCategoryPage = () => {
  const navigate = useNavigate();

  const [topCategory, setTopCategory] = useState('');

  /* 선택한 카테고리를 담는 recoil 상태값 */
  const [categoryStored, setCategoryStored] = useRecoilState<any>(
    selectedDeliveryCategory
  );

  const [isModalClosed, setIsModalClosed] = useState(true);

  /* 모달 경고 메시지를 설정 */
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchTopCategory = async () => {
      const response = await axios.get(CATEGORY_TOP_5);
      setTopCategory(response.data);
    };
    fetchTopCategory();
  }, []);

  /* shopList 로 이동 */
  const handleToShopList = () => {
    navigate('/service/regional/delivery-shop-list');
  };

  /* 모달 여닫기용 플래그 상태값 */
  const handleCloseModal = () => {
    setIsModalClosed((prev) => !prev);
  };

  const handleToMain = () => {
    navigate('/');
  };

  /* 카테고리 모달 경고창 여닫기 함수 */
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
        prev.filter((cat: any) => cat !== event.target.textContent)
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
        <PageTitle>
          오늘은 {weekDay}, 지금 {hour}시 인기 메뉴는:{' '}
          <TopCategories>{topCategory}</TopCategories>
          <SelectedOptionsTitle>선택 메뉴</SelectedOptionsTitle>
          <OptionsInstruction>
            메뉴는 <HighLight>1개 이상</HighLight> 선택해주세요.
          </OptionsInstruction>
        </PageTitle>
        <ButtonsContainer>
          <ToMainButton onClick={handleToMain}>메인으로</ToMainButton>
          <SelectedContainer>
            <PlaceHolder selected={categoryStored.length}>
              카테고리를 선택해주세요.
            </PlaceHolder>
            {categoryStored.map((cat: string, idx: number) => (
              <SelectedCategory
                key={idx}
                onClick={handleToggleCategory}
                imgUrl={DELIVERY_IMAGES[cat]}
              >
                <SelectedTitle>{cat}</SelectedTitle>
              </SelectedCategory>
            ))}
          </SelectedContainer>
          <NextButton
            onClick={handleToShopList}
            disabled={categoryStored.length < 1}
          >
            추천 가게 보기
          </NextButton>
        </ButtonsContainer>
        <CategoryListContainer>
          {deliveryCategories.map((cat, idx) => (
            <CategoryContainer
              onClick={handleToggleCategory}
              imgUrl={DELIVERY_IMAGES[cat]}
              key={idx}
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
  height: 170vh;
`;

const CategoryListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  place-items: center;
  border-radius: 6px;
  width: fit-content;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  margin: 0 auto;
  background-color: white;
`;

const CategoryContainer = styled.div`
  ${({ imgUrl }: StyleProps) =>
    css`
      background-image: url(${imgUrl});
    `}
  opacity: 0.85;
  background-size: cover;
  background-position: center;
  height: 200px;
  width: 200px;
  margin: 10px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
    transition: 200ms ease;
    transform: scale(1.03);
    opacity: 1;
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

const TopCategories = styled.span`
  color: darkred;
`;

const HighLight = styled.span`
  color: darkred;
`;
const SelectedOptionsTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const OptionsInstruction = styled.p`
  font-size: 1rem;
  margin: 0;
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
  ${({ selected }: StyleProps) =>
    selected &&
    css`
      display: none;
    `}
`;

const SelectedCategory = styled.div`
  display: inline-block;
  ${({ imgUrl }: StyleProps) =>
    css`
      background-image: url(${imgUrl});
    `}
  opacity: 0.85;
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  height: 100px;
  width: 100px;
  margin: 5px 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
    transform: scale(1.03);
    transition: 200ms ease;
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
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
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
  :hover {
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
  :hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;

export default RegionalDeliveryCategoryPage;
