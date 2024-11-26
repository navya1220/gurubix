import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const InstructionCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;

  @media (max-width: 480px) {
    width: 90%; 
    padding: 15px; 
  }
`;

export const Heading = styled.h3`
  font-size: 24px;
  color: #28a745;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 20px;
    text-align: center; 
  }
`;

export const HighlightedText = styled.span`
  color: red;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const InstructionList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;

  @media (max-width: 480px) {
    padding-left: 15px;
  }
`;

export const ListItem = styled.li`
  font-size: 18px;
  color: #555;
  margin-bottom: 15px;

  & > span {
    font-weight: bold;
    color: #333;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 10px; 
  }
`;

export const StartButton = styled.button`
  display: block;
  width: 80%;
  max-width: 300px;
  padding: 8px 12px;
  background-color: #28a745;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  margin: 20px auto 0;

  &:hover {
    background-color: #218838;
    transform: scale(1.05); 
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: 2px solid #28a745;
    outline-offset: 3px;
  }

  &:active {
    background-color: #1e7e34;
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    font-size: 16px; 
    padding: 6px 10px;
  }

  @media (max-width: 480px) {
    font-size: 14px; 
    width: 90%; 
    padding: 5px 8px; 
  }
`;
