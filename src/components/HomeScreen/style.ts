import styled from 'styled-components';


export const Containerbox = styled.div`
  .headerStyle {
    color: black;
    font-weight: bold;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
  }
  .SubtitleStyle {
    color: black;
    font-family: 'Montserrat', sans-serif;
  }
`;


export const Container = styled.div` 
  margin: 0;
  padding: 0;
  .containerStyle {
    //container onde está inserido imagem + titulo + card
    //deixar esse container alinhado no centro da tela
    margin-top: 4rem;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .infoContainerStyle {
    //container que esta inserido apenas titulo + card
    font-family: 'Montserrat', sans-serif;
  }
  .configContainerStyle {
    //container que esta inserido apenas card
  }
  .choiceGroup {
    //container select opção de chamada
  }
  .teamsItemStyle {
    background-origin: blue;
  }
  .buttonStyle {
    font-family: 'Montserrat', sans-serif;
    color: white;
    background-color: #E07E72;
    width: 100%;
    border: none;
    border-radius: 5px;
  }
  .imageLogo {
    width: 25%;
    height: 25%;
  }

  .headerStyle {
    color: black;
    font-weight: bold;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
  }
  .subtitleStyle {
    color: black;
    font-weight: 500;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    margin-top: 10px;
    margin-bottom: 25px;
  }

  @media screen and (min-width: 260px) and (max-width: 420px) {
    .infoContainerStyle {
      width: 80%;
    }
    .headerStyle {
      font-size: 1.3rem;
      font-family: 'Montserrat', sans-serif;
    }

    .subtitleStyle {
      display: none;
    }
  }

  @media screen and (min-width: 421px) and (max-width: 767px) {
    .infoContainerStyle {
      width: 65%;
    }
    .subtitleStyle {
      font-size: 1.1rem;
    }
    .headerStyle {
      font-size: 1.7rem;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .infoContainerStyle {
      width: 55%;
    }
    .subtitleStyle {
      font-size: 1.2rem;
    }
    .headerStyle {
      font-size: 1.8rem;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1366px) {
    .infoContainerStyle {
      width: 40%;
    }
    .subtitleStyle {
      font-size: 1.1rem;
    }

    .headerStyle {
      font-size: 1.8rem;
    }
  }

  @media screen and (min-width: 1367px) and (max-width: 1600px) {
    .infoContainerStyle {
      width: 35%;
    }
    .subtitleStyle {
      font-size: 1.1rem;
    }
    .headerStyle {
      font-size: 1.9rem;
    }
  }

  @media screen and (min-width: 1601px) and (max-width: 1920px) {
    .infoContainerStyle {
      width: 35%;
    }
    .subtitleStyle {
      font-size: 1.2rem;
    }
    .headerStyle {
      font-size: 1.9rem;
    }
  }
`;

