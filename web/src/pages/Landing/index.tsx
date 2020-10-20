import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import { Container, Content, Header, Main } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <img src={logo} alt="Conversão de moedas fácil e transparente" />
        </Header>
        <Main>
          <h1>Conversão de moedas fácil e transparente</h1>
          <p>
            Transparência e segurança para uma vida global sem letras miúdas.
          </p>
          <Link to="/currency-conversion">
            <span>
              <FiLogIn />
            </span>
            <strong>Entrar</strong>
          </Link>
        </Main>
      </Content>
    </Container>
  );
};

export default Landing;
