export const riskScoreParser = (score: number) => {
  if (score < 30) {
    return '[안전]: "완전 외식 분위기"';
  } else if (score < 60) {
    return '[보통]: "좀 사리는 게 좋지 않겠어?"';
  } else {
    return '[위험]: "이불 밖은 위험해"';
  }
};
