import styled from 'styled-components';
import { pageDefault } from '../../../components/UI/global/css.styles';

export const TeamPageContainer = styled.div`
  ${pageDefault}
`;

export const TitleContainer = styled.h1`
  text-align: center;
`;

export const MemberName = styled.h2`
  font-size: 3rem;
`;

export const Wrapper = styled.div`
  padding-top: 26px;
  margin: 13px 23px;
`;

export const MemberContainer = styled.div`
  padding: 50px;
`;

export const FirstParagraph = styled.div`
  display: flex;
`;

export const SecondParagraph = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const ProfileImage = styled.img`
  width: 300px;
  border-radius: 50%;
`;

export const Introduction = styled.p`
  font-size: 100%;
  word-break: keep-all;
`;

export const MemberDescription = styled.p`
  font-size: 22px;
`;
