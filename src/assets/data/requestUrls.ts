const baseUrl = `${process.env.REACT_APP_BASE_URL}/api`;

export const USER_LOCATION_URL = `${baseUrl}/data/user_location`;

export const FOOD_DELIVERY_LIST_URL = `${baseUrl}/restaurants/near`;

export const FOOD_DELIVERY_REVIEW_URL = `${baseUrl}/review/`;

export const EAT_OUT_LIST_URL = `${baseUrl}/goout`;

export const EAT_OUT_REVIEW_URL = `${baseUrl}/goout/reviews/`;

export const VAC_GRAPH_URL = `${baseUrl}/data/vac`;

export const SEOUL_RISK_MAP_ALL_URL = `${baseUrl}/data/seoul_risk_map_all`;

export const SEOUL_RISK_MAP_URL = `${baseUrl}/data/seoul_risk_map?region=`;

export const RISK_RANK_GRAPH_URL = `${baseUrl}/data/risk_rank?region=`;

export const CONFIRMED_ALL_URL = `${baseUrl}/data/coronic_all`;

export const CONFIRMED_BY_GU_URL = `${baseUrl}/data/coronic_gu?region=`;

export const RISK_SCORE_URL = `${baseUrl}/data/risk_score?region=`;

export const RISK_SCORE_DETAIL_URL = `${baseUrl}/data/risk_score_detail?region=`;

export const GRAPH_URL = `${baseUrl}/data/`;

export const CATEGORY_TOP_5 = `${baseUrl}/data/categorytop5`;
