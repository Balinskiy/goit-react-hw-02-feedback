import styled from 'styled-components';

export const Box = styled.div`
  width: 70%;
`;

export const H1 = styled.h1`
  font-size: 30px;
`;

export const Button = styled.button`
  margin-right: 10px;

  &:nth-child(2) {
    background-color: #4caf50;
    color: white;
  }
  &:nth-child(3) {
    background-color: #2196f3;
    color: white;
  }

  &:nth-child(4) {
    background-color: #f44336;
    color: white;
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
  margin-top: 40px;
`;

export const Statistic = styled.ul`
  list-style-type: none;
  padding-inline-start: 0 !important;
`;

export const StatisticItem = styled.li`
  font-size: 18px;
`;
