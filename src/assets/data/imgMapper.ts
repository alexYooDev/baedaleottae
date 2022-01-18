import pork_url from '../images/foodOptions/pork_feet.jpeg';
import night_food_url from '../images/foodOptions/night_food.jpeg';
import stew_url from '../images/foodOptions/stew.png';
import japanese_url from '../images/foodOptions/japanese.jpeg';
import chicken_url from '../images/foodOptions/fried_chicken.jpg';
import sushi_url from '../images/foodOptions/sushi.jpeg';
import snack_url from '../images/foodOptions/snack.jpeg';
import pizza_url from '../images/foodOptions/pizza.jpeg';
import dessert_url from '../images/foodOptions/dessert.jpeg';
import porridge_url from '../images/foodOptions/porridge.jpeg';
import asian_url from '../images/foodOptions/asian.png';
import burger_url from '../images/foodOptions/burger.jpeg';
import chinese_url from '../images/foodOptions/chinese.jpeg';
import korean_url from '../images/foodOptions/korean.jpeg';
import western_url from '../images/foodOptions/western.jpeg';
import alcohol_url from '../images/foodOptions/alcohol.jpeg';

interface imageUrl {
  [index: string]: string;
}

export const DELIVERY_IMAGES: imageUrl = {
  족발보쌈: pork_url,
  야식: night_food_url,
  찜탕: stew_url,
  일식돈까스: japanese_url,
  치킨: chicken_url,
  회초밥: sushi_url,
  한식: korean_url,
  분식: snack_url,
  피자양식: pizza_url,
  중식: chinese_url,
  카페디저트: dessert_url,
  도시락죽: porridge_url,
  아시안: asian_url,
  버거: burger_url,
};

export const EATOUT_IMAGES: imageUrl = {
  한식: korean_url,
  일식: sushi_url,
  중식: chinese_url,
  양식: western_url,
  세계음식: asian_url,
  카페: dessert_url,
  주점: alcohol_url,
};
