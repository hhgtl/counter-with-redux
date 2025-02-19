import s from './IncrimentMenu.module.css';
import { Button } from '../Button/Button';

type Props = {
  countValue: number;
  maxValue: number;
  startValue: number;
  incrimentHandler: () => void;
  resetCountHandler: () => void;
  toggleMenuTypeHandler: () => void;
};

export const IncrimentMenu = ({
  incrimentHandler,
  resetCountHandler,
  countValue,
  toggleMenuTypeHandler,
  maxValue,
  startValue,
}: Props) => {
  const incrimentBtnIsDisabled = countValue >= maxValue;
  const resetBtnIsDisabled = countValue === startValue;

  return (
    <>
      <div className={`${s.countNumber} ${incrimentBtnIsDisabled && s.limitNumber}`}>
        {countValue}
      </div>
      <div className={s.button_wrapper}>
        <Button onClick={incrimentHandler} isDisabled={incrimentBtnIsDisabled}>
          inc
        </Button>
        <Button onClick={resetCountHandler} isDisabled={resetBtnIsDisabled}>
          reset
        </Button>
        <Button onClick={toggleMenuTypeHandler}>set</Button>
      </div>
    </>
  );
};
