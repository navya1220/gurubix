import React from 'react';
import { useParams } from 'react-router-dom';
import {
  PageWrapper,
  InstructionCard,
  Heading,
  InstructionList,
  ListItem,
  HighlightedText,
  StartButton,
} from './StyledComponents';

const InstructionPage = () => {
  const { testId } = useParams();

  return (
    <PageWrapper>
      <InstructionCard>
        <Heading>Instruction:</Heading>
        <InstructionList>
          <ListItem>
            This is a <HighlightedText>FREE</HighlightedText> online test for test ID: {testId}.
          </ListItem>
          <ListItem>
            Total number of questions: <span>20</span>.
          </ListItem>
          <ListItem>
            Time allotted: <span>30 minutes</span>.
          </ListItem>
          <ListItem>
            Each question carries 1 mark; there are no negative marks.
          </ListItem>
          <ListItem>DO NOT refresh the page.</ListItem>
          <ListItem>All the best!</ListItem>
        </InstructionList>
        <StartButton>Start Test</StartButton>
      </InstructionCard>
    </PageWrapper>
  );
};

export default InstructionPage;
