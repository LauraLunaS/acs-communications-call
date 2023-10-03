import { TextField } from '@fluentui/react';
import React, { useState } from 'react';
import { ContainerText } from './style';
import { inputBoxStyle, inputBoxTextStyle, TextFieldStyleProps } from '../../styles/DisplayNameField.styles';


interface DisplayNameFieldProps {
  setName(displayName: string): void;
  setEmptyWarning?(isEmpty: boolean): void;
  isEmpty?: boolean;
  defaultName?: string;
}

const DISPLAY_NAME_MAX_CHARS = 256;
const TEXTFIELD_LABEL = 'Nome';
const TEXTFIELD_ID = 'displayName';
const TEXTFIELD_PLACEHOLDER = 'Insira seu nome';
const TEXTFIELD_EMPTY_ERROR_MSG = 'O nome não pode ficar vazio';
const TEXTFIELD_EXCEEDS_MAX_CHARS = `O nome não pode exceder ${DISPLAY_NAME_MAX_CHARS} characters`;

const hasValidLength = (name: string): boolean => {
  return name.length <= DISPLAY_NAME_MAX_CHARS;
};

export const DisplayNameField = (props: DisplayNameFieldProps): JSX.Element => {
  const { setName, setEmptyWarning, isEmpty, defaultName } = props;
  const [isInvalidLength, setIsInvalidLength] = useState<boolean>(!hasValidLength(defaultName ?? ''));

  const onNameTextChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ): void => {
    if (newValue === undefined) {
      return;
    }

    if (!hasValidLength(newValue)) {
      setIsInvalidLength(true);
      setName('');
      return;
    } else {
      setIsInvalidLength(false);
    }

    setName(newValue);
    if (setEmptyWarning && !newValue) {
      setEmptyWarning(true);
    } else {
      setEmptyWarning && setEmptyWarning(false);
    }
  };

  return (
    <ContainerText>
      <TextField
      autoComplete="off"
      defaultValue={defaultName}
      inputClassName={inputBoxTextStyle}
      label={TEXTFIELD_LABEL}
      required={true}
      className={inputBoxStyle}
      onChange={onNameTextChange}
      id={TEXTFIELD_ID}
      placeholder={TEXTFIELD_PLACEHOLDER}
      styles={TextFieldStyleProps}
      errorMessage={isEmpty ? TEXTFIELD_EMPTY_ERROR_MSG : isInvalidLength ? TEXTFIELD_EXCEEDS_MAX_CHARS : undefined}
    />
    </ContainerText>
  );
};
