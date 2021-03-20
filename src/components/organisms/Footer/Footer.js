import React from 'react'
import Accent from '../../atoms/Accent/Accent'
import {
  Claim,
  Column,
  ContentContainer,
  List,
  Row,
  StyledLogo,
  StyledLogoText,
  StyledParagraph,
  Wrapper,
} from './Footer.style'

const Footer = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <Column>
          <Row>
            <StyledLogo />
            <StyledLogoText>
              Fundacja Mieć <Accent>Pasje</Accent>
            </StyledLogoText>
          </Row>
          <Row>
            <StyledParagraph>
              Zagórze 49, <br />
              39-400 Tarnobrzeg, <br />
              Polska
            </StyledParagraph>
          </Row>
          <Row>
            <StyledParagraph>
              <b>KRS</b> 0000857776 <br />
              <b>NIP</b> 8672250440 <br />
              <b>REGON</b> 386945170 <br />
            </StyledParagraph>
          </Row>
        </Column>
        <Column>
          <Row right>
            <List>
              <li>Strona główna</li>
              <li>O nas</li>
              <li>Wydarzenia</li>
              <li>Statut</li>
              <li>Kontakt</li>
            </List>
          </Row>
        </Column>
        <Claim>
          Made with{' '}
          <span role="img" aria-label="love">
            ❤
          </span>
          ️ by <a href="https://jakubgrzywacz.pl/">Jakub Grzywacz</a>
        </Claim>
      </ContentContainer>
    </Wrapper>
  )
}

export default Footer
