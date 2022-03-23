# 배달어때
- 서울시에서 사용자가 위치한 자치구의 코로나 확진자 데이터와 위험도(자체계산)을 알려주고, 이에따른 음식점을 추천해 주는 서비스 입니다!

# 프로젝트 구성 안내

## 1. 프로젝트 소개

**어떠한 인공지능 모델과 알고리즘을 사용했는지에 대한 설명과 엔드유저에게 보이는 웹서비스에 대한 소개**

  - 사용하려는 인공지능 모델과 알고리즘을 명시

    - 서울시 자치구별 코로나 위험도 계산 모델
      * Prophet

  - 인공지능에 사용하려는 데이터를 명시, 이에 대한 설명

      - 서울시 코로나 데이터 - 매일 업데이트
      - 서울 생활 인구 데이터
      - 구별 다중이용시설 목록
      - 가구주의 연령 및 가구원수별 가구(일반가구) - 시군구
      - 백신 데이터
      - 지역-요일별 **배달 품목정보**

  - **기술 스택**
    - FE
      * React(프레임워크), TypeScript(언어), Styled-components(스타일)
    - BE
      * Flask, SQLAlchemy, MariaDB, Sentry, Gunicorn, Nginx
    - DA
      * Python, Jupyter

  - **사용된 라이브러리**
    - FE
      * axios(API 통신), lottie-web(로딩 및 애니메이션), plotly.js(데이터 시각화), React Router Dom(라우팅), React Recoil(상태관리)
    - BE
      * APScheduler, haversine, GoogleMapsAPI, 서울시공공데이터 코로나 자치구별 일일 확진자 API, xmltodict, pandas, csv, logging, flask-cors, pymysql, werkzeug.exceptions
    - DA
      * Pandas, json, datetime, plotly, prophet

## 2. 프로젝트 목표

**웹서비스의 해결 과제와 인공지능으로 해결하기 위한 방안 논의 (50자 이상)**
  
  - 프로젝트 아이디어 동기

    * 서울시 코로나 확진자 수가 급격히 늘어나고, 동시에 배달음식에 대한 수요가 많아짐에 따라, 인공지능 기술을 통해 배달음식을 시키는 지점이 속한 자치구의 코로나 위험도 정도를 한눈으로 파악하고 동시에 주변 음식점들의 정보를 손쉽게 알아볼수있는 서비스
  

  - 문제를 해결하기 위한 특정 질문 명시

    * 현재 내가 있는 지역구의 코로나 위험도는 얼마인가?
    * 내 주변 맛집은 어디일까?


  - 인공지능을 통해 해결하려는 문제를 구체적으로 작성
    * Prophet 모델을 통해 코로나의 증감 예측치를 계산하여 코로나 위험도 점수에 포함
## 3. 프로젝트 기능 설명

**웹서비스의 유용성, 편의성 및 시각화의 실용성에 대한 설명**
  
  - 주요 기능 (주된 활용성) 및 서브 기능
    
    * 현재 사용자가 위치한 서울시 내부 자치구의 코로나 위험도 정도와 주변 음식점에 대한 정보를 한눈에 파악할 수 있도록 함
    * 주변 음식점들의 리뷰 및 상세 정보를 평점순 등으로 필터링 하여 볼 수 있음

  - 프로젝트만의 차별점, 기대 효과
    
    * 배달 음식을 시키기 이전, 사용자는 해당 지역의 위험도 파악을 위해 다른 매체를 따로 접근하고 배달음식점을 선택할 필요 없이, 하나의 웹 서비스에서 두가지 행동을 간편히 할 수 있게 되었음

## 4. 프로젝트 구성도

  - 와이어프레임/스토리보드 추가

    * Figma
      --> https://www.figma.com/file/QAyababpRtHmQzSR3tc4bb/%EB%B0%B0%EB%8B%AC-%EC%B6%94%EC%B2%9C-%EC%95%B1?node-id=0%3A1

## 5. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 윤상 | 팀장/백엔드 개발 |
| 최성민 | 팀원/백엔드 개발 |
| 유환익 | 팀원/프론트엔드 개발 |
| 강현희 | 팀원/데이터 분석 |
| 김수현 | 팀원/데이터 분석 |

## 6. FAQ
  - 코로나 위험도의 계산방식은 어떻게 되나요?
    * 최근 5일 간의 신규 코로나 확진자 (40점) + 3일 간의 코로나 증감 예측치 (30점) + 생활인구 점수 (10점) + 평균가구 점수 (15점) + 다중이용시설 분포 점수 (5점)
    * 생활인구, 평균가구, 다중이용시설 비율과 코로나 증감률간의 상관관계를 구해 점수별 가중치를 계산 하였습니다.
