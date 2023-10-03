import { CommonCallAdapter, CallComposite } from '@azure/communication-react';
import { Spinner } from '@fluentui/react';
import { useIsMobile } from '../../utils/useIsMobile';
import React, { useEffect } from 'react';
import { CallScreenProps } from '../CallScreen/CallScreen';
import { Font } from './style';
import NavBar from '../NavBar';

export type CallCompositeContainerProps = CallScreenProps & { adapter?: CommonCallAdapter };

export const CallCompositeContainer = (props: CallCompositeContainerProps): JSX.Element => {
  const { adapter } = props;
  const isMobileSession = useIsMobile();


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const disposeAdapter = (): void => adapter?.dispose();
      window.addEventListener('beforeunload', disposeAdapter);
      return () => window.removeEventListener('beforeunload', disposeAdapter);
    }
  }, [adapter]);

  if (!adapter) {
    return <Spinner label={'Carregando'} ariaLive="assertive" labelPosition="top" />;
  }

  const callInvitationUrl: string | undefined = typeof window !== 'undefined' ? window.location.href : undefined;

  return (
    <>
    <NavBar />
      <Font>
        <CallComposite
          adapter={adapter}
          callInvitationUrl={callInvitationUrl}
          formFactor={isMobileSession ? 'mobile' : 'desktop'}
        />
      </Font>
    </>
  );
};
