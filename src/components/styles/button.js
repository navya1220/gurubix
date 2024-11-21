import styled from "styled-components";

export const Button = styled.button`
  background-color: #2a9d8f;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #21867a;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
