import React, { useEffect } from 'react'
import anime from 'animejs'
import LogoImage from '../../../assets/images/logo.svg'
import Accent from '../../atoms/Accent/Accent'
import {
  HeroWrapper,
  HeroImage,
  HeroText,
  Paragraph,
  HeroScroll,
} from './HeroSection.style'
import Button from '../../atoms/Button/Button'
import Header from '../../atoms/Header/Header'

const HeroSection = ({ content }) => {
  useEffect(() => {
    const tl = anime.timeline({
      easing: 'easeInOutExpo',
      duration: 2000,
    })

    tl.add(
      {
        targets: `${HeroText} h1`,
        opacity: [0, 1],
        translateY: [100, 0],
      },
      300
    )
      .add(
        {
          targets: `${Paragraph}`,
          opacity: [0, 1],
          translateY: [100, 0],
        },
        1000
      )
      .add(
        {
          targets: `${HeroImage}`,
          opacity: [0, 1],
          translateX: [-100, 0],
        },
        1250
      )
      .add(
        {
          targets: `${HeroText} button`,
          opacity: [0, 1],
          translateY: [100, 0],
        },
        1500
      )

    anime({
      targets: `${HeroImage} #anvil`,
      translateY: [-10, 0],
      duration: 4000,
      loop: true,
      easing: 'linear',
      direction: 'alternate',
    })
    anime({
      targets: `${HeroImage} #pitcher`,
      translateY: [0, -10],
      translateX: [0, 5],
      duration: 6000,
      loop: true,
      easing: 'linear',
      direction: 'alternate',
    })
  }, [])
  return (
    <HeroWrapper id="home">
      <HeroScroll>Przewiń</HeroScroll>
      <HeroImage>
        <LogoImage />
      </HeroImage>
      <HeroText>
        <Header>
          Fundacja <br />
          Mieć <Accent underline>Pasje</Accent>
        </Header>
        <Paragraph>{content}</Paragraph>
        <Button text="Więcej informacji" />
      </HeroText>
    </HeroWrapper>
  )
}

export default HeroSection
