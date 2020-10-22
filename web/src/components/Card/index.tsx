import React from 'react';

import { Container, Content } from './styles';

interface CardProps {
  title?: string;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <Container>
      {title && <h1>{title}</h1>}
      <Content>{children}</Content>
    </Container>
  );
};

export default Card;
