import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        Samriddhi's Portfolio
      </SectionTitle>
      <SectionText>
        I am a third year computer engineering student, a budding web developer and an avid Hindustani Classical music lover.
      </SectionText>
      <Button onCLick={() => window.location = '#footer' }>Contact me!</Button>
    </LeftSection>
  </Section>
);

export default Hero;