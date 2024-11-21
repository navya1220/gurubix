import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f9f9f9;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
