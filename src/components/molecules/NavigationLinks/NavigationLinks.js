import React from 'react'
import NavigationElement from '../../atoms/NavigationElement/NavigationElement'
import { NavigationLinksContainer } from './NavigationLinks.style'

const NavigationLinks = () => {
  return (
    <NavigationLinksContainer>
      <NavigationElement to={'/'} text={'O nas'} />
      <NavigationElement to={'/'} text={'Wydarzenia'} />
      <NavigationElement to={'/'} text={'Statut'} />
    </NavigationLinksContainer>
  )
}

export default NavigationLinks
