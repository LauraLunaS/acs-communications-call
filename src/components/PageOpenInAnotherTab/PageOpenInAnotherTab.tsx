// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Link } from '@fluentui/react';
import React, { useEffect } from 'react';
import { NoticePage } from '../NoticePage/NoticePage';

export const PageOpenInAnotherTab = (): JSX.Element => {
  useEffect(() => {
    // Verificar se estamos no lado do cliente antes de acessar window
    if (typeof window !== 'undefined') {
      window.document.title = 'App already open in another tab';
    }
  }, []);

  return (
    <NoticePage
      title="App is already open in another tab"
      moreDetails={
        <>
          On mobile browsers, Azure Communication Services only supports one active call at a time. For more information
          see:{' '}
          <a
            href="https://docs.microsoft.com/en-us/azure/communication-services/concepts/best-practices#handling-multiple-calls-on-multiple-tabs-on-mobile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calling SDK Best Practices
          </a>
          .
        </>
      }
      icon="⚠️"
    />
  );
};

