import React from 'react';
import { DiFirebase, DiJavascript, DiReact, DiRor, DiRuby, DiTrello, DiZend } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I have experience working with a variety of technologies in the web development field, including front-end and back-end technologies such as Ruby on Rails, JavaScript, React.js, HTML, CSS, Bootstrap, and more.
    I am also proficient in design tools such as Figma to create visually appealing and user-friendly interfaces.
    </SectionText>
    <List>
      <ListItem>
        <DiRor size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Ruby on Rails and PostgreSQL.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            JavaScript, Bootstrap and more.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiFigma size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      </List>
    </Section>
);

export default Technologies;
