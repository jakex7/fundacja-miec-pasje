import React from 'react'
import NavigationElement from '../../atoms/NavigationElement/NavigationElement'
import { NavigationLinksWrapper } from './NavigationLinks.style'

const NavigationLinks = () => {
  return (
    <NavigationLinksWrapper>
      <NavigationElement to={'/#o-nas'} text={'O nas'} native />
      <NavigationElement to={'/'} text={'Wydarzenia'} />
      <NavigationElement to={'/statut'} text={'Statut'} />
    </NavigationLinksWrapper>
  )
}

export default NavigationLinks
