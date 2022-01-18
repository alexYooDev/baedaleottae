export const formatRating = (rating: number) => {
  return '🌟'.repeat(rating);
};

export const formatPrice = (price: number) =>
  String(price).replace(/^(\d{0,2})(\d{2,4})$/, `$1,$2`);

export const formatTime = (open: string, close: string) => {
  return `${
    open[0] === '0' ? '오전 ' + open.slice(0, 2) : '오후 ' + open.slice(0, 2)
  }시 ~ ${
    close[0] === '0' ? '오전 ' + close.slice(0, 2) : '오후 ' + close.slice(0, 2)
  }시`;
};

export const formatPhoneNumber = (phoneNum: number) =>
  String(phoneNum).replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

export const formatEatOutWeekdayHour = (hour: string) => {
  return hour.slice(0, 18);
};

export const formatEatOutWeekendHour = (hour: string) => {
  if (hour.slice(19, 38) === '') {
    return '';
  } else {
    return hour.slice(19, 38);
  }
};
