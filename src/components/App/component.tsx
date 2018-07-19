import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Theme } from '../../theme';
import PageView from '../PageView';
import Routes from './Routes';

import ErrorBoundary from './ErrorBoundary';
import ScrollToHash from './ScrollToHash';
import ScrollToTop from './ScrollToTop';

export type AppProps = Readonly<{
  theme: Theme;
}>;

export const App: React.SFC<AppProps> = ({ theme }) => (
  <Router>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <ScrollToTop />
        <PageView />
        <Routes />
        <ScrollToHash />
      </ErrorBoundary>
    </ThemeProvider>
  </Router>
);

export default App;
