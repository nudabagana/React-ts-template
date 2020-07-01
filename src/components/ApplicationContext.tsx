import React, { FC, useEffect } from 'react';
import { pageview } from 'react-ga';
import { Redirect, useLocation } from 'react-router-dom';
import { RouterPaths } from '../routes/RouterPaths';
import SwitchGenerator, { IRoute } from '../routes/SwitchGenerator';
import About from './About';
import ApplicationWrapper from './ApplicationWrapper';

const RedirectToAbout = () => <Redirect to={RouterPaths.ABOUT} />;

const routes: IRoute[] = [
  {
    path: RouterPaths.ABOUT,
    both: <About />,
  },
  {
    path: RouterPaths.ROOT,
    both: <RedirectToAbout />,
  },
];

const ApplicationContext: FC = () => {
  const location = useLocation();
  useEffect(() => {
    pageview(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ApplicationWrapper>
      <SwitchGenerator authorized={false} routes={routes} />
    </ApplicationWrapper>
  );
};

export default ApplicationContext;
