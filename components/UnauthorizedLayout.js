import React from 'react'

const UnauthorizedLayout = ({children}) => {
  return (
 <main className='bg-gradient-to-r from-purple-600 to-purple-200  h-[100vh] bg-no-repeat	 w-full flex justify-center items-center'>
  {children}
 </main>
  )
}

export default UnauthorizedLayout