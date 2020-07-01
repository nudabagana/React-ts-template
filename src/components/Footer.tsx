import React, { FC } from 'react';
import { FooterContainer } from '../styled/containers/FooterContainer';

const Footer: FC = () => {
  return <FooterContainer>©{new Date().getFullYear()} Project Name.</FooterContainer>;
};

export default Footer;
