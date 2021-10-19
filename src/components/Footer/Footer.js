import React from 'react';
import { AiFillFilePdf, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { Section } from '../../styles/GlobalComponents';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <Section id="footer">
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+91 9833792509">+91 9833792509</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:samriddhi.b@somaiya.edu">samriddhi.b@somaiya.edu</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>View Resume</LinkTitle>
        <LinkItem href="https://drive.google.com/file/d/1UnoNaKCt2smP3RpLV8HkEJPttRkTAie2/view?usp=sharing" ><AiFillFilePdf size="2rem"/> Resume</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Template by Samriddhi Banerjee</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/samriddhi09">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/samriddhi-banerjee-712b26197/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
    </Section>
  );
};

export default Footer;
