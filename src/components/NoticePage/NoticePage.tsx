import React, { ReactNode } from 'react';
import { IStyle, IStackTokens, mergeStyles, Stack, Text } from '@fluentui/react';
import { Container } from './style'

export const NoticePage = (props: { title: string; moreDetails?: ReactNode; icon?: ReactNode }): JSX.Element => (
  <Container>
    <Stack verticalFill verticalAlign="center" horizontalAlign="center">
      <Stack className={mergeStyles(containerStyle)} tokens={containerItemGap}>
        {props.icon && <Text className={mergeStyles(titleStyles)}>{props.icon}</Text>}
        <Text className='title'>{props.title}</Text>
        <Text className='subtitle'>{props.moreDetails}</Text>
      </Stack>
    </Stack>
  </Container>
);

const containerStyle: IStyle = {
  maxWidth: '22.5rem',
  margin: '1rem'
};

const containerItemGap: IStackTokens = {
  childrenGap: '0.5rem'
};

const titleStyles: IStyle = {
  fontSize: '1.25rem',
  fontWeight: 600,
};


