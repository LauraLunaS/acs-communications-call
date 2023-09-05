// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React, { useEffect } from 'react';
import { NoticePage } from './NoticePage';

export const UnsupportedBrowserPage = (): JSX.Element => {
  useEffect(() => {
    // Verificar se estamos no lado do cliente antes de acessar window
    if (typeof window !== 'undefined') {
      window.document.title = 'Unsupported browser';
    }
  }, []);

  return (
    <NoticePage
      title="Unsupported Browser"
      moreDetails={
        <>
          <a
            href="https://docs.microsoft.com/azure/communication-services/concepts/voice-video-calling/calling-sdk-features#calling-client-library-browser-support"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>{' '}
          about browsers and platforms supported by the web calling SDK.
        </>
      }
      icon="⚠️"
    />
  );
};

