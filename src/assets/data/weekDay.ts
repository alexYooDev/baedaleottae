type DayObj = {
  [index: string]: string;
};

/* mapped typing 필요 */
const data = new Date();

const DAYS: DayObj = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
};

export const weekDay: string = DAYS[data.getDay()];
export const hour: number = data.getHours();
