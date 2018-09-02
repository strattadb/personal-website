import React from 'react';

import {
  Event as AnalyticsEvent,
  sendAnalyticsEvent,
} from '../../../analytics';

export class InstallPrompt extends React.Component {
  public componentDidMount() {
    InstallPrompt.addBeforeInstallPromptEventListener();
    InstallPrompt.addAppInstalledEventListener();
  }

  private static addBeforeInstallPromptEventListener(): void {
    window.addEventListener('beforeinstallprompt', async (event: any) => {
      event.prompt();

      const choice = await event.userChoice();

      InstallPrompt.sendPromptChoiceOutcomeAnalyticsEvent(choice.outcome);
    });
  }

  private static sendPromptChoiceOutcomeAnalyticsEvent(outcome: string): void {
    if (outcome === 'accepted') {
      InstallPrompt.sendPromptAcceptedAnalyticsEvent();
    } else {
      InstallPrompt.sendPromptDeclinedAnalyticsEvent();
    }
  }

  private static sendPromptAcceptedAnalyticsEvent(): void {
    const promptAcceptedAnalyticsEvent: AnalyticsEvent = {
      category: 'Install',
      action: 'prompt accepted',
    };

    sendAnalyticsEvent(promptAcceptedAnalyticsEvent);
  }

  private static sendPromptDeclinedAnalyticsEvent(): void {
    const promptDeclinedAnalyticsEvent: AnalyticsEvent = {
      category: 'Install',
      action: 'prompt declined',
    };

    sendAnalyticsEvent(promptDeclinedAnalyticsEvent);
  }

  private static addAppInstalledEventListener(): void {
    window.addEventListener('appinstalled', event => {
      InstallPrompt.sendAppInstalledAnalyticsEvent();
    });
  }

  private static sendAppInstalledAnalyticsEvent(): void {
    const appInstalledAnalyticsEvent: AnalyticsEvent = {
      category: 'Install',
      action: 'installed',
    };

    sendAnalyticsEvent(appInstalledAnalyticsEvent);
  }

  public render() {
    return null;
  }
}

export default InstallPrompt;
