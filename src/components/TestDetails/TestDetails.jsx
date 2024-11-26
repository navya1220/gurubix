import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { cards } from '../data/cards';
import {
  Container,
  Title,
  TestList,
  TestItem,
  TestInfo,
  TestName,
  TestDetailsText,
  TestIcon,
  ContentWrapper,
} from './StyledComponents';

const TestDetails = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const card = cards.find((card) =>
    card.topics.some(
      (topic) =>
        typeof topic === 'object' &&
        topic.name.replace(/\s+/g, '-').toLowerCase() === category
    )
  );

  const tests = card
    ? card.topics.find(
        (topic) =>
          typeof topic === 'object' &&
          topic.name.replace(/\s+/g, '-').toLowerCase() === category
      ).subtopics || []
    : [];

  const handleTestClick = (testId) => {
    navigate(`/instructions/${testId}`);
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>{category.replace(/-/g, ' ').toUpperCase()}</Title>
        {tests.length > 0 ? (
          <TestList>
            {tests.map((test) => (
              <TestItem key={test.id} onClick={() => handleTestClick(test.id)}>
                <TestIcon>📘</TestIcon>
                <TestInfo>
                  <TestName>{test.name}</TestName>
                  <TestDetailsText>Questions: {test.questions}</TestDetailsText>
                  <TestDetailsText>Duration: {test.duration}</TestDetailsText>
                </TestInfo>
              </TestItem>
            ))}
          </TestList>
        ) : (
          <p>No tests available for this category.</p>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default TestDetails;
