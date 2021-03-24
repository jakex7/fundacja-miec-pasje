import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  const handleWindowResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    handleWindowResize()
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return dimensions
}
