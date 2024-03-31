import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';

const SonBox = () => {
    let count = useSelector((state)=>state.count);

  return (
    <div>
      SonBox {count}
    </div>
  )
}

export default SonBox
