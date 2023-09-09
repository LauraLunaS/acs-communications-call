import React from 'react';
import { DefaultButton, PrimaryButton, Stack, Text } from '@fluentui/react';
import { Video20Filled } from '@fluentui/react-icons';
import {
  buttonWithIconStyles,
  mainStackTokens,
  buttonsStackTokens,
  upperStackTokens,
  videoCameraIconStyle
} from '../../styles/EndCall.styles';
import { ContainerButton, Subtitle, Container } from './style'

export interface CallErrorProps {
  title: string;
  reason: string;
  rejoinHandler(): void;
  homeHandler(): void;
}

export const CallError = (props: CallErrorProps): JSX.Element => {
  const goHomePage = 'Voltar para home';
  const rejoinCall = 'Tentar novamente';

  return (
    <Container>
      <Stack
        horizontal
        wrap
        horizontalAlign="center"
        verticalAlign="center"
        tokens={mainStackTokens}
        className='endCallContainerStyle'
      >
        <Stack tokens={upperStackTokens}>
            <Text role={'heading'} aria-level={1} className='endCallTitleStyle'>
              {props.title}
            </Text>
          <Stack horizontal tokens={buttonsStackTokens}>
            <ContainerButton>
              <PrimaryButton
                className='buttonStyle'
                styles={buttonWithIconStyles}
                text={rejoinCall}
                onClick={props.rejoinHandler}
                onRenderIcon={() => <Video20Filled className={videoCameraIconStyle} primaryFill="currentColor" />}
              />
            </ContainerButton>
            <DefaultButton
              className='buttonStyleHomePage'
              styles={buttonWithIconStyles}
              text={goHomePage}
              onClick={props.homeHandler}
            />
          </Stack>
          <Subtitle className='bottomStackFooterStyle'>{props.reason}</Subtitle>
        </Stack>
      </Stack>
    </Container>
  );
};
