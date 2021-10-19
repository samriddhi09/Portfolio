import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <br/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <br/>
    <br/>
    <SectionText>
      I've worked with a range of technologies and Tech-Stacks in the web development, mobile app development and Machine Learning world, From Backend to Frontend Design.     
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.JS, native HTML, CSS, JS, Bootstrap4, Android Studio
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="5rem"/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.JS, MySQL Databases and Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="5rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Adobe XD and Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
