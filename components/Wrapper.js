import React from 'react'

const Wrapper = ({className, children}) => {
  return (
    <div className={`w-full max-w[1280px]   px-[15px] py-12 max-sm:py-5 md:px-40 mx-auto ${className || '' }`}>
      {children}
    </div>
  )
}

export default Wrapper
