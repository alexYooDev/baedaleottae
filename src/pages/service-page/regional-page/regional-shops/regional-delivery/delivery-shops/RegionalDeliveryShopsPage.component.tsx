import axios from 'axios';
import { useEffect, useState, useRef, MouseEvent } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import BackDrop from '../../../../../../components/UI/backDrop/BackDrop.component';
import Loading from '../../../../../../components/UI/loading/Loading.component';
import RegionalShopDetail from '../delivery-shops-detail/RegionalDeliveryShopDetail.component';

import {
  selectedDeliveryCategory,
  userLocation,
} from '../../../../../../store/store';

import {
  HeadingContainer,
  CategoryIndicator,
  CategoryNameContainer,
  ShopTitleContainer,
  ShopImgContainer,
  ShopDescContainer,
  ShopListContainer,
  SortButtonContainer,
  ShopContainer,
  SortButton,
  DeliveryShopListTitle,
  ToMainPageButton,
  DescItem,
  DescName,
  ListItem,
  Threshold,
  LoaderContainer,
} from './RegionalDeliveryShopsPage.styles';

import { FOOD_DELIVERY_LIST_URL } from '../../../../../../assets/data/requestUrls';
import { formatTime } from '../../../../../../functions/formatter';

const RegionalDeliveryShopsPage = () => {
  const chosenDeliveryCategories = useRecoilValue(selectedDeliveryCategory);
  const userDistrict = useRecoilValue(userLocation);
  const navigate = useNavigate();

  const params = userDistrict;

  /* 디테일 페이지 모달을 띄우기 위해 선택한 상점의 ID 저장 */
  const [selectShop, setSelectDeliveryShop] = useState('');

  /* 모든 배달 상점의 리스트를 담는다. */
  const [deliveryShopList, setDeliveryShopList] = useState<any>([]);

  /* 디테일 페이지 모달을 여닫기 위한 플래그 상태값 */
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  /* 모달을 띄울 위치를 조정하기 위해 view Height 를 지정 */
  const [detailViewHeight, setDetailViewHeight] = useState(0);

  /* 현재 페이지 넘버 상태값 */
  const [currentPage, setCurrentPage] = useState(1);

  /* 페이지 당 보여줄 게시물 수 지정: 8개 씩 */
  const [postPerPage, setPostPerPage] = useState(8);

  /* 페이지에 새로운 게시물 셋을 로드할 바닥 지점 */
  const [target, setTarget] = useState<HTMLDivElement | null>(null);

  /* 로딩 상태값 플래그로 지정 */
  const [isLoaded, setIsLoaded] = useState(false);

  /* CORS 규약 위반 에러 방지를 위한 헤더 */
  const cors = axios.create({
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });

  /* 카드의 높이를 특정하기 위한 ref 값 */
  const cardHeightRef = useRef<any>();

  /* 배달음식점 정보를 비동기적으로 POST 요청, params로 좌표를 넘김,
  에러 발생 시, 네트워크 에러라면 500, 그 외는 404 에러 페이지로 이동*/
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await cors.post(`${FOOD_DELIVERY_LIST_URL}`, params);
        const data = await res.data;

        const filteredData = await data.filter(
          (item: any) =>
            item.categories.includes(chosenDeliveryCategories[0]) ||
            item.categories.includes(chosenDeliveryCategories[1])
        );
        setDeliveryShopList(filteredData);
      } catch (error: any) {
        console.log(error);
        // if (error.message.includes('Network Error')) {
        //   navigate('/500-error');
        // } else {
        //   navigate('/404-error');
        // }
      }
    };
    fetchRestaurants();
  }, []);

  /* 무한 스크롤 페이징을 위한, 마지막 아이템 인덱스 선정 */
  const lastIdx = currentPage * postPerPage;

  /* 마지막 페이지에 따라 게시물의 수를 변경 */
  const limitNumOfItems = (items: any[]) => {
    let currentItems;
    currentItems = items.slice(0, lastIdx);
    return currentItems;
  };

  /* 페이지 넘기는 비동기 함수, 프로미스 응답 성공시,
   1500밀리 초 뒤 페이지를 넘긴다. 로딩 상태를 false로 전환*/
  const flipPage = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCurrentPage((prev) => prev + 1);
    setIsLoaded(false);
  };

  /* 게시물 로딩 threshold 넘기는 지 비동기 적으로 확인 (entry: 스크롤이 교차, observer: 지켜볼 옵저버)
  교차 시, 페이지를 넘긴다. 다음 threshold 타겟을 감시*/
  const onIntersect = async ([entry]: any, observer: any): Promise<any> => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await flipPage();
      observer.observe(entry.target);
    }
  };

  /* observer를 설정, 페이지를 나누는 타겟이 설정되면 지켜본다. target이 변경될 때마다 실행 */
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

  /* 배달 음식점 디테일 페이지 띄움*/
  const handleOpenDeliveryDetail = (event: MouseEvent | any) => {
    setDetailViewHeight(cardHeightRef.current.clientHeight);
    setSelectDeliveryShop(event.target.id);
    handleToggleDetail();
  };

  /* 메인 페이지로 이동 */
  const handleToMain = () => {
    navigate('/');
  };

  /* 디테일 페이지 토글 */
  const handleToggleDetail = () => {
    setIsDetailOpen((prev) => !prev);
  };

  /* 정렬 버튼: 리뷰 점수 순 혹은 배달 시간 순으로 정렬한다. */
  const handleClickSort = (event: any) => {
    if (event.target.id === 'review') {
      setDeliveryShopList((prev: any) => [
        ...prev.sort((a: any, b: any) => b.review_avg - a.review_avg),
      ]);
    } else if (event.target.id === 'time') {
      setDeliveryShopList((prev: any) => [
        ...prev.sort(
          (a: any, b: any) =>
            parseInt(a.estimated_delivery_time.slice(3, -1)) -
            parseInt(b.estimated_delivery_time.slice(3, -1))
        ),
      ]);
    }
  };

  return (
    <>
      {!deliveryShopList.length ? (
        <Loading />
      ) : (
        <>
          <DeliveryShopListTitle>
            내 주변 외식 음식점 추천 리스트
          </DeliveryShopListTitle>
          <HeadingContainer>
            <ToMainPageButton onClick={handleToMain}>메인으로</ToMainPageButton>
            <CategoryIndicator>
              선택하신{' '}
              {chosenDeliveryCategories.map((item: any) => (
                <CategoryNameContainer key={item.restaurant_id}>
                  [{item}]
                </CategoryNameContainer>
              ))}
              에 대한 추천 결과입니다.
            </CategoryIndicator>
            <SortButtonContainer>
              <SortButton id='time' onClick={handleClickSort}>
                빠른배달순
              </SortButton>
              <SortButton id='review' onClick={handleClickSort}>
                높은평점순
              </SortButton>
            </SortButtonContainer>
          </HeadingContainer>
          <ShopListContainer layout={deliveryShopList.length}>
            {isDetailOpen && <BackDrop onCancel={handleToggleDetail} />}
            {isDetailOpen && (
              <RegionalShopDetail
                shopData={deliveryShopList}
                selected={selectShop}
                onCancel={handleToggleDetail}
                viewHeight={detailViewHeight}
              />
            )}
            {limitNumOfItems(deliveryShopList).map((item, idx) => (
              <ShopContainer
                key={idx}
                onClick={handleOpenDeliveryDetail}
                id={item.restaurant_id}
                ref={cardHeightRef}
              >
                <ShopImgContainer id={item.restaurant_id} url={item.logo_url} />
                <ShopTitleContainer id={item.restaurant_id}>
                  {item.name}
                </ShopTitleContainer>
                <ShopDescContainer id={item.restaurant_id}>
                  <DescName>카테고리</DescName>:{' '}
                  {item.categories.map((cat: any) => (
                    <ListItem
                      key={`${cat.restaurant_id}${cat.name}`}
                      id={item.restaurant_id}
                    >
                      {cat}
                    </ListItem>
                  ))}
                  <DescItem>
                    <DescName>영업시간</DescName>:{' '}
                    {formatTime(item.begin, item.end)}시
                  </DescItem>
                  <DescItem>
                    <DescName>평균평점</DescName>:{' '}
                    {item.review_avg === 0
                      ? '평점 없음'
                      : `${item.review_avg}점`}
                  </DescItem>
                  <DescItem>배달 소요시간</DescItem>:{' '}
                  {item.estimated_delivery_time}
                </ShopDescContainer>
              </ShopContainer>
            ))}
          </ShopListContainer>
          <LoaderContainer>
            <Threshold ref={setTarget}>
              {isLoaded && deliveryShopList.length >= lastIdx ? (
                <TailSpin
                  height='80'
                  width='80'
                  color='grey'
                  arialLabel='loading...'
                ></TailSpin>
              ) : null}
            </Threshold>
          </LoaderContainer>
        </>
      )}
    </>
  );
};

export default RegionalDeliveryShopsPage;
