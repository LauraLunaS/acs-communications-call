import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../components/App';
import dynamic from 'next/dynamic'
import { SwitchableFluentThemeProvider } from '../theming/SwitchableFluentThemeProvider';
import { ShakeToSendLogs } from '../utils/ShakeToSendLogs';



const domNode = document.getElementById('root');
if (!domNode) {
  throw new Error('Failed to find the root element');
}

createRoot(domNode).render(
  <SwitchableFluentThemeProvider scopeId="SampleCallingApp">
    <div className="wrapper">
      <ShakeToSendLogs />
    </div>
  </SwitchableFluentThemeProvider>
);
