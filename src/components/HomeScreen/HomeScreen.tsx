import React, { useState } from 'react';
import { Stack, PrimaryButton, ChoiceGroup, IChoiceGroupOption, Text, TextField } from '@fluentui/react';
import Image from 'next/image';
import {
  callContainerStackTokens,
  callOptionsGroupStyles,
  configContainerStackTokens,
  containerTokens
} 
from '../../styles/HomeScreen.styles';

import { ThemeSelector } from '../../theming/ThemeSelector';
import { localStorageAvailable } from '../../utils/localStorage';
import { getDisplayNameFromLocalStorage, saveDisplayNameToLocalStorage } from '../../utils/localStorage';
import { DisplayNameField } from '../DisplayNameField/DisplayNameField';
import { TeamsMeetingLinkLocator } from '@azure/communication-calling';

import { CallAdapterLocator } from '@azure/communication-react';

import { 
   StyledTextFieldContainer,
   Containerbox, 
   ContainerButton, 
   ContainerTheme, 
   Container 
} from './style'

export interface HomeScreenProps {
  startCallHandler(callDetails: {
    displayName: string;
    callLocator?: CallAdapterLocator | TeamsMeetingLinkLocator;
  }): void;
  joiningExistingCall: boolean;
}

export const HomeScreen = (props: HomeScreenProps): JSX.Element => {
  const headerTitle = props.joiningExistingCall ? 'Participar da chamada' : 'Iniciar ou participar de uma chamada';
  const callOptionsGroupLabel = 'Selecione uma opção de chamada';
  const buttonText = 'Começar';
  const callOptions: IChoiceGroupOption[] = [
    { key: 'ACSCall', text: 'Iniciar a chamada' },

    { key: 'TeamsMeeting', text: 'Participe de uma reunião do Teams usando a identidade ACS' }
  ];


  const defaultDisplayName = localStorageAvailable ? getDisplayNameFromLocalStorage() : null;
  const [displayName, setDisplayName] = useState<string | undefined>(defaultDisplayName ?? undefined);

  const [chosenCallOption, setChosenCallOption] = useState<IChoiceGroupOption>(callOptions[0]);
  const [callLocator, setCallLocator] = useState<TeamsMeetingLinkLocator>();

  const startGroupCall: boolean = chosenCallOption.key === 'ACSCall';
  const teamsCallChosen: boolean = chosenCallOption.key === 'TeamsMeeting';

  const buttonEnabled = displayName && (startGroupCall || (teamsCallChosen && callLocator));

  const showDisplayNameField = true;

  return (
    <Container>
      <Stack
        horizontal
        wrap
        horizontalAlign="center"
        verticalAlign="center"
        tokens={containerTokens}
        className='containerStyle'
      >
        <Image src={"/assets/logo.png"} alt={"Minha Imagem"} width={500} 
          height={200} className='imageLogo'/>
        <Stack className='infoContainerStyle'>
        <Containerbox>
            <Text role={'heading'} aria-level={1} className='headerStyle'>
              {headerTitle}
            </Text>
          </Containerbox>
          <Stack className='configContainerStyle' tokens={configContainerStackTokens}>
            <Stack tokens={callContainerStackTokens}>
              {!props.joiningExistingCall && (
                <ChoiceGroup
                  styles={callOptionsGroupStyles}
                  label={callOptionsGroupLabel}
                  defaultSelectedKey="ACSCall"
                  options={callOptions}
                  required={true}
                  onChange={(_, option) => option && setChosenCallOption(option)}
                  className='choiceGroup'
                />
              )}

              {teamsCallChosen && (
              <StyledTextFieldContainer>
                <TextField
                className='teamsItemStyle'
                iconProps={{ iconName: 'Link' }}
                placeholder={'Insira um link de reunião de equipes'}
                onChange={(_, newValue) => newValue && setCallLocator({ meetingLink: newValue })}
              />
              </StyledTextFieldContainer> 
              )}
            </Stack>
            {showDisplayNameField && <DisplayNameField defaultName={displayName} setName={setDisplayName} />}
            <ContainerButton>
              <PrimaryButton
                disabled={!buttonEnabled}
                className='buttonStyle'
                text={buttonText}
                onClick={() => {
                  if (displayName) {
                    displayName && saveDisplayNameToLocalStorage(displayName);

                    props.startCallHandler({
                      displayName: !displayName ? 'Teams UserName PlaceHolder' : displayName,
                      callLocator: callLocator
                    });
                  }
                }}
              />
            </ContainerButton>
            <ContainerTheme>
              <ThemeSelector label="Tema" horizontal={true} className='themeStyle'/>
            </ContainerTheme>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
