import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Whatsapp</LinkTitle>
          <LinkItem href="tel: +90 533 311 18 11">+90 533 311 18 11</LinkItem>
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
          <Slogan>Learning is a never ending process.
            <br />
          Building better web experiences, one project at a time.
          </Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/FUPharah" target='_blank'>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/can-ozben/" target='_blank'>
          <AiFillLinkedin size="3rem" />
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
