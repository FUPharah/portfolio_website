import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Whatsapp</LinkTitle>
          <LinkItem href="#">+90 533 311 18 11</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: canozben@windowslive.com"> canozben@windowslive.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>WeChat微信 ID</LinkTitle>
          <LinkItem href="#">canozben</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learning is a never ending process</Slogan>
        </CompanyContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
