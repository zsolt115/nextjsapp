import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <h1 className='text-3xl'>DASHBOARD LAYOUT</h1>
        {children}
    </div>
  )
}

export default layout