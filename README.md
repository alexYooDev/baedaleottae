# BaeDalEoTae(배달어때)
- This service aims to provide COVID-19 danger points according to the users' current location in Seoul, and recommend either food delivery venues or full eat-out restaurant. <br/> 서울시에서 사용자가 위치한 자치구의 코로나 확진자 데이터와 위험도(자체계산)을 알려주고, 이에따른 음식점을 추천해 주는 서비스 입니다!

#  Project Structure (프로젝트 구성 안내)

## 1. Project Introduction (프로젝트 소개)

    - Model for calculation of danger point district in Seoul (서울시 자치구별 코로나 위험도 계산 모델)
      * Prophet
      
      Provides
      - Seoul's COVID-19 related data - updates daliy (서울시 코로나 데이터 - 매일 업데이트)
      - Seoul residents data (서울 생활 인구 데이터)
      - Public facilities list by district (구별 대중이용시설 목록)
      - Average Age range of the heads of family and number of family members by district (가구주의 연령 및 가구원수별 가구(일반가구) - 시군구)
      - Vaccination rate data(백신 데이터)
      - Types of delivery food by district/by days in a week (지역-요일별 **배달 품목정보**)

  - **기술 스택**
    - FE
      * React(Main Library), TypeScript(Language), Recoil(State management), Styled-components(Styling)
    - BE
      * Flask, SQLAlchemy, MariaDB, Sentry, Gunicorn, Nginx
    - DA
      * Python, Jupyter

  - **사용된 라이브러리**
    - FE
      * axios(API communication), lottie-web(Loading spinner and animation), plotly.js(Data visualization), React Router Dom(Router), React Recoil(State management)
    - BE
      * APScheduler, haversine, GoogleMapsAPI, Seoul city open data source: daily number of infactants by district(서울시공공데이터 코로나 자치구별 일일 확진자) API, xmltodict, pandas, csv, logging, flask-cors, pymysql, werkzeug.exceptions
    - DA
      * Pandas, json, datetime, plotly, prophet

## 2. Aim (프로젝트 목표)
  
  - Intent of this project (프로젝트 아이디어 동기)

    * As the number of people test positive are soaring in Seoul, and demand for deliver food is at its high, we wanted to create a service that aids user to check danger points in the city and get recommedation of food venues, either deliver or eat-out places. <br/><br/> 서울시 코로나 확진자 수가 급격히 늘어나고, 동시에 배달음식에 대한 수요가 많아짐에 따라, 인공지능 기술을 통해 배달음식을 시키는 지점이 속한 자치구의 코로나 위험도 정도를 한눈으로 파악하고 동시에 주변 음식점들의 정보를 손쉽게 알아볼수있는 서비스
  

  - Problems to solve(문제를 해결하기 위한 특정 질문 명시)

    * How rampant COVID-19 is in my neighborhood? (현재 내가 있는 지역구의 코로나 위험도는 얼마인가?)
    * Then what do I have to get for a meal? Any good place suggestions? (내 주변 맛집은 어디일까?)


  - Problems that AI tech can solve (인공지능을 통해 해결하려는 문제를 구체적으로 작성)
    * Using the Prophet model, we could predict the estimated increase or decrease of COVID-19 cases and utilize the data for threat rate calculation (Prophet 모델을 통해 코로나의 증감 예측치를 계산하여 코로나 위험도 점수에 포함)
## 3. Project Functionality (프로젝트 기능 설명)

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
