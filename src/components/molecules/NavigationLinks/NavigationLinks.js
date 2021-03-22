import React from 'react'
import NavigationElement from '../../atoms/NavigationElement/NavigationElement'
import { NavigationLinksWrapper } from './NavigationLinks.style'

const NavigationLinks = () => {
  return (
    <NavigationLinksWrapper>
      <NavigationElement to={'/#o-nas'} text={'O nas'} anchor />
      <NavigationElement to={'/#wydarzenia'} text={'Wydarzenia'} anchor />
      <NavigationElement to={'/statut'} text={'Statut'} />
    </NavigationLinksWrapper>
  )
}

export default NavigationLinks
