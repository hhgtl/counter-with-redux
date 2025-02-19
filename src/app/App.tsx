import { useEffect, useState } from 'react';
import s from './App.module.css';
import { IncrimentMenu } from '../component/IncrimentMenu/IncrimentMenu';
import { SetMenu } from '../component/SetMenu/SetMenu';
import {useAppDispatch} from "./hooks/useAppDispatch";
import {incrimentAC, resetCountAC} from "../model/counterReducer";
import {useAppSelector} from "./hooks/useAppSelector";
import {counterSelector} from "../model/counterSelector";

function App() {
  const [menuType, setMenuType] = useState<'IncrimentMenu' | 'SetMenu'>('IncrimentMenu');
  const toggleMenuTypeHandler = () => {
    if (menuType === 'IncrimentMenu') {
      setMenuType('SetMenu');
    } else if (menuType === 'SetMenu') {
      setMenuType('IncrimentMenu');
    }
  };

  const dispatch = useAppDispatch();
   const {count, startValue, maxValue} = useAppSelector(counterSelector)

  const incrimentHandler = () => {
    dispatch(incrimentAC())
  }; //
  const resetCountHandler = () => {
    dispatch(resetCountAC())
  };

  // useEffect(() => {
  //   const counterValueAsString = localStorage.getItem('counterValue');
  //   const maxValueAsString = localStorage.getItem('maxValue');
  //   const startValueAsString = localStorage.getItem('startValue');
  //
  //   if (counterValueAsString) {
  //     setCount(JSON.parse(counterValueAsString));
  //   }
  //   if (maxValueAsString) {
  //     setMaxValue(JSON.parse(maxValueAsString))
  //   }
  //   if (startValueAsString) {
  //     setStartValue(JSON.parse(startValueAsString));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('counterValue', JSON.stringify(count));
  //   localStorage.setItem('maxValue', JSON.stringify(maxValue));
  //   localStorage.setItem('startValue', JSON.stringify(startValue));
  // }, [count, maxValue, startValue]);

  let currentMenu = (
    <IncrimentMenu
      countValue={count}
      maxValue={maxValue}
      startValue={startValue}
      incrimentHandler={incrimentHandler}
      resetCountHandler={resetCountHandler}
      toggleMenuTypeHandler={toggleMenuTypeHandler}
    />
  );
  if (menuType === 'SetMenu') {
    currentMenu = (
      <SetMenu
        toggleMenuTypeHandler={toggleMenuTypeHandler}
        maxValue={maxValue}
        startValue={startValue}
      />
    );
  }
  return <div className={s.App}>{currentMenu}</div>;
}

export default App;
