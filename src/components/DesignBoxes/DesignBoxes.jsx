import React from 'react';
import DesignSingleBox from './DesignSingleBox.jsx';
import {Container, Title, Description, CardContainer } from '../styles/StyledComponents.js';
import { cards } from '../data/cards.jsx';


const DesignBoxes = () => {
  return (
    <Container>
      <Title>Welcome to IndiaBIX.Com!</Title>
      <Description>
        Aptitude questions and answers for your placement interviews and
        competitive exams!
      </Description>
      <CardContainer>
        {cards.map((item) => (
          <DesignSingleBox key={item.id} card={item} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default DesignBoxes;
