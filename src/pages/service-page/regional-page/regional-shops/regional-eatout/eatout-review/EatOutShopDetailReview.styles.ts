import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 20px;
`;

export const Comment = styled.li`
  word-break: keep-all;
  font-weight: bold;
`;

export const CommentDate = styled.p``;

export const CommentWrapper = styled.ul`
  margin: 1rem 0;
  list-style: none;
  padding: 0;
`;

export const Content = styled.div``;

export const CommentRating = styled.div`
  box-shadow: 0 2px 3px rgb(0 0 0 / 26%);
  width: fit-content;
  padding: 0 5px;
  border-radius: 3px;
  margin: 0 0 1rem 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextButton = styled.button`
  background-color: white;
  margin: 20px;
  padding: 5px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  postition: absolute;
  box-sizing: border-box;
  :hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;

export const PrevButton = styled.button`
  background-color: white;
  margin: 20px;
  padding: 5px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  postition: absolute;
  box-sizing: border-box;
  :hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;
