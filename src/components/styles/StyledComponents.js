import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #2a9d8f;
   margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #264653;
  margin-bottom: 20px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 16px;
  padding-left: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
   color: #2a9d8f;
  margin-bottom: 10px;
`;

export const TopicList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Topic = styled.li`
  font-size: 1rem;
  color: #264653;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: black;
    transition: color 0.3s ease;

    &:hover {
      color: #e76f51;
    }
  }
`;

