import React from 'react'
import NavigationElement from '../../atoms/NavigationElement/NavigationElement'
import { NavigationLinksWrapper } from './NavigationLinks.style'

const NavigationLinks = () => {
  return (
    <NavigationLinksWrapper>
      <NavigationElement to={'/'} text={'O nas'} />
      <NavigationElement to={'/'} text={'Wydarzenia'} />
      <NavigationElement to={'/'} text={'Statut'} />
    </NavigationLinksWrapper>
  )
}

export default NavigationLinks
