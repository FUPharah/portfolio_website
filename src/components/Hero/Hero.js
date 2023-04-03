import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Hello, my name is Can and I'm a recent graduate of Le Wagon Fullstack Web Developer Bootcamp, with a passion for coding and web development. I'm currently looking for a junior developer position. I'm eager to work collaboratively with other team members and take on new challenges and responsibilities. With my skills, I'm well-positioned to begin my career as a web developer and make meaningful contributions to any project that I will work on.
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Learn More About Me</Button>
      </LeftSection>
  </Section>
);

export default Hero;
