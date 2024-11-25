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
`;

export const ContentWrapper = styled.div`
  width: 50%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  text-transform: capitalize;
  margin-bottom: 20px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
`;

export const TestList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
`;

export const TestInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TestName = styled.h3`
  font-size: 18px;
  color: #555;
  margin: 0 0 5px 0;
`;

export const TestDetailsText = styled.p`
  font-size: 14px;
  color: #888;
  margin: 2px 0;
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
`;