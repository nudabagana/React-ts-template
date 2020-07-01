import React from 'react';
import ReactDOM from 'react-dom';
import { initialize } from 'react-ga';
import App from './App';
import { IS_PRODUCTION } from './consts';
import './index.css';

if (IS_PRODUCTION) {
  initialize('UA-168951713-1', {
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
