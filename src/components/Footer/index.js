import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo, 
    SocialIcons,
    SocialIconLink

} from './FooterElements';

const Footer = () => {
    return(
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' > Pizza </SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook' re='noopener noreferrer' >
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram' re='noopener noreferrer'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube' re='noopener noreferrer'>
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter' re='noopener noreferrer'>
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Fa' re='noopener noreferrer'>
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>

                </SocialMedia>
            </FooterWrap>

        </FooterContainer>
    )
}
export default Footer;