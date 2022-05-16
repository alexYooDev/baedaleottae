import axios from 'axios';
import React, { Suspense, useEffect, useState, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

import styled, { css } from 'styled-components';

import BackDrop from '../../../components/UI/BackDrop/BackDrop.component';
import Loading from '../../../components/UI/loading/Loading.component';
import { selectedEatOutCategory, userLocation } from '../../../store/store';

import {
  formatEatOutWeekdayHour,
  formatEatOutWeekendHour,
} from '../../../functions/formatter';

import { EAT_OUT_LIST_URL } from '../../../assets/data/requestUrls';

type StyleProps = {
  url?: string;
  layout?: number;
};

const RegionalEatOutShopsPage: React.FC = () => {
  const [eatOutShopList, setEatOutShopList] = useState<any[]>([]);

  const [selectShop, setSelectShop] = useState('');
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const chosenEatOutCategories = useRecoilValue(selectedEatOutCategory);
  const userDistrict = useRecoilValue(userLocation);

  const [detailViewHeight, setDetailViewHeight] = useState(0);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const cardHeightRef = useRef<any>();

  const RegionalEatOutShopDetail = React.lazy(
    () => import('./RegionalEatOutShopDetail.component')
  );

  /* 좌표를 딤아 넘겨 줄 params */
  const params = userDistrict;

  const cors = axios.create({
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });

  useEffect(() => {
    const fetchRestaurants = async () => {
      const res = await cors.post(EAT_OUT_LIST_URL, params);
      const data = res.data;
      const filteredData = await data.filter(
        (item: any) =>
          item.category === chosenEatOutCategories[0] ||
          item.category === chosenEatOutCategories[1]
      );
      setEatOutShopList(filteredData);
    };
    fetchRestaurants();
  }, []);

  const lastIdx = currentPage * postPerPage;

  const limitNumOfItems = (items: any[]) => {
    let currentItems;
    currentItems = items.slice(0, lastIdx);
    return currentItems;
  };

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCurrentPage((prev) => prev + 1);
  };

  const onIntersect = async ([entry]: any, observer: any): Promise<any> => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      setIsLoaded(false);
      observer.observe(entry.target);
    }
  };
  useEffect(() => {
    let observer: any;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  const handleToEatOutDetail = (event: any) => {
    setSelectShop(event.target.id);
    setDetailViewHeight(cardHeightRef.current.scrollHeight);
    handleToggleDetail();
  };

  const handleToggleDetail = () => {
    setIsDetailOpen((prev) => !prev);
  };

  const handleToMain = () => {
    navigate('/');
  };

  const handleClickSort = (event: any) => {
    if (event.target.id === 'review') {
      setEatOutShopList((prev) => [
        ...prev.sort((a, b) => b.rating - a.rating),
      ]);
    } else if (event.target.id === 'time') {
      setEatOutShopList((prev) => [
        ...prev.sort(
          (a, b) => parseInt(b.hour.slice(-5)) - parseInt(a.hour.slice(-5))
        ),
      ]);
    }
  };

  return (
    <>
      {!eatOutShopList.length ? (
        <Loading />
      ) : (
        <>
          <EatoutShopListTitle>
            내 주변 외식 음식점 추천 리스트
          </EatoutShopListTitle>
          <HeadingContainer>
            <ToMainPageButton onClick={handleToMain}>메인으로</ToMainPageButton>
            <CategoryIndicator>
              선택하신{' '}
              {chosenEatOutCategories.map((item: any) => (
                <CategoryNameContainer key={item.categories}>
                  [{item}]
                </CategoryNameContainer>
              ))}
              에 대한 추천 결과입니다.
            </CategoryIndicator>
            <SortButtonContainer>
              <SortButton id='time' onClick={handleClickSort}>
                마감시간순
              </SortButton>
              <SortButton id='review' onClick={handleClickSort}>
                높은평점순
              </SortButton>
            </SortButtonContainer>
          </HeadingContainer>
          <ShopListContainer>
            {isDetailOpen && <BackDrop onCancel={handleToggleDetail} />}
            {isDetailOpen && (
              <Suspense fallback={<Loading />}>
                <RegionalEatOutShopDetail
                  shopData={eatOutShopList}
                  selected={selectShop}
                  onCancel={handleToggleDetail}
                  viewHeight={detailViewHeight}
                />
              </Suspense>
            )}
            {limitNumOfItems(eatOutShopList).map((item: any, idx: number) => (
              <ShopContainer
                key={idx}
                onClick={handleToEatOutDetail}
                id={item.id}
                ref={cardHeightRef}
              >
                <ShopImgContainer id={item.id} url={item.img_url_3} />
                <ShopTitleContainer id={item.id}>
                  {item.name}
                </ShopTitleContainer>
                <ShopDescContainer id={item.id}>
                  <ShopDescContent>
                    <DescName>카테고리</DescName>: {item.category}
                  </ShopDescContent>
                  <ShopDescContent>
                    <DescName>영업시간(주중)</DescName>:{' '}
                    {formatEatOutWeekdayHour(item.hour)}
                  </ShopDescContent>
                  <ShopDescContent>
                    {formatEatOutWeekendHour(item.hour) === '' ? (
                      ''
                    ) : (
                      <ShopDescContent>
                        <DescName>영업시간(주말)</DescName>:{' '}
                        {formatEatOutWeekendHour(item.hour)}
                      </ShopDescContent>
                    )}
                  </ShopDescContent>
                  <ShopDescContent>
                    <DescName>평균평점</DescName>:{' '}
                    {item.rating === 0 ? '평점 없음' : `${item.rating}점`}
                  </ShopDescContent>

                  <ShopDescContent>
                    <DescName>주소</DescName>: {item.address}
                  </ShopDescContent>
                </ShopDescContainer>
              </ShopContainer>
            ))}
          </ShopListContainer>
          <LoaderContainer>
            <Threshold ref={setTarget}>
              {isLoaded && eatOutShopList.length >= lastIdx ? (
                <TailSpin
                  color='#00BFFF'
                  height='80'
                  width='80'
                  arialLabel='loading'
                />
              ) : null}
            </Threshold>
          </LoaderContainer>
        </>
      )}
    </>
  );
};

const EatoutShopListTitle = styled.h1`
  text-align: center;
  margin: 10px 0 20px 0px;
`;

const LoaderContainer = styled.div`
  margin: auto;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ToMainPageButton = styled.button`
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

const CategoryIndicator = styled.h2``;

const CategoryNameContainer = styled.span``;

const ShopListContainer = styled.div<StyleProps>`
  display: grid;
  ${({ layout }: StyleProps) =>
    layout === 1
      ? css`
          grid-template-columns: 1fr;
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
  margin: 30px 80px;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
`;

const ShopTitleContainer = styled.p`
  height: fit-content;
  font-size: 18px;
  text-align: center;
  border-radius: 6px 6px 0 0;
`;
const ShopDescContainer = styled.p`
  height: fit-content;
  margin: 10px;
  display: none;
  text-align: left;
  font-size: 13px;

  > li {
    list-style: none;
  }
`;

const ShopDescContent = styled.p``;

const DescName = styled.span`
  font-weight: bold;
`;

const ShopImgContainer = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 6px;

  ${({ url }: StyleProps) =>
    css`
      background-image: url(${url});
    `};

  &:hover {
    opacity: 0.85;
  }
`;

const ShopContainer = styled.div`
  height: 20rem;
  width: 16rem;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  border-radius: 6px;

  &:hover {
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

const SortButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const SortButton = styled.button`
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

const Threshold = styled.div`
  margin: 0 auto;
`;

export default RegionalEatOutShopsPage;
