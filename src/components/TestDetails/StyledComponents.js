import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ContentWrapper = styled.div`
  width: 50%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  text-transform: capitalize;
  margin-bottom: 20px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
    padding-bottom: 8px;
  }
`;

export const TestList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const TestItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

export const TestInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const TestName = styled.h3`
  font-size: 18px;
  color: #555;
  margin: 0 0 5px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TestDetailsText = styled.p`
  font-size: 14px;
  color: #888;
  margin: 2px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TestIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e0f7fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-size: 18px;
  color: #00796b;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
    margin-right: 10px;
  }
`;
