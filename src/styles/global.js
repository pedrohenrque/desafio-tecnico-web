import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #FFF;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 16px Lato, sans-serif
  }
  #root {
    max-width: 100%;
    margin: 0 auto;
  
  }

  button{
    cursor: pointer;
  }
`;