import styled from 'styled-components';

export const Card = styled.div`
  min-width: 90px;
  height: 90px;
  padding: 6px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: #ffffff;
  font-size: 16px;
`;
