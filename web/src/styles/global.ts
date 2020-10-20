import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-color: #84ce46;
    --secondary-color:  #0f6c87;
    --title-color: #322153;
    --text-color: #101114;
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
    color: #101114;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--title-color);
    font-family: Roboto;
  }

  button {
    cursor: pointer;
  }
`;
