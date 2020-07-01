import React, { FC } from 'react';
import Footer from './Footer';
import Header from './Header';
import MainImage from './MainImage';

const ApplicationWrapper: FC = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MainImage />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default ApplicationWrapper;
