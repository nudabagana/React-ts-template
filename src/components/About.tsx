import React, { FC } from 'react';
import { MainCardContainer } from '../styled/containers/MainCardContainer';
import { H2 } from '../styled/miscellaneous/hx';
import { P } from '../styled/miscellaneous/p';

const About: FC = () => {
  return (
    <MainCardContainer>
      <div>
        <H2>Example page</H2>
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eveniet amet excepturi
          nam ipsa sunt delectus quos culpa ab, totam omnis facere minima? Eligendi, dolorem placeat
          animi dolore repudiandae alias.
        </P>
      </div>
    </MainCardContainer>
  );
};

export default About;
