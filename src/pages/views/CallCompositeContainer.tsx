import { CommonCallAdapter, CallComposite } from '@azure/communication-react';

import { Spinner } from '@fluentui/react';
import { useSwitchableFluentTheme } from '../../theming/SwitchableFluentThemeProvider';
import { useIsMobile } from '../../utils/useIsMobile';
import React, { useEffect } from 'react';

import { CallScreenProps } from './CallScreen';

export type CallCompositeContainerProps = CallScreenProps & { adapter?: CommonCallAdapter };

export const CallCompositeContainer = (props: CallCompositeContainerProps): JSX.Element => {
  const { adapter } = props;
  const { currentTheme, currentRtl } = useSwitchableFluentTheme();
  const isMobileSession = useIsMobile();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const disposeAdapter = (): void => adapter?.dispose();
      window.addEventListener('beforeunload', disposeAdapter);
      return () => window.removeEventListener('beforeunload', disposeAdapter);
    }
  }, [adapter]);

  if (!adapter) {
    return <Spinner label={'Creating adapter'} ariaLive="assertive" labelPosition="top" />;
  }

  const callInvitationUrl: string | undefined = typeof window !== 'undefined' ? window.location.href : undefined;

  return (
    <CallComposite
      adapter={adapter}
      fluentTheme={currentTheme.theme}
      rtl={currentRtl}
      callInvitationUrl={callInvitationUrl}
      formFactor={isMobileSession ? 'mobile' : 'desktop'}
    />
  );
};
