import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Address = styled.span`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  color: ${({ theme }) => theme.colors.text};
  margin: 5px 0;
`;

export const RestaurantPhoto = styled.img`
  border-radius: 6px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  // display: ${({ imageLoaded }) => (imageLoaded ? 'block' : 'none')};
`;

export const Content = styled(Text)`
  margin-top: 5px;
`;
