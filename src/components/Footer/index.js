import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebSiteRights, SocialIcon, SocialIconLink } from './FooterElements'

const Footer = () => {

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='home' spy={true} exact='true' offset={-90}>
              Plaza AvEs
            </SocialLogo>
            <WebSiteRights>Plaza AvEs © {new Date().getFullYear()} All rights reserved.</WebSiteRights>
            <SocialIcon>
              <SocialIconLink href='https://www.facebook.com/PlazaAvEs' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/plazaaves/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='' target='_blank' aria-label='Whatsapp'>
                <FaWhatsapp />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
