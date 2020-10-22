import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;

    --primary-color: #84ce46;
    --secondary-color:  #322153;
    --text-color: #101114;
    --light-color: #eee;
    --paper-background-color: #fff;

    @media (min-width: 700px) {
      font-size: 62.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F0F0F5;
    color: var(--text-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 500 1.6rem Roboto, Arial, Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--secondary-color);
  }

  button {
    cursor: pointer;
  }
`;
