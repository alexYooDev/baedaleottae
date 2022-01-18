import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage.component';
import ServiceStartPage from './pages/service-page/start-page/ServiceStartPage.component';
import TeamHome from './pages/home-page/team-page/TeamPage.component';
import RegionalDeliveryShopsPage from './pages/service-page/regional-page/regional-shops/regional-delivery/delivery-shops/RegionalDeliveryShopsPage.component';
import RegionalEatOutShopsPage from './pages/service-page/regional-page/regional-shops/regional-eatout/eatout-shops/RegionalEatOutShopsPage.component';
import RegionalReportPage from './pages/service-page/regional-page/regional-report/RegionalReportPage.components';
import RegionalDeliveryCategoryPage from './pages/service-page/regional-page/regional-shops/regional-delivery/regional-delivery-category/RegionalDeliveryCategoryPage.component';
import RegionalEatOutCategoryPage from './pages/service-page/regional-page/regional-shops/regional-eatout/regional-eatout-category/RegionalEatOutCategory.component';
import Error404 from './components/UI/error/404.error';
import Error500 from './components/UI/error/500.error';
import ConfirmPage from './pages/service-page/start-page/ConfirmPage.component';
import GlobalStyles from './components/UI/global/globalStyles';
import Loading from './components/UI/loading/Loading.component';
import { RecoilRoot } from 'recoil';

const App: React.FC = () => {
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<Loading />}>
          <GlobalStyles />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/service' element={<ServiceStartPage />} />
            <Route path='/service/confirm' element={<ConfirmPage />} />
            <Route
              path='/service/regional/report'
              element={<RegionalReportPage />}
            />
            <Route
              path='/service/regional/delivery-categories'
              element={<RegionalDeliveryCategoryPage />}
            />
            <Route
              path='/service/regional/delivery-shop-list'
              element={<RegionalDeliveryShopsPage />}
            />
            <Route
              path='/service/regional/eatout-categories'
              element={<RegionalEatOutCategoryPage />}
            />
            <Route
              path='/service/regional/eatout-shop-list'
              element={<RegionalEatOutShopsPage />}
            />
            <Route path='/team' element={<TeamHome />} />
            <Route path='/*' element={<Error404 />} />
            <Route path='/500-error' element={<Error500 />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </>
  );
};

export default App;
