import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Container, Carousel, Search, Logo, Wrapper, Map, Title } from './styles';
import { Card, RestaurantCard, Modal } from '../../components';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do Restaurante" />
          <TextField
            outlined
            label="Pesquisar"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <Title>Na sua Área</Title>
          <Carousel {...settings}>
            <Card photo={restaurante} title="Restaurante 1" />
            <Card photo={restaurante} title="Restaurante 2" />
            <Card photo={restaurante} title="Restaurante 3" />
            <Card photo={restaurante} title="Restaurante 4" />
            <Card photo={restaurante} title="Restaurante 5" />
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
