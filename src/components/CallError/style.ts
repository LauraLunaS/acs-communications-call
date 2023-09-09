import styled from 'styled-components';

export const Container = styled.div`
  .endCallContainerStyle {
    margin-top: 1rem;
    display: flex; 
    align-items: center;
    justify-content: center;
  }
  .endCallTitleStyle {
    color: #4A90A7;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
  }

  .buttonStyleHomePage {
    border-radius: 5px;
    border-color: #4A90A7;
    color: #4A90A7;
    background-color: #fff;
    font-family: 'Montserrat', sans-serif;
  }

  @media screen and (min-width: 260px) and (max-width: 420px) {
    .buttonStyleHomePage {
      font-size: 0.7rem;
    }
  }

  @media screen and (min-width: 421px) and (max-width: 767px) {

  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .infoContainerStyle {
      width: 80%;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    .infoContainerStyle {
      width: 35%;
    }
  }

  @media screen and (min-width: 1367px) and (max-width: 1600px) {
    .infoContainerStyle {
      width: 35%;
    }
  }

  @media screen and (min-width: 1601px) and (max-width: 1920px) {
    .infoContainerStyle {
      width: 35%;
    }
  }
`;

export const ContainerButton = styled.div`
    background-color: #E07E72;
    border: none;
    border-radius: 5px;

  .buttonStyle {
    font-family: 'Montserrat', sans-serif;
    color: white;
    background-color: #E07E72;
    border: none;
    border-radius: 5px;
  }
`;

export const Subtitle = styled.text`
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
`;