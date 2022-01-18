import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  CategoryTemplate,
  CategoryContainer,
  CategoryListContainer,
  CategoryTitle,
  PageTitle,
  SelectedContainer,
  SelectedCategory,
  SelectedTitle,
  SelectedOptionsTitle,
  PlaceHolder,
  ToMainButton,
  ButtonsContainer,
  TopCategories,
  OptionsInstruction,
  HighLight,
} from './RegionalDeliveryCategory.styles';

import { weekDay, hour } from '../../../../../../assets/data/weekDay';
import { deliveryCategories } from '../../../../../../assets/data/deliveryCategories';
import Modal from '../../../../../../components/UI/modal/Modal.component';
import BackDrop from '../../../../../../components/UI/backDrop/BackDrop.component';
import { NextButton } from './RegionalDeliveryCategory.styles';
import { DELIVERY_IMAGES } from '../../../../../../assets/data/imgMapper';
import { selectedDeliveryCategory } from '../../../../../../store/store';
import { CATEGORY_TOP_5 } from '../../../../../../assets/data/requestUrls';

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

export default RegionalDeliveryCategoryPage;
