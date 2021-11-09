import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Container, Search, Logo, Wrapper, Map } from './styles';

import logo from '../../assets/logo.svg';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

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
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
