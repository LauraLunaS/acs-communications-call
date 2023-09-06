import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --blue-600: #4A90A7;
    --blue-400: #5BB2CD;
    --blue-200:#88C0D1;
    --white: #FFFFFF;
    --pink: #E07E72;
    --pink-200:#EE9085;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font: 87.5%;
    }
  }

  body {
    background: #f1f0f0;
    -webkit-font-smoothing: antialiased;

    .Toastify__toast-theme--colored.Toastify__toast--info {
      background-color: var(--blue-600);
    }

    .Toastify__progress-bar-theme--colored.Toastify__progress-bar--info {
      background-color: var(--pink-200);
    }
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong, label{
    font-weight: 600;
  }

  button{
  cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;