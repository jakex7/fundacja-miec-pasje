import React from 'react'
import NavigationElement from '../../atoms/NavigationElement/NavigationElement'
import { NavigationLinksWrapper } from './NavigationLinks.style'

const NavigationLinks = ({ isMobile }) => {
  return (
    <NavigationLinksWrapper isMobile={isMobile}>
      <NavigationElement
        to={'/#o-nas'}
        text={'O nas'}
        anchor
        isMobile={isMobile}
      />
      <NavigationElement
        to={'/#wydarzenia'}
        text={'Wydarzenia'}
        anchor
        isMobile={isMobile}
      />
      <NavigationElement to={'/statut'} text={'Statut'} isMobile={isMobile} />
      {isMobile && (
        <NavigationElement
          to={'/#kontakt'}
          text={'Kontakt'}
          anchor
          isMobile={isMobile}
        />
      )}
    </NavigationLinksWrapper>
  )
}

export default NavigationLinks
