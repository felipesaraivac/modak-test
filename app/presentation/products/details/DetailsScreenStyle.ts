import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  margin-vertical: 8px;
  elevation: 3;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  shadow-offset: 0px 2px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const Brand = styled.Text`
  font-size: 14px;
  color: #888;
  margin-bottom: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #1e40af;
`;

export const Discount = styled.Text`
  font-size: 14px;
  color: #dc2626;
  font-weight: 600;
`;

export const Stock = styled.Text`
  font-size: 14px;
  color: #555;
`;

export const Rating = styled.Text`
  font-size: 14px;
  color: #facc15;
  font-weight: 600;
  margin-top: 4px;
`;
