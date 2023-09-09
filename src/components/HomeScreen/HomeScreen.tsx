import React, { useState } from 'react';
import { Stack, PrimaryButton, ChoiceGroup, IChoiceGroupOption, Text, TextField } from '@fluentui/react';
import {
  callContainerStackTokens,
  callOptionsGroupStyles,
  configContainerStackTokens,
  containerTokens
} 
from '../../styles/HomeScreen.styles';

import { localStorageAvailable } from '../../utils/localStorage';
import { getDisplayNameFromLocalStorage, saveDisplayNameToLocalStorage } from '../../utils/localStorage';
import { DisplayNameField } from '../DisplayNameField/DisplayNameField';
import { TeamsMeetingLinkLocator } from '@azure/communication-calling';

import { CallAdapterLocator } from '@azure/communication-react';

import {
   Container 
} from './style'
import NavBar from '../NavBar'

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

    { key: 'TeamsMeeting', text: 'Participe de uma reunião usando um link' }
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
      <NavBar />
      <Stack
        horizontal
        wrap
        horizontalAlign="center"
        verticalAlign="center"
        tokens={containerTokens}
        className='containerStyle'
      >
        <Stack className='infoContainerStyle'>
            <Text role={'heading'} className='headerStyle'>
              {headerTitle}
            </Text>
            <Text  className='subtitleStyle'>
            Conecte-se e compartilhe de qualquer lugar sobre seu paciente com a Aicury.
            </Text>
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
                <TextField
                className='teamsItemStyle'
                iconProps={{ iconName: 'Link' }}
                placeholder={'Insira um link de reunião de equipes'}
                onChange={(_, newValue) => newValue && setCallLocator({ meetingLink: newValue })}
              />
              )}
            </Stack>
            {showDisplayNameField && <DisplayNameField defaultName={displayName} setName={setDisplayName} />}

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

          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
