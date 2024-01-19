import React from 'react'
//create conrainer and use childeren like text in prop
function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>
      {children}
    </div>;
  
}

export default Container
