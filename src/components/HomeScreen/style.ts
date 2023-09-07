import styled from 'styled-components';

export const StyledTextFieldContainer = styled.div`
  color: green;
  background-color: pink;
  font-family: 'Montserrat', sans-serif;
  .teamsItemStyle {
  }

  .teamsItemStyle::placeholder {
    color: blue;
  }
`;

export const Containerbox = styled.div`
  .headerStyle {
    color: #4A90A7;
    font-weight: 600;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const ContainerButton = styled.div`
    
`;

export const ContainerTheme = styled.div` 
  .themeStyle {
    font-family: 'Montserrat', sans-serif;
    color: pink;
  }
`;

export const Container = styled.div` 
  .containerStyle {
    //container onde está inserido imagem + titulo + card
    //deixar esse container alinhado no centro da tela
    margin-top: 4rem;
    font-family: 'Montserrat', sans-serif;
  }
  .infoContainerStyle {
    //container que esta inserido apenas titulo + card
    font-family: 'Montserrat', sans-serif;
    color: green;
    width: 28%;
  }
  .configContainerStyle {
    //container que esta inserido apenas card
    //background-color: yellow;
  }
  .choiceGroup {
    //container select opção de chamada
   //background-color: yellow;
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
    width: 27%;
    height: 27%;
  }
`;