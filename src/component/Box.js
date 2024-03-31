import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import SonBox from './SonBox';

const Box = () => {
    let count = useSelector((state)=>state.count);
  return (
    <div>
      <div>this is box{count}
      <SonBox/></div>
    </div>
  )
}

export default Box
