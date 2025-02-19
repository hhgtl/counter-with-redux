import s from './SetMenu.module.css';
import { Button } from '../Button/Button';
import { ChangeEvent, useEffect, useState } from 'react';
import {useAppDispatch} from "../../app/hooks/useAppDispatch";
import {setCountAC, setMaxValueAC, setStartValueAC} from "../../model/counterReducer";

type Props = {
  maxValue: number;
  startValue: number;
  toggleMenuTypeHandler: () => void;
};

export const SetMenu = ({
  toggleMenuTypeHandler,
  maxValue,
  startValue,
}: Props) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState(false);
  const [tempMaxValue, setTempMaxValue] = useState('');
  const [tempStartValue, setTempStartValue] = useState('');
  const tempMaxValueAsNumber = Number(tempMaxValue);
  const tempStartValueAsNumber = Number(tempStartValue);
  const maxValueLessZero = tempMaxValueAsNumber < 0;
  const startValueLessZero = tempStartValueAsNumber < 0;

  useEffect(() => {
    setTempMaxValue(String(maxValue));
    setTempStartValue(String(startValue));
  }, []);

  useEffect(() => {
    setError(tempMaxValueAsNumber <= tempStartValueAsNumber);
  }, [tempMaxValue, tempStartValue]);

  const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTempMaxValue(e.currentTarget.value);
  };
  const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTempStartValue(e.currentTarget.value);
  };

  const setValueHandler = () => {
    if (!error) {
      dispatch(setMaxValueAC({maxValue: tempMaxValueAsNumber}))
      dispatch(setStartValueAC({startValue: tempStartValueAsNumber}))
      dispatch(setCountAC({countValue: tempStartValueAsNumber}))
      toggleMenuTypeHandler();
      // setMaxValue(tempMaxValueAsNumber);
      // setStartValue(tempStartValueAsNumber);
      // setCount(tempStartValueAsNumber);
      // toggleMenuTypeHandler();
    }
  };

  return (
    <>
      <div className={s.value_configuration_menu_wrapper}>
        <div className={s.value_configuration_menu}>
          <label form="maxValue">max value</label>
          <input
            style={
              maxValueLessZero ? { outline: '2px solid #ff1a1a', backgroundColor: '#ffa0a0' } : {}
            }
            className={
              error ? `${s.value_configuration_input} ${s.error}` : s.value_configuration_input
            }
            id="maxValue"
            type="number"
            value={tempMaxValue}
            onChange={changeMaxValueHandler}
          />
        </div>

        <div className={s.value_configuration_menu}>
          <label form="startValue">start value</label>
          <input
            style={
              startValueLessZero ? { outline: '2px solid #ff1a1a', backgroundColor: '#ffa0a0' } : {}
            }
            className={
              error ? `${s.value_configuration_input} ${s.error}` : s.value_configuration_input
            }
            id="startValue"
            type="number"
            value={tempStartValue}
            onChange={changeStartValueHandler}
          />
        </div>
      </div>
      <div className={s.button_wrapper}>
        <Button
          onClick={setValueHandler}
          isDisabled={error || maxValueLessZero || startValueLessZero}
        >
          set
        </Button>
      </div>
    </>
  );
};
