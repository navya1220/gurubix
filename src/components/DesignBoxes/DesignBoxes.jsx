import React from 'react';
import DesignSingleBox from './DesignSingleBox.jsx';
import {Container, Title, Description, CardContainer } from '../styles/StyledComponents.js';

const cards = [
  { id: 1, name: "General Aptitude", topics: ["Arithmetic Aptitude", "Data Interpretation", "Online Aptitude Test", "Data Interpretation Test" ] },
  { id: 2, name: "Verbal and Reasoning", topics: ["Verbal Ability", "Logical Reasoning", "Verbal Reasoning", "Non Verbal Reasoning"]  },
  { id: 3, name: "Programming", topics: ["C Programming", "C++ Programming", "C# Programming", "Java Programming"] },
  { id: 4, name: "Development", topics: ["SQL", "MongoDB", "ReactJS", "NodeJS", "Django", "Spring"]}
];


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
