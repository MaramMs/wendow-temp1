import MobileProfile from '@/components/MobileProfile';
import useWindowSize from '@/hooks/useWindowSize'
import React from 'react'

const myprofile = () => {
  const {width} = useWindowSize();
  const isMobile = width <= 768;
  return (
    <div>
      {
        isMobile ? <MobileProfile /> :( <p>maram</p>)
      }
    </div>
  )
}

export default myprofile