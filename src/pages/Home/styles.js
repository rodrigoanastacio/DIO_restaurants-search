import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
  padding: 16px;
`;

export const Logo = styled.img`
  margin: 15px;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  margin: 16px 0;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Map = styled.div`
  background-color: red;
  width: 100%;
`;
