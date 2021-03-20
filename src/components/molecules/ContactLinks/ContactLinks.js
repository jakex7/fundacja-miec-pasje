import React from 'react'
import styled from 'styled-components'
import Phone from '../../../assets/images/phone-outline.svg'
import Email from '../../../assets/images/email-outline.svg'
import FacebookLogo from '../../../assets/images/facebook.svg'

const StyledList = styled.ul`
  list-style: none;
  margin: 1rem 0;
  padding: 0;
  li a {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    text-decoration: none;
    color: inherit;
  }
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  width: 22px;
  svg {
    width: ${({ small }) => (small ? '18px' : '22px')};
    path {
      fill: #fff;
    }
  }
`
const ContactLinks = () => {
  return (
    <StyledList>
      <li>
        <a href="tel:+48607641252">
          <Icon>
            <Phone />
          </Icon>
          +48 607 641 252
        </a>
      </li>
      <li>
        <a href="mailto:kontakt@miecpasje.org">
          <Icon>
            <Email />
          </Icon>
          kontakt@miecpasje.org
        </a>
      </li>
      <li>
        <a href="https://fb.com/fundacjamiecpasje/">
          <Icon small>
            <FacebookLogo />
          </Icon>
          fb.com/fundacjamiecpasje
        </a>
      </li>
    </StyledList>
  )
}

export default ContactLinks
