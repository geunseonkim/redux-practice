import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  let count = useSelector(state=>state.count)
  let id = useSelector(state=>state.id)
  let password = useSelector(state=>state.password)

  let dispatch = useDispatch()
  const increase = () => {
    dispatch({type:"INCREMENT", payload:{num:5}})
  }
  const login = () => {
    dispatch({type:"LOGIN", payload:{id:"noona", password:"123"}})
  }
  const decrease = () => {
    dispatch({type:"DECREMENT"})
  }
  return (
    <div className="box">
<h3>리덕스란..?</h3>
<p>여러 컴포넌트가 공유하는 상태를 관리하기 위한 라이브러리!</p>
<div className="inside-box">
  <h3>~적용 예시~</h3>
      <h1>{id},{password}</h1>
      <button onClick={login}>로그인</button>
      <h1>{count}</h1>
      <button onClick={increase}>5씩 증가!</button>
      <button onClick={decrease}>1씩 감소 감소!</button>
</div>
<h3>reducer란..?</h3>
<p>현재 상태의 액션 객체를 파라미터로 받아와서 새로운 상태로 반환해주는 함수!</p>
<h3>reducer 사용법...?</h3>
<p>const [state, dispatch] = useReducer(reducer, initialState);</p>
      {/* <Box/> */}
    </div>
  );
}

export default App;
