import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #5429CC;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #FFFFFF;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Font-size: 16px(Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14
    }
  }
  // REM => 1rem = font-size da pag.

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`