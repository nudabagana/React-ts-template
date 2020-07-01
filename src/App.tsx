import { createBrowserHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import ApplicationContext from './components/ApplicationContext';
import { GlobalStyle } from './styled/globals';
import { pageview } from 'react-ga';
import WindowWidthProvider from './components/miscellaneous/WindowDimensionProvider';

const history = createBrowserHistory();

history.listen(location => {
  pageview(location.pathname);
});

const App: React.FC = () => {
  return (
    <>
    <WindowWidthProvider>
      <Router history={history}>
        <ApplicationContext />
      </Router>
      </WindowWidthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
