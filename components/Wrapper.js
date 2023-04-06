import React from 'react'

const Wrapper = ({className, children}) => {
  return (
    <div className={`w-full max-w[1280px] px-0 max-sm:px-0 py-12 md:px-40 mx-auto ${className || '' }`}>
      {children}
    </div>
  )
}

export default Wrapper
