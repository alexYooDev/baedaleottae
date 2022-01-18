import { atom, selector } from 'recoil';
import axios from 'axios';
import { USER_LOCATION_URL } from '../assets/data/requestUrls';

const cors = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const selectedDeliveryCategory = atom({
  key: 'selectedDeliveryCategory',
  default: [],
});

export const selectedEatOutCategory = atom({
  key: 'selectedEatOutCategory',
  default: [],
});

export const itemsPerPage = atom({
  key: 'itemsPerPage',
  default: 5,
});

export const userLocation = atom({
  key: 'userLocation',
  default: {},
});

export const userGu = atom({
  key: 'userGu',
  default: '',
});

export const RegionName = atom({
  key: 'regionName',
  default: '',
});

export const CoronicNumberByGu = atom({
  key: 'coronicNum',
  default: [],
});

export const ThreatScore = atom({
  key: 'threatScore',
  default: '',
});

export const ThreatScoreDetail = atom({
  key: 'threatScoreDetail',
  default: [],
});

export const fetchUserDistrict = selector({
  key: 'gu',
  get: async ({ get }) => {
    const userGPS = get(userLocation);
    try {
      const { data } = await cors.post(USER_LOCATION_URL, userGPS);
      return data.region;
    } catch (error) {
      console.log(error);
    }
  },
});
